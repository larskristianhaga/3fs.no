// Prints Unlighthouse results to the job log and the GitHub job summary.
// Usage: node unlighthouse-summary.mjs <unlighthouse output dir>
import {appendFileSync, readFileSync, readdirSync} from 'node:fs'
import {join} from 'node:path'

const outDir = process.argv[2]
const categories = ['seo', 'accessibility', 'best-practices', 'performance']
const pct = (score) => (score == null ? '-' : String(Math.round(score * 100)))
const pages = (n) => `${n} page${n === 1 ? '' : 's'}`

const result = JSON.parse(readFileSync(join(outDir, 'ci-result.json'), 'utf8'))
const routes = [...result.routes].sort((a, b) => a.path.localeCompare(b.path))

// Failed audits from every page's Lighthouse report, grouped by audit
const failed = new Map()
for (const file of readdirSync(join(outDir, 'reports'), {recursive: true})) {
    if (!file.endsWith('lighthouse.json')) continue
    const lh = JSON.parse(readFileSync(join(outDir, 'reports', file), 'utf8'))
    const path = new URL(lh.finalDisplayedUrl ?? lh.finalUrl).pathname
    for (const category of categories) {
        for (const ref of lh.categories[category]?.auditRefs ?? []) {
            const audit = lh.audits[ref.id]
            // 0.9 is where Lighthouse itself marks an audit as passed
            if (ref.weight === 0 || audit.score === null || audit.score >= 0.9) continue
            const key = `${category}: ${audit.title}`
            if (!failed.has(key)) failed.set(key, {category, title: audit.title, pages: []})
            failed.get(key).pages.push(path)
        }
    }
}
const failedList = [...failed.values()].sort((a, b) =>
    categories.indexOf(a.category) - categories.indexOf(b.category) || b.pages.length - a.pages.length)

// Job log
const header = ['Page', 'SEO', 'A11y', 'Best pr.', 'Perf']
const rows = routes.map((r) => [r.path, ...categories.map((c) => pct(r.categories[c]?.score))])
const widths = header.map((h, i) => Math.max(h.length, ...rows.map((r) => r[i].length)))
const line = (cells) => cells.map((c, i) => (i === 0 ? c.padEnd(widths[i]) : c.padStart(widths[i]))).join('  ')
console.log(`Scanned ${pages(routes.length)}\n`)
console.log(line(header))
rows.forEach((r) => console.log(line(r)))
console.log(`\nFailed audits (${failedList.length})`)
for (const f of failedList) {
    console.log(`\n[${f.category}] ${f.title} (${pages(f.pages.length)})`)
    f.pages.sort().forEach((p) => console.log(`  ${p}`))
}

// Job summary (shown on the workflow run page)
if (process.env.GITHUB_STEP_SUMMARY) {
    const md = [
        `## SEO audit: ${pages(routes.length)}`,
        '',
        `| ${header.join(' | ')} |`,
        `|${header.map((_, i) => (i === 0 ? ' --- ' : ' ---: ')).join('|')}|`,
        ...rows.map((r) => `| ${r.join(' | ')} |`),
        '',
        `### Failed audits (${failedList.length})`,
        '',
        ...failedList.map((f) =>
            `<details><summary><b>${f.category}</b>: ${f.title.replace(/</g, '&lt;')} (${pages(f.pages.length)})</summary>\n\n${f.pages.sort().map((p) => `- \`${p}\``).join('\n')}\n</details>`),
    ]
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, md.join('\n') + '\n')
}
