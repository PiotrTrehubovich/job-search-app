import Head from 'next/head';
import React from 'react';
import * as styles from "./styles";
import Header from '@/components/UI/Header/Header';

interface IMainLayoutParams {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: IMainLayoutParams) {
  return (
    <>
      <Head>
        <title>{title ? title : "Shoes Shop"}</title>
        <meta
          name="description"
          content="Shoes Shop. The best solution for your comfort"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <styles.Layout>
        <Header />
        <styles.Main>{children}</styles.Main>
      </styles.Layout>
    </>
  );
}