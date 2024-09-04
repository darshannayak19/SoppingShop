import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import ProductType from '../components/Products/productTypes';
import Slideshow from '../components/Slideshow/Slideshow';
import About from '../components/Common/About';
import ContactUs from '../components/Contactus/Contactus';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Ethnic Doriya</title>
        <meta name="description" content="A great shopping site built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col">
      <Slideshow />
      <ProductType/>
      <About/>
      <ContactUs/>
      </main>
      {/* <ProductList /> */}
    </div>
  );
};

export default Home;