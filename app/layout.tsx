'use client'

import { GlobalStyles } from '@/app/global'
import { Noto_Sans_KR } from 'next/font/google'

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <title>웹 프론트엔드 이력서 - 오이슬</title>
      </head>
      <style jsx global>
        {`
          :root {
            --font-noto-sans-kr: ${notoSansKR.style.fontFamily};
          }
        `}
      </style>

      <body className={notoSansKR.className}>
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}
