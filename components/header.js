import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const works = {
	name:'',
	discription:''}
export default function Header() {
  return (
	<div className="flex justify-center mx-auto sm:px-6 lg:px-8 my-4">
		<div className='flex mx-2 items-center flex-col-reverse md:flex-row md:w-2/3'>
			<div className='md:w-1/2'>
				<h2 className='text-4xl text-slate-600'>Hi! I'm <span className='text-blue-600 font-medium'>Ryotaro Oku</span>,<br />
					a <span className='text-amber-500'>Frontend</span> and <span className='text-amber-500'>QA</span> developer.
				</h2>
				<p className='font-medium text-slate-500 py-4'>Skilled in JavaScript, React, HTML5, CSS3, and Python.</p>
				<p className='pt-4 text-slate-500'>
					I am a Frontend developer who is passionate about building in JavaScript (including React) and also hands-on User Experience design.<br />
					Ping me if you are interested!
				</p>
			</div>
			<div className='w-1/2'>
				<Image
					src='/oku.svg'
					alt="Ryotaro Oku"
					width={500}
					height={500}
				></Image>
			</div>
		</div>
	</div>
  )
}
