// components/Icons.js
export const LinkedInIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M4.98 3.5A2.5 2.5 0 0 1 7.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 2.48-2.5ZM3 8.75h3.5v11.5H3V8.75Zm6 0H12v1.77c.42-.8 1.67-1.97 3.63-1.97C18.5 8.55 20 10 20 13.19v7.06h-3.5v-6.59c0-1.57-.56-2.64-1.97-2.64-1.07 0-1.71.72-1.99 1.42-.1.24-.13.58-.13.92v6.89H9V8.75Z"/>
    </svg>
  );

export function FacebookIcon({ className = "", ...rest }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        {...rest}
      >
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h3v3h-2a1 1 0 0 0-1 1V12h3l-.5 3h-2.5v7A10 10 0 0 0 22 12Z" />
      </svg>
    );
  }
  
  export function TwitterIcon({ className = "", ...rest }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        {...rest}
      >
        <path d="M22 5.9a8.4 8.4 0 0 1-2.4.67A4.17 4.17 0 0 0 21.4 4a8.3 8.3 0 0 1-2.6 1 4.14 4.14 0 0 0-7 3.77 11.74 11.74 0 0 1-8.5-4.3 4.14 4.14 0 0 0 1.28 5.53 4.1 4.1 0 0 1-1.87-.52v.05a4.15 4.15 0 0 0 3.32 4.06 4.2 4.2 0 0 1-1.86.07 4.15 4.15 0 0 0 3.87 2.88A8.33 8.33 0 0 1 2 18.57a11.73 11.73 0 0 0 6.29 1.85c7.55 0 11.68-6.24 11.68-11.64 0-.18 0-.35-.02-.53A8.2 8.2 0 0 0 22 5.9Z" />
      </svg>
    );
  }
  
  export function CopyIcon({ className = "", ...rest }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        {...rest}
      >
        <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v16h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM8 21V7h11v14H8Z" />
      </svg>
    );
  }