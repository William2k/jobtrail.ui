import type { NextPage } from 'next'
import Head from 'next/head'

import { post } from "../../../shared/utils/api-utils";
import useForm from "../../../shared/hooks/use-form";
import styles from './sign-in.module.css'

interface SignUpForm {
  Username: string,
  Password: string,
  RememberMe: boolean
}

const initial: SignUpForm = {
  Username: "",
  Password: "",
  RememberMe: false
};

const SignUp: NextPage = () => {
  const postSignIn = async () => {
    const res = await post("/account/login", values);

    console.log(res.status);
  }

  const { handleChange, handleSubmit, values } = useForm(initial, postSignIn);

  return (
      <div>
        <Head>
          <title>Sign In</title>
          <meta name="description" content="Sign Up page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.container}>
          <h1>
            Sign In
          </h1>

          <form onSubmit={handleSubmit} >
            <div>
              <span>
                Username:
              </span>
              <input type="text" name="Username" value={values.Username} onChange={handleChange} />
            </div>
            <div>
              <span>
                Password:
              </span>
              <input type="password" name="Password" value={values.Password} onChange={handleChange} />
            </div>
            <div>
              <span>
                Remember Me:
              </span>
              <input type="checkbox" name="RememberMe" value={values.RememberMe.toString()} onChange={handleChange} />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </main>
      </div>
    )
  }
  
  export default SignUp