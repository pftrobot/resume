import { Metadata } from 'next'
import { ReactNode } from 'react'

import GlobalStyleClient from './GlobalStyleClient'

export const metadata: Metadata = {
  description: '웹 프론트엔드 개발자 오이슬의 이력서 페이지입니다.',
  keywords: [
    '프론트엔드',
    'Frontend',
    '웹개발',
    '개발자',
    'Developer',
    '경력',
    '이력서',
    'Javascript',
    'Typescript',
    'React',
    'Next',
    'Vue',
    'GSAP',
    'WebGL',
  ],
  authors: [{ name: '오이슬' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.pftrobot.com',
    title: '웹 프론트엔드 - 오이슬',
    description: '웹 프론트엔드 개발자 오이슬의 이력서 페이지입니다.',
    siteName: "Oh Yiseul's Resume",
    images: [
      {
        url: '/images/meta.jpg',
        width: 800,
        height: 600,
        alt: '웹 프론트엔드 - 오이슬',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <title>웹 프론트엔드 - 오이슬</title>
      </head>
      <GlobalStyleClient />
      <body>{children}</body>
    </html>
  )
}
