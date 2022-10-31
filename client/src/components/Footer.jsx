import React from 'react'
import Logo from'./../img/logo.png'


const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>Made with core and <b>React Js</b>.</span>
    </footer>
  )
}

export default Footer