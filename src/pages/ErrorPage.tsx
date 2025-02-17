import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  let err = useRouteError();

  let message = (err instanceof Error && err.message) || 'Unknown error';

  return (
    <>
      <h1>Some error accoured.</h1>
      <h3>Error: {message}</h3>
    </>
  );
}

export default ErrorPage;
