import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import LoganModel from "../components/Models/LoganModel";
import RegisterModel from "../components/Models/RegisterModel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModel />
      <LoganModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
