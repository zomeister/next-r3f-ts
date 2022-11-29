import Document, { Html, Head, Main, NextScript } from 'next/document';

/** This file should be very simple and should not
 * need to be edited a lot.*/
/** <body/> tag is optional. The rest are not. */

/** this <Head> is different from the 'next/head' and should be
 * shared across all pages. (bare-bones).
 * 
 * No application logic can be applied (use Layouts for those).
 * Cannot use { getStaticProps | getServerSideProps }.
 */
export default class CostumDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta lang="en"/>
          <meta name="author" content="ZoeYG" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
