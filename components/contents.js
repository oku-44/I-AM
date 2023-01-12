import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa"

const inter = Inter({ subsets: ['latin'] })

const contact = [
	{ name: 'GitHub', href: '#', icon: FaGithub, current: false },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/ryotaro-oku/', icon: FaLinkedinIn, current: false },
	{ name: 'email', href: 'https://www.linkedin.com/in/ryotaro-oku/', icon: FaLinkedinIn, current: false },
	{ name: 'phone', href: 'https://www.linkedin.com/in/ryotaro-oku/', icon: FaLinkedinIn, current: false },
	]

export default function Contents() {
	return (
	<div className="rounded-md mx-2 md:mx-10 flex justify-center bg-sky-100 sm:px-6 lg:px-8 my-4">
		<div className='flex justify-center md:w-2/3'>aaaa</div>
	</div>
	)
}
