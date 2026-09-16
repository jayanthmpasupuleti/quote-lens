/**
 * Date and relative time helpers
 */
export function formatRelativeDate(dateString: string): string {
  // If it's already a relative phrase like "2 days ago", return directly
  if (dateString.includes('ago') || dateString.includes('yesterday') || dateString.includes('today')) {
    return dateString;
  }

  const parsed = new Date(dateString);
  if (isNaN(parsed.getTime())) {
    return dateString;
  }

  const now = new Date();
  const diffMs = now.getTime() - parsed.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return 'Just now';
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

  return parsed.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
