import { motion } from "framer-motion";
import Head from "next/head";

const HeaderLayout = ({ title, children }) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title} - Tantos</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}
      {children}
    </>
  );
};

export default HeaderLayout;
