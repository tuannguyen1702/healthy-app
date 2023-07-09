import Header from '@/shared/layouts/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="flex flex-col h-screen">
    <Header />
    <main className="flex-1 mt-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </main>
  </div>
}
