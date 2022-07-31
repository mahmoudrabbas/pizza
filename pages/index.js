
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Slider from '../components/Slider';
import PizzaList from '../components/PizzaList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza</title>
        <meta charSet='utf-8' />
        <meta name='description' content='dddddddddddddd' />
      </Head>
      <Slider />
      <PizzaList />
    </>
  )
}
