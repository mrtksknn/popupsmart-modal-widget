import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render () {
    return (
      <Html>
        <Head>
          <link
            // eslint-disable-next-line max-len
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta content="width=device-width,initial-scale=1" name="viewport" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
