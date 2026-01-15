export interface Contribution {
  id: string;
  title: string;
  description: string;
  type: 'pr' | 'fr' | 'discussion' | 'repo' | 'plugin';
  url: string;
  repository: string;
  category: 'opensource' | 'plugins_and_rules' | 'ai_projects';
  tags: string[];
  date: string; // ISO 8601 format: YYYY-MM-DD
  icon: string;
}

export interface CategoryItem {
  id: string;
  label: string;
  description: string;
}

export const categories: Record<string, CategoryItem> = {
  opensource: {
    id: 'opensource',
    label: 'Open Source Contributions',
    description: 'Active contributions to open source projects and communities',
  },
  plugins_and_rules: {
    id: 'plugins_and_rules',
    label: 'Plugins & Rules',
    description: 'Plugins, coding rules, and development standards',
  },
  ai_projects: {
    id: 'ai_projects',
    label: 'AI Projects',
    description: 'AI-powered tools and innovative projects',
  },
};

export const contributions: Contribution[] = [
  {
    id: 'mcp-pr-749',
    title: 'Multi-Server Support for MCP Inspector - PR #749',
    description: 'Enabled multi-server debugging and management in MCP Inspector with backward compatibility.',
    type: 'pr',
    url: 'https://github.com/modelcontextprotocol/inspector/pull/749',
    repository: 'modelcontextprotocol/inspector',
    category: 'opensource',
    tags: ['MCP', 'Inspector', 'Multi-Server'],
    date: '2025-08-26',
    icon: '🔍',
  },
  {
    id: 'mcp-pr-890',
    title: 'MCP Inspector Server Overview Tab - PR #890',
    description: 'Add server overview tab to display server capabilities and configuration in a centralized view.',
    type: 'pr',
    url: 'https://github.com/modelcontextprotocol/inspector/pull/890',
    repository: 'modelcontextprotocol/inspector',
    category: 'opensource',
    tags: ['MCP', 'Inspector', 'Server Overview'],
    date: '2025-10-26',
    icon: '⚡',
  },
  {
    id: 'cline-discussion-6704',
    title: 'Cline: /secure-deep-planning #6704',
    description: 'Proposed Secure Deep Planning command for security-focused implementation plans in production applications.',
    type: 'fr',
    url: 'https://github.com/cline/cline/discussions/6704',
    repository: 'cline/cline',
    category: 'opensource',
    tags: ['AI IDE', 'AI Development', 'Community'],
    date: '2025-10-08',
    icon: '💬',
  },
  {
    id: 'cline-discussion-7554',
    title: 'Cline: Incremental Implementation #7554',
    description: 'Proposed command for step-by-step implementation with developer checkpoints between each step.',
    type: 'fr',
    url: 'https://github.com/cline/cline/discussions/7554',
    repository: 'cline/cline',
    category: 'opensource',
    tags: ['AI IDE', 'AI Development', 'Community'],
    date: '2025-11-19',
    icon: '🚀',
  },
  {
    id: 'collaborative-rules',
    title: 'Collaborative Coding Rules Repository',
    description: 'Contributed to establishing coding standards and collaborative development guidelines for multi-IDE support and team coordination.',
    type: 'repo',
    url: 'https://github.com/EladAriel/collaborative-coding-rules',
    repository: 'EladAriel/collaborative-coding-rules',
    category: 'plugins_and_rules',
    tags: ['Collaboration', 'Coding Standards', 'Multi-IDE'],
    date: '2025-11-19',
    icon: '📋',
  },
  {
    id: 'pseudo-code-plugin',
    title: 'Pseudo-Code Prompting Claude Plugin',
    description: 'Created a Claude plugin for pseudo-code prompting - a methodology to transform natural language into structured, code-style specifications.',
    type: 'plugin',
    url: 'https://github.com/EladAriel/pseudo-code-prompting-plugin',
    repository: 'EladAriel/pseudo-code-prompting-plugin',
    category: 'plugins_and_rules',
    tags: ['Claude', 'Plugin', 'Prompting'],
    date: '2026-01-14',
    icon: '🔌',
  },
];
