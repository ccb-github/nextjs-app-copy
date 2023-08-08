'use client'; // Error components must be Client components

import { Boundary } from '#/ui/Boundary';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Boundary labels={['Home page Error UI']} color="pink">

      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
	  <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Go back
      </button>
	</Boundary>
  );
}

