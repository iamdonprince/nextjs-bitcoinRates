import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

function about() {
  return (
    <Layout about>
      <Head>
        <title> About Us</title>
      </Head>

      <h1>BizApplication About </h1>
    </Layout>
  );
}

export default about;
