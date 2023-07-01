'use client' 
import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
import Header from '@/components/Header';


// const DynamicHeader = dynamic(() => import('../components/Header'), {
//   ssr: true, // Sử dụng server-side rendering cho phần header
// });

const Home = () => {

  return (
    <main>
      <Header />
    </main>
  );
};

export default Home;
