import { Header } from '@/components/Header';
import { ContributionCard } from '@/components/ContributionCard';
import { contributions, categories } from '@/data/contributions';
import './page.css';

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
              <span className="hero-subtitle text-4xl md:text-5xl">
                Open Source & Projects
              </span>
            </h1>

            <p className="hero-description text-lg md:text-xl mb-8 leading-relaxed">
              Showcasing engineering work across open source contributions, plugins, AI projects, and professional development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contributions"
                className="hero-cta-button"
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
        <section className="stats-section">
          <div className="container-custom">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number gradient-text">
                  {sortedGrouped['opensource']?.length || 'TBD'}
                </div>
                <p className="stat-label">
                  Open Source
                </p>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">
                  {sortedGrouped['plugins_and_rules']?.length || 'TBD'}
                </div>
                <p className="stat-label">
                  Plugins & Rules
                </p>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">
                  {sortedGrouped['ai_projects']?.length || 'TBD'}
                </div>
                <p className="stat-label">
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
          <p className="hero-description text-lg mb-16">
            Engineering expertise across multiple domains and communities
          </p>

          {categoriesDisplay.map((category) => (
            <div key={category.key} className="mb-20">
              <div className="category-header">
                <div className="category-accent" />
                <div className="category-content">
                  <h3 className="category-title">
                    {category.label}
                  </h3>
                  <p className="section-description">
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
                <div className="empty-state">
                  <p className="empty-state-text">
                    Coming soon...
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container-custom">
            <div className="footer-content">
              <p className="footer-text">
                © 2026 AI Portfolio. Built with{' '}
                <span className="text-ai-600 dark:text-ai-400">Next.js</span>,{' '}
                <span className="text-ai-600 dark:text-ai-400">React</span>, and{' '}
                <span className="text-ai-600 dark:text-ai-400">Tailwind CSS</span>.
              </p>
              <div className="footer-links">
                <a href="https://github.com/eladariel" target="_blank" rel="noopener noreferrer" className="footer-link">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/elad-ariel-856abb101" target="_blank" rel="noopener noreferrer" className="footer-link">
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
