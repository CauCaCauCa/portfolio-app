import Header from '@/components/Header'
import LoginPage from '@/components/Login'
import React, { useState } from 'react'

type Props = {}

export default function Index({ }: Props) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <Header />
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
