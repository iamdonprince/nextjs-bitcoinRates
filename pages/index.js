import Head from "next/head";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title> BitPrice Cheker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> The BizApplication </h1>
      <Prices bpi={props.data.bpi} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60,
  };
}
