'use client';

import { useEffect, useState } from 'react';

//Styles
import styles from './page.module.scss';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error_container}>
      <h2>Something went wrong!</h2>
      <br />
      <p>Somethig went wrong while attempting to fetch the data.</p>
      <p>Press the button to re-attempt</p>
      <br />

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
