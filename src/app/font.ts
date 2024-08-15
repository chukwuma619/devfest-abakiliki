import localFont from 'next/font/local'

export const googleSans = localFont({
    src: [
      {
        path: './ProductSans-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './ProductSans-Italic.ttf',
        weight: '400',
        style: 'italic',
      },

      {
        path: './ProductSans-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: './ProductSans-MediumItalic.ttf',
        weight: '500',
        style: 'italic',
      },
      {
        path: './ProductSans-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
      {
        path: './ProductSans-BoldItalic.ttf',
        weight: '700',
        style: 'italic',
      },
    ],
  })