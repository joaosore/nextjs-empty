import { GetStaticProps } from 'next';
import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Head from 'next/head';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>

      <main className={styles.contentContainer}>
      
      <Checkbox onChange={onChange}>Checkbox</Checkbox>

  </main>
    </>
  );
}

// export const getServerSideProps : GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {
  // const price = await stripe.prices.retrieve('price_1Lez8FEJY6OQq1hJ2hRnpR5i', {
  //   expand: ['product'],
  // });

  // const product = {
  //   priceId: price.id,
  //   amount: new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'USD',
  //   }).format(price.unit_amount / 100),
  // };

  return {
    props: {
      // product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
