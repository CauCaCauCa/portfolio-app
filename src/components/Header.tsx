import React, { useEffect, useState } from 'react'
import './styles/Header.scss'

type Props = {}

export default function Header({ }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  function Mobile() {
    return (
      <div id='mobile'>
      </div>
    )
  }
  function Desktop() {
    return (
      <div id='desktop'>

      </div>
    )
  }
  return (
    <div id='header'>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  )
}