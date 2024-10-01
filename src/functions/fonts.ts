import { Baloo_2 } from 'next/font/google'
import { Roboto } from 'next/font/google'

export const type_first = Baloo_2({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--type-first',
    display: 'swap',
})

export const type_second = Roboto({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--type-second',
    display: 'swap',
})