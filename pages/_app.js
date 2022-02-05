import "../styles/globals.css"
import Layout from "../components/Layout.js"
import Nav from "../components/Nav.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
