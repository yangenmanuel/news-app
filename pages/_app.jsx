import Head from 'next/head'
import NavBar from '../components/NavBar'
import PropTypes from 'prop-types'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>News App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover over 80k+ news" />
      </Head>

      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = { 
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}