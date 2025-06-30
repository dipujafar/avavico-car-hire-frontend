'use client';
import React from 'react';

export function useFullUrl(): { origin: string; full: string } {
  const [url, setUrl] = React.useState({ origin: '', full: '' });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl({
        origin: window.location.origin,
        full: window.location.href,
      });
    }
  }, []);

  return url;
}
