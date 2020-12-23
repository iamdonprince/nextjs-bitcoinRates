import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

function Layout({ children, ...addition }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="" />
      </Head>
      <Navbar {...addition} />
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;
