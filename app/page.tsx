import Home from "./Home"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SuoerwindUI',
  description: 'モダンなUIを超速で開発できる次世代のコンポーネントライブラリを提供します。',
  openGraph: {
    title: 'SuperwindUI',
    description: 'モダンなUIを超速で開発できる次世代のコンポーネントライブラリを提供します。',
    url: 'superwindui.netlify.app/${postId}',
    siteName: 'SuperwindUI',
    images: [
      {
        width: '1200',
        height: '675',
        url: '/images/superwindui.png',
      }
    ],
    locale: 'jp',
    type: 'website',
  }
}

const page = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default page