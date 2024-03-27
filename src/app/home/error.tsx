'use client';

import { useEffect, useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  const [isClientRendered, setIsClientRendered] = useState(false) 

  useEffect(() => {
    // Log the error to an error reporting service
    setIsClientRendered(true)
    if (isClientRendered){
      console.error(error);
    }
  }, [error, isClientRendered]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
