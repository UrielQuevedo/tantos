import Head from "next/head";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Guardar estadisticas de un jugador de basquet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
