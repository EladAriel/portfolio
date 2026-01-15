'use client';

import { Contribution } from '@/data/contributions';
import Link from 'next/link';

interface ContributionCardProps {
  contribution: Contribution;
}

export function ContributionCard({ contribution }: ContributionCardProps) {
  const typeColors = {
    pr: 'from-blue-500 to-cyan-500',
    fr: 'from-purple-500 to-pink-500',
    discussion: 'from-purple-500 to-pink-500',
    repo: 'from-green-500 to-emerald-500',
    plugin: 'from-orange-500 to-red-500',
  };

  return (
    <Link href={contribution.url} target="_blank" rel="noopener noreferrer">
      <div className="group h-full cursor-pointer">
        <div className="h-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-ai-500 dark:hover:border-ai-400 transition-all duration-300 overflow-hidden hover:shadow-glow dark:hover:shadow-glow-dark">
          {/* Gradient Header */}
          <div className={`bg-gradient-to-r ${typeColors[contribution.type]} h-1`} />

          {/* Content */}
          <div className="p-6">
            {/* Header with left icon only */}
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{contribution.icon}</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-ai-600 dark:group-hover:text-ai-400 transition-colors line-clamp-2">
                  {contribution.title}
                </h3>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {contribution.type}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {contribution.description}
            </p>

            {/* Repository and Category */}
            <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {contribution.repository}
              </span>
              <span className="text-ai-600 dark:text-ai-400 font-semibold">
                {contribution.date}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {contribution.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-ai-100 dark:bg-ai-900 text-ai-700 dark:text-ai-300 border border-ai-300 dark:border-ai-700"
                >
                  {tag}
                </span>
              ))}
              {contribution.tags.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                  +{contribution.tags.length - 3}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="mt-4 flex items-center text-ai-600 dark:text-ai-400 font-semibold text-sm group-hover:gap-2 transition-all">
              View on GitHub
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
