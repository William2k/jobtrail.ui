import '../shared/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav'
import axios from 'axios';
import { useConfig } from '../shared/config';


const MyApp: any = ({ Component, pageProps }: AppProps) => {
  axios.defaults.baseURL = useConfig.apiBaseURL;

  return (
    <>
      <Nav/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
