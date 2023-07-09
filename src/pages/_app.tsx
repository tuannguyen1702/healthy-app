import Footer from '@/shared/layouts/Footer'
import Header from '@/shared/layouts/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="flex flex-col h-screen">
    <Header />
    <main className="mt-16">
      <Component {...pageProps} />
    </main>
    <Footer/>
  </div>
}
