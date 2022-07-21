import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ModelY from '../components/ModelY'
import ModelS from '../components/ModelS'
import ModelX from '../components/ModelX'
import SolarPanel from '../components/SolarPanel'
import SolarRoof from '../components/SolarRoof'
import Access from '../components/Access'



export default function Home() {
  return (
    <>
    <Head>
      <title> Tesla Clone</title>
      <meta name="viewport" width="width=device-width, initial-scale=1.0"></meta>
    </Head>
      <Navbar />
      <Header />
      <ModelY />
      <ModelS />
      <ModelX />
      <SolarPanel />
      <SolarRoof />
      <Access/>
    </>
  )
}
