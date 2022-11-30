import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout<P={}, IP=P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
};
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout }


/**
 * App component is responsible for loading/rendering all pages.
 * The endpoint in updating the components/pages for the application.
 * NODE-PROCESS - executes server-side & client-side by default.
 * (server-side rendering )
 * 
 * Document custom component only renders server-side. It is a react component
 * and like _app.tsx you should not have any js logic in this file.
 */
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })
  /* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
  Setting the event source to a shared parent allows both the dom and the canvas to receive events.
  Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */

export default function App({ Component, pageProps = { title: 'index' } }: AppPropsWithLayout) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
        {Component?.canvas && (
          <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  )
}
