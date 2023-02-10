import React from "react";
import Head from "next/head";
import { MyLink } from "./MyLink";

export const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs, next, " + keywords} />
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <MyLink href={"/"} text="Main" />
        <MyLink href={"/users"} text="Users" />
        <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
            }
          `}
        </style>
      </div>
      <div>{children}</div>
    </>
  );
};
