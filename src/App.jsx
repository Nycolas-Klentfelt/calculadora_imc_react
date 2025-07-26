import { useState } from 'react'
import Header from './components/Header'
import Calculator from './components/calculator'
import AboutIMC from './components/AboutIMC'
import Table from './components/Table'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Calculator/>
      <AboutIMC/>
      <Table/>
      <Footer/>
    </>
  )
}

export default App
