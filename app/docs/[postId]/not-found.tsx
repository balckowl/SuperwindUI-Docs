import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main>
        <p>Go back to the<Link href="/static">docs</Link></p>
    </main>
  )
}

export default NotFound