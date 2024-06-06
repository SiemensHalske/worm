import Head from "next/head";
import React from "react";

interface CustomHeadProps {
  title: string;
  description?: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
