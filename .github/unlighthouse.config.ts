// Config for the SEO audit workflow (.github/workflows/seo-audit.yml)
// SITE_URL comes from the repo variable of the same name
export default {
  site: process.env.SITE_URL,
  scanner: {
    // Small site: scan every page instead of sampling similar routes
    dynamicSampling: false,
    device: 'mobile',
  },
  ci: {
    // Performance is left out: scores swing too much on shared CI runners
    budget: {
      seo: 95,
      accessibility: 90,
      'best-practices': 90,
    },
    reporter: 'jsonExpanded',
  },
}
