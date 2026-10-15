// Config for the SEO audit workflow (.github/workflows/seo-audit.yml)
export default {
  site: 'https://3fs.vercel.app',
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
    buildStatic: true,
    reporter: 'jsonExpanded',
  },
}
