/**
 * Fetches the specific error message from the dom, loads a reference
 * list of error codes and messages.
 * pages/_error.js is only used in production. In development you’ll
 * get an error with the call stack to know where the error originated from.
 */
// we could import 'next/link' to link back to the home page
// we could import 'next/Error' to render/augment the default error page.

function Error( { statusCode } ): JSX.Element {
  return (
    <p>{statusCode
      ? `an error ${statusCode} occured on the server`
      : 'an error occured on the client'}
    </p>
  );
}
/** COULD ADD to render the r3f 404.tsx, and 500.tsx as well or create our own. */
Error.getInitialProps = ({res, err}) => {
  const statusCode = res? res.statusCode : err? err.statusCode : 404
  return { statusCode };
}
/** DOES NOT support { getStaticProps | getServerSideProps } */
export default Error;
/** like `_app`, `_error` is a reserved pathname and is used to customize
 * layouts and behaviors of error pages. Accessing /_error will lead to 404.
 */
