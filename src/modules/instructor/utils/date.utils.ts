export function timeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return date.toLocaleDateString();
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 7) {
    return date.toLocaleDateString();
  }
  if (interval >= 1) {
    return interval + ' days ago';
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + ' hour ago';
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + ' minute ago';
  }
  return 'Just now';
}
