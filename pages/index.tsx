import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import Header from '../components/header/header'
import styles from '../styles/Home.module.css'
import { book_data } from '../data'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <div className="container">
        <h1 className='my-4'>Top 10 Books of 2022</h1>
        {book_data.map((book, idx) => {
          return <Card key={idx} image={book.image.src} bookTitle={book.title} bookDescription={book.description} bookLink={book.amazon_link} imageAlt={book.title} />
        })}

      </div>
    </>
  )
}

export default Home
