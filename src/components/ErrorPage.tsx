import React from "react";

interface ErrorPageProps {
  error?: Error | { statusText?: string };
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const errorMessage =
    (error as Error)?.message || (error as { statusText?: string })?.statusText;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
