import { Header } from '@/components/Header';
import { ContributionCard } from '@/components/ContributionCard';
import { contributions, categories } from '@/data/contributions';

export default function Home() {
  // Group contributions by category
  const grouped = contributions.reduce(
    (acc, contrib) => {
      if (!acc[contrib.category]) {
        acc[contrib.category] = [];
      }
      acc[contrib.category].push(contrib);
      return acc;
    },
    {} as Record<string, typeof contributions>
  );

  // Sort contributions by date descending (newest first)
  const sortedContributions = [...contributions].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Regroup by category with sorted contributions
  const sortedGrouped = sortedContributions.reduce(
    (acc, contrib) => {
      if (!acc[contrib.category]) {
        acc[contrib.category] = [];
      }
      acc[contrib.category].push(contrib);
      return acc;
    },
    {} as Record<string, typeof contributions>
  );

  // Ensure all categories are present (even if empty) - only 3 categories
  const allCategories = ['opensource', 'plugins_and_rules', 'ai_projects'] as const;
  const categoriesDisplay = allCategories.map(cat => ({
    key: cat,
    data: sortedGrouped[cat] || [],
    ...categories[cat]
  }));

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container-custom py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Engineering Portfolio</span>
              <br />
              <span className="text-gray-600 dark:text-gray-400 text-4xl md:text-5xl">
                Open Source & Projects
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Showcasing engineering work across open source contributions, plugins, AI projects, and professional development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contributions"
                className="px-8 py-3 rounded-lg bg-gradient-ai text-white font-semibold hover:shadow-glow transition-all hover:shadow-lg"
              >
                Explore Work →
              </a>
              <a
                href="https://github.com/eladariel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg border-2 border-ai-600 dark:border-ai-400 text-ai-600 dark:text-ai-400 font-semibold hover:bg-ai-50 dark:hover:bg-ai-900/20 transition-all"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {sortedGrouped['opensource']?.length || 'TBD'}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Open Source
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {sortedGrouped['plugins_and_rules']?.length || 'TBD'}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Plugins & Rules
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {sortedGrouped['ai_projects']?.length || 'TBD'}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  AI Projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contributions Section */}
        <section id="contributions" className="container-custom py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work & Contributions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-16">
            Engineering expertise across multiple domains and communities
          </p>

          {categoriesDisplay.map((category) => (
            <div key={category.key} className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-ai rounded-full" />
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {category.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {category.description}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-ai-100 dark:bg-ai-900 text-ai-700 dark:text-ai-300 text-sm font-semibold whitespace-nowrap">
                  {category.data.length} {category.data.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {category.data.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.data.map((contribution) => (
                    <ContributionCard
                      key={contribution.id}
                      contribution={contribution}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 text-center">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Coming soon...
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm">
                © 2026 AI Portfolio. Built with{' '}
                <span className="text-ai-400">Next.js</span>,{' '}
                <span className="text-ai-400">React</span>, and{' '}
                <span className="text-ai-400">Tailwind CSS</span>.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="https://github.com/eladariel" target="_blank" rel="noopener noreferrer" className="hover:text-ai-400 transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/elad-ariel-856abb101" target="_blank" rel="noopener noreferrer" className="hover:text-ai-400 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
