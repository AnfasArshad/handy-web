import React from 'react';

export function LinkedInIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GitHubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.01 2.003c-5.502 0-9.98 4.478-9.98 9.98 0 1.76.46 3.42 1.26 4.88L2 22l5.3-1.39a9.96 9.96 0 0 0 4.71 1.18h.01c5.5 0 9.98-4.48 9.98-9.98 0-2.67-1.04-5.18-2.93-7.07-1.89-1.88-4.4-2.92-7.06-2.92zm-.01 1.77c2.19 0 4.25.86 5.8 2.41 1.55 1.55 2.41 3.61 2.41 5.8 0 4.52-3.68 8.21-8.2 8.21-.01 0-.01 0 0 0-1.44 0-2.85-.38-4.08-1.11l-.29-.17-3.03.79.81-2.95-.19-.3a8.16 8.16 0 0 1-1.25-4.47c0-4.52 3.68-8.21 8.22-8.21zm4.8 11.23c-.26-.13-1.55-.77-1.79-.86-.24-.09-.42-.13-.59.13-.18.26-.68.86-.84 1.03-.15.18-.31.2-.57.07-.26-.13-1.11-.41-2.12-1.31-.78-.7-1.31-1.56-1.47-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.18-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.59-1.43-.81-1.96-.21-.51-.43-.44-.59-.45-.15-.01-.33-.01-.51-.01-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3 1.05 2.55 1.2 2.73.15.18 2.06 3.15 5 4.41.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.11.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.08-.13-.26-.2-.52-.33z" />
    </svg>
  );
}
