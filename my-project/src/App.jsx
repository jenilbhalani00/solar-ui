import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from './assets/Head'
import Menubar from './assets/Menubar'
import Solar from './assets/Solar'
import Calculater from './assets/Calculater'
import Quote from './assets/Quote'
import Choice from './assets/Choice'
import Developer from './assets/Developer'
import CarouselComponent from './assets/CarouselComponent'
import Last from './assets/Last';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Head/>
    <Menubar/>
    <Solar/>
    <Calculater/>
    <Quote/>
    <Choice/>
    <Developer/>
    <CarouselComponent/>
    <Last/>
    
    </>
  )
}

export default App
