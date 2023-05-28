import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="space-y-8 container-area">
      <h1 className="home-title">Oops! Not Found</h1>
      <p>This is where you should tell the user how to find their content. Maybe on the 
        <Link className="font-bold transition-all duration-300 border-b border-transparent text-ghost hover:border-ghost" href="/">
          home page?
        </Link>
      </p>
    </div>
  )
}
