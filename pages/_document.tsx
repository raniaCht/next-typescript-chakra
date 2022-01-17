import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import {GoogleFonts} from 'next-google-fonts'
import { ColorModeScript } from '@chakra-ui/react'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
      }
    render(): JSX.Element {
        return (
            <Html>
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&family=Public+Sans:wght@100;200;300;400;500;700&display=swap" />
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument