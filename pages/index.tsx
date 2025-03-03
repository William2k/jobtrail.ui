import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome
        </h1>
        <Link href={`/account/sign-up`}>
                <a>Sign Up</a>
        </Link>
      </main>
    </div>
  )
}

export default Home
