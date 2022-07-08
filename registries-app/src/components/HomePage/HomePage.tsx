import React from 'react'
import DocsSection from './DocsSection/DocsSection'
import Main from './Main/Main'
import News from './News/News'
import Registry from './Registry/Registry'

export default function HomePage() {
  return (
    <>
      <Main />
      <Registry />
      <News />
      <DocsSection />
    </>
  )
}
