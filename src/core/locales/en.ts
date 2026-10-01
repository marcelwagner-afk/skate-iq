/* English – default locale. Keys only, never hard-coded text in components. */
export const en: Record<string, string> = {
  // Brand & nav
  'brand.name': 'SKATE IQ',
  'brand.tagline': 'Performance Intelligence for World Skate Sports',
  'brand.independent': 'Independent analytics product. Not affiliated with or endorsed by World Skate or any federation.',
  'nav.home': 'Dashboard', 'nav.athletes': 'Athletes', 'nav.compare': 'Compare',
  'nav.leaderboard': 'Leaderboards', 'nav.federation': 'Federation', 'nav.countries': 'Countries',
  'nav.talent': 'Talent Radar', 'nav.competitions': 'Competitions', 'nav.pricing': 'Pricing',
  'nav.admin': 'Data Quality', 'nav.demo': 'Demo mode', 'nav.landing': 'Start',
  'nav.search.placeholder': 'Search athletes, clubs, countries, competitions…',

  // Landing
  'landing.h1a': 'KNOW WHERE YOU STAND.', 'landing.h1b': 'KNOW WHAT COMES NEXT.',
  'landing.sub': 'SKATE IQ turns official competition results into clear performance intelligence — for athletes, coaches and federations across roller sports.',
  'landing.ctaExplore': 'Explore athletes', 'landing.ctaFree': 'Start free', 'landing.ctaFed': 'For federations',
  'landing.results': 'Results', 'landing.q1': 'Where do I stand?', 'landing.q2': 'What do I need to reach the next level?',
  'landing.feat.bench.h': 'International benchmarking', 'landing.feat.bench.p': 'Percentiles against world, continent, country and Top-N groups — only where statistically meaningful, always with the group size shown.',
  'landing.feat.athlete.h': 'Athlete intelligence', 'landing.feat.athlete.p': 'SPI, personal bests, development and consistency in one profile that reads in five seconds.',
  'landing.feat.fed.h': 'Federation intelligence', 'landing.feat.fed.p': 'Elite depth, talent pipeline and country gaps as decision support for performance directors.',
  'landing.feat.talent.h': 'Talent intelligence', 'landing.feat.talent.p': 'Fastest improvers and athletes approaching international thresholds — every classification explainable from data.',
  'landing.feat.comp.h': 'Competition intelligence', 'landing.feat.comp.p': 'Field strength, expected benchmarks and movement — before and after every event.',
  'landing.feat.multi.h': 'Built for all roller sports', 'landing.feat.multi.p': 'A sport-adapter architecture: Artistic first, Speed next, the World Skate ecosystem as the target.',
  'landing.demoNote': 'Preview uses synthetic demo data. Real federation data is imported only under an access agreement.',

  // Home
  'home.greeting': 'Good morning, {name}', 'home.sub': 'Your world of skating',
  'home.followed': 'Athletes followed', 'home.latest': 'Latest results', 'home.movers': 'Biggest movers',
  'home.pbs': 'New personal bests', 'home.week': 'Competitions this season', 'home.insights': 'Recommended insights',

  // KPI labels
  'kpi.world': 'World position', 'kpi.continent': 'Continent position', 'kpi.national': 'National position',
  'kpi.percentile': 'Global percentile', 'kpi.spi': 'SPI', 'kpi.pb': 'Personal best', 'kpi.sb': 'Season best',
  'kpi.trend12': '12-month development', 'kpi.consistency': 'Consistency score', 'kpi.gapTop10': 'Top-10 gap',
  'kpi.athletes': 'Athletes', 'kpi.top10': 'World Top 10', 'kpi.top25': 'World Top 25', 'kpi.top50': 'World Top 50',
  'kpi.medals': 'International podiums', 'kpi.avgSpi': 'Average SPI', 'kpi.avgPercentile': 'Avg. intl. percentile',
  'kpi.emerging': 'Emerging talents', 'kpi.development': '12-month development',

  // Athlete profile
  'athlete.about': 'Profile', 'athlete.development': 'Performance development',
  'athlete.benchmarks': 'International benchmarks', 'athlete.results': 'Competition results',
  'athlete.spi.why': 'Why this SPI?', 'athlete.spi.explain': 'Every dimension below is a documented formula over the shown inputs. Weights are sport-specific.',
  'athlete.whatittakes': 'What does it take?', 'athlete.target': 'Your target',
  'athlete.current': 'Current best', 'athlete.benchmark': 'Target benchmark', 'athlete.gap': 'Gap',
  'athlete.largestOpportunity': 'Largest opportunity', 'athlete.breakdown': 'Breakdown',
  'athlete.corridor': 'Benchmark corridor (p25–p75 of {group}, n={n})',
  'athlete.share': 'Share card', 'athlete.follow': 'Follow',
  'athlete.confidence.low': 'low data confidence', 'athlete.confidence.medium': 'medium data confidence', 'athlete.confidence.high': 'high data confidence',
  'athlete.privacyNote': 'Minor-protection rules apply: no birthdates, category-based age display only.',

  // SPI dimensions
  'spi.dim.internationalCompetitiveness': 'International competitiveness',
  'spi.dim.performanceLevel': 'Performance level',
  'spi.dim.consistency': 'Consistency',
  'spi.dim.recentForm': 'Recent form',
  'spi.dim.developmentRate': 'Development rate',
  'spi.dim.competitionStrength': 'Competition strength',
  'spi.explain.intl': 'Percentile of the season best within the world comparison group ({groupN} athletes).',
  'spi.explain.level': 'Season best relative to the current world-best value.',
  'spi.explain.consistency': 'Spread of this season’s values (coefficient of variation {cv}).',
  'spi.explain.recent': 'Average of the last 90 days versus the season average.',
  'spi.explain.development': 'Season best versus previous season best.',
  'spi.explain.strength': 'Average strength index of competitions entered.',
  'spi.explain.neutralNoData': 'Not enough data — neutral 50 applied, reflected in the confidence level.',

  // Benchmark groups
  'bench.group.world': 'World', 'bench.group.continent': 'Continent', 'bench.group.country': 'Country',
  'bench.group.top10': 'Top 10', 'bench.group.top25': 'Top 25', 'bench.group.top50': 'Top 50',
  'bench.group.podium': 'Podium benchmark', 'bench.group.athletes': 'Selected athletes', 'bench.group.countries': 'Selected countries',
  'bench.tooFewAthletes': 'Group too small for a meaningful percentile (n={n}, minimum 12).',
  'bench.officialNote': 'Official rankings come from federations. SKATE IQ analytical values are computed classifications and never official rankings.',

  // Compare
  'compare.title': 'Athlete compare', 'compare.add': 'Add athlete', 'compare.metric': 'Metric',
  'compare.h2h': 'Head-to-head', 'compare.card': 'Create comparison card',

  // Leaderboard
  'board.title': 'Leaderboards', 'board.official': 'OFFICIAL RANKING', 'board.analytical': 'SKATE IQ ANALYTICAL',
  'board.analyticalNote': 'Analytical ranking by {metric} — a computed classification, not an official federation ranking.',
  'board.rank': 'Rank', 'board.athlete': 'Athlete', 'board.value': 'Value',

  // Federation
  'fed.title': '{country} — Performance Intelligence',
  'fed.categoryHealth': 'Category health', 'fed.pipeline': 'Talent pipeline',
  'fed.attention': 'Athletes requiring attention', 'fed.breakthrough': 'Breakthrough athletes',
  'fed.improvers': 'Fastest improvers', 'fed.topPerformers': 'Top international performers',
  'fed.nearTop10': 'Approaching Top 10', 'fed.nearTop25': 'Approaching Top 25', 'fed.decline': 'Performance decline',

  // Countries
  'countries.title': 'Country performance matrix', 'countries.gap': 'Country gap analysis',
  'countries.col.athletes': 'Athletes', 'countries.col.dev': 'Development',
  'countries.vs': 'vs.', 'countries.eliteDepth': 'Elite depth', 'countries.juniorPipeline': 'Junior pipeline',
  'countries.seniorPerf': 'Senior performance', 'countries.medalPerf': 'Podium performance', 'countries.representation': 'International representation',

  // Talent radar
  'talent.title': 'Talent intelligence', 'talent.sub': 'Every classification is derived from the displayed data — no opaque talent verdicts.',
  'talent.BREAKTHROUGH': 'Breakthrough', 'talent.RISING': 'Rising', 'talent.HIGH_POTENTIAL': 'High potential',
  'talent.INTERNATIONAL': 'International level', 'talent.ELITE': 'Elite',
  'talent.why': 'Why this classification?',

  // Competitions
  'comp.title': 'Competitions', 'comp.strength': 'Field strength', 'comp.before': 'Preview', 'comp.after': 'Review',
  'comp.participants': 'Participants', 'comp.expected': 'Benchmark context', 'comp.results': 'Results',

  // Pricing
  'pricing.title': 'Plans', 'pricing.free': 'Free', 'pricing.athletePro': '€9.99/month or €99/year',
  'pricing.coachPro': '€299/year', 'pricing.clubPro': '€990/year',
  'pricing.fedStarter': '€2,900/year', 'pricing.fedPro': '€5,900/year', 'pricing.fedEnterprise': 'from €9,900/year',
  'pricing.note': 'Preview build: subscriptions are shown for product validation only — no payment is processed.',
  'pricing.sell.FREE': 'Public results and basic profiles.',
  'pricing.sell.ATHLETE_PRO': 'Understand your international position.',
  'pricing.sell.COACH_PRO': 'Know what your athletes need next.',
  'pricing.sell.CLUB_PRO': 'Benchmark your entire performance program.',
  'pricing.sell.FED_STARTER': 'Turn international results into performance strategy.',
  'pricing.sell.FED_PRO': 'Full talent and cockpit intelligence.',
  'pricing.sell.FED_ENTERPRISE': 'API, white label, custom KPIs, SSO.',
  'pricing.upgrade': 'Requires {plan}', 'pricing.currentPlan': 'Demo as plan:',

  // Admin
  'admin.title': 'Data quality', 'admin.sources': 'Data sources', 'admin.checks': 'Automated checks',
  'admin.identity': 'Identity resolution queue',

  // Insights
  'insight.percentileUp': 'International percentile improved from {from} to {to}.',
  'insight.percentileDown': 'International percentile decreased from {from} to {to}.',
  'insight.gapTop10': 'Currently {gap} {metric} below the Top-10 benchmark.',
  'insight.top10Reached': 'Top-10 benchmark reached.',
  'insight.stable4': 'Performance has been stable across the last four competitions.',
  'insight.developing': 'Developing faster than the previous season (development score {score}).',
  'insight.countryTop25': '{country} has {n} athletes in the international Top 25 in {category}.',

  // Shared
  'common.season': 'Season', 'common.sport': 'Sport', 'common.discipline': 'Discipline',
  'common.category': 'Category', 'common.country': 'Country', 'common.club': 'Club',
  'common.all': 'All', 'common.na': '–', 'common.n': 'n', 'common.date': 'Date',
  'common.competition': 'Competition', 'common.placement': 'Placement', 'common.level': 'Level',
  'common.loading': 'Loading…', 'common.notFound': 'Not found', 'common.back': 'Back',
  'common.computedNote': 'All values are computed classifications from official results — descriptive, no predictions, no recommendations.',
  'common.demoBadge': 'DEMO DATA — fictional athletes',
  'common.lang': 'Language',
  'metric.unit.points': 'pts', 'metric.unit.seconds': 's',

  // Sports / disciplines / categories (synthetic taxonomy)
  'sport.artistic': 'Artistic Skating', 'sport.speed': 'Speed Skating',
  'dis.artistic.kuer': 'Free Skating', 'dis.artistic.solotanz': 'Solo Dance',
  'dis.artistic.rolltanz': 'Couple Dance', 'dis.artistic.paarlauf': 'Pairs',
  'klasse.senioren': 'Seniors', 'klasse.junioren': 'Juniors', 'klasse.youth': 'Youth',
  'klasse.cadets': 'Cadets', 'klasse.espoir': 'Espoir', 'klasse.minis': 'Minis', 'klasse.tots': 'Tots',
  'gender.damen': 'Women', 'gender.herren': 'Men',
  'common.realBadge': 'REAL FEDERATION DATA — access-controlled use only, do not publish without login protection',
  'dis.speed.track': 'Track', 'dis.speed.road': 'Road',
  'cat.senior.w': 'Senior Women', 'cat.senior.m': 'Senior Men',
  'cat.junior.w': 'Junior Women', 'cat.junior.m': 'Junior Men',
  'age.senior': 'Senior', 'age.junior': 'Junior', 'gender.w': 'Women', 'gender.m': 'Men',
  'metric.total': 'Total score', 'metric.tes': 'Technical score', 'metric.pcs': 'Components',
  'metric.deductions': 'Deductions', 'metric.timeMs': 'Time', 'metric.speed': 'Avg. speed',
  'metric.points': 'Points', 'metric.consistency': 'Consistency', 'metric.bestLap': 'Best lap',

  // Countries
  'country.GER': 'Germany', 'country.ITA': 'Italy', 'country.ESP': 'Spain', 'country.POR': 'Portugal',
  'country.FRA': 'France', 'country.USA': 'United States', 'country.BRA': 'Brazil',
  'country.ARG': 'Argentina', 'country.AUS': 'Australia',
  // additional nations from the real import data
  'country.AIN': 'Neutral Athletes', 'country.AND': 'Andorra', 'country.BEL': 'Belgium',
  'country.BOL': 'Bolivia', 'country.CAN': 'Canada', 'country.CHI': 'Chile', 'country.CHN': 'China',
  'country.CIV': 'Ivory Coast', 'country.COL': 'Colombia', 'country.CRO': 'Croatia',
  'country.CZE': 'Czechia', 'country.DEN': 'Denmark', 'country.ECU': 'Ecuador',
  'country.EGY': 'Egypt', 'country.ESA': 'El Salvador', 'country.EST': 'Estonia',
  'country.GBR': 'Great Britain', 'country.HAI': 'Haiti', 'country.ISR': 'Israel',
  'country.JPN': 'Japan', 'country.KOR': 'South Korea', 'country.MAR': 'Morocco',
  'country.MEX': 'Mexico', 'country.NED': 'Netherlands', 'country.NZL': 'New Zealand',
  'country.PAN': 'Panama', 'country.PAR': 'Paraguay', 'country.ROM': 'Romania',
  'country.ROU': 'Romania', 'country.SLO': 'Slovenia', 'country.SLV': 'El Salvador',
  'country.SMR': 'San Marino', 'country.SUI': 'Switzerland', 'country.THA': 'Thailand',
  'country.TPE': 'Chinese Taipei', 'country.UKR': 'Ukraine', 'country.URU': 'Uruguay',
  'country.VEN': 'Venezuela',
};
