import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import LoganModel from "../components/Models/LoganModel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoganModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
