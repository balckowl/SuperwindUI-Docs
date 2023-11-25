import Home from "./Home"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SuperwindUI',
  description: '開発効率を超加速することのできる次世代のUIコンポーネントライブエラリです。',
}

const page = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default page