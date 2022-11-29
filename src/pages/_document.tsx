import { Html, Head, Main, NextScript } from 'next/document';


/** <body/> tag is optional. The rest are not. */

/** this <Head> is different from the 'next/head' and should be
 * shared across all pages. (bare-bones).
 * 
 * No application logic can be applied (use Layouts for those).
 * Cannot use { getStaticProps | getServerSideProps }.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className="doc-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
