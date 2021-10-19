import Head from "next/head";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);

  useEffect(() => {
    router.push(window.location.pathname);
  }, []);

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
