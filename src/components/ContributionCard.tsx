'use client';

import { Contribution } from '@/data/contributions';
import Link from 'next/link';
import './ContributionCard.css';

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
      <div className="contribution-card group">
        <div className="contribution-card-inner">
          {/* Gradient Header */}
          <div className={`bg-gradient-to-r ${typeColors[contribution.type]} h-1`} />

          {/* Content */}
          <div className="contribution-card-content">
            {/* Header with left icon only */}
            <div className="contribution-card-header">
              <span className="contribution-card-icon">{contribution.icon}</span>
              <div className="contribution-card-title-container">
                <h3 className="contribution-card-title">
                  {contribution.title}
                </h3>
                <span className="contribution-card-type">
                  {contribution.type}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="contribution-card-description">
              {contribution.description}
            </p>

            {/* Repository and Category */}
            <div className="contribution-card-meta">
              <span className="contribution-card-repo">
                {contribution.repository}
              </span>
              <span className="contribution-card-date">
                {contribution.date}
              </span>
            </div>

            {/* Tags */}
            <div className="contribution-card-tags">
              {contribution.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="contribution-card-tag">
                  {tag}
                </span>
              ))}
              {contribution.tags.length > 3 && (
                <span className="contribution-card-tag-more">
                  +{contribution.tags.length - 3}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="contribution-card-cta">
              View on GitHub
              <svg className="contribution-card-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
