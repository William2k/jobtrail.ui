import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './sign-up.module.css'

const SignUp: NextPage = () => {
    return (
      <div>
        <Head>
          <title>Sign Up</title>
          <meta name="description" content="Sign Up page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.container}>
          <h1>
            Sign Up
          </h1>

          <form>
          </form>
        </main>
      </div>
    )
  }
  
  export default SignUp