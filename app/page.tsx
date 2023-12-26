import Image from 'next/image'
import profilePic from '../public/images/profile-pic.png'
//import resume from '../public/dummy.pdf'
import Link from 'next/link'
import { BsBoxArrowUpRight } from "react-icons/bs"
import HireMe from './components/HireMe'

export default function Home() {

  return (
    <>
      <main className='flex items-center w-full h-[84vh] text-slate-900'>
        <div className='flex items-center w-full  justify-between mx-60 '>
        <div className='w-1/2'>
            <h1 className='text-6xl font-bold items-center '>
              Hi there, I'm Esra! 
              <br />
              I'm a <span className='bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text'>software engineer.</span>
            </h1>
            <p className='text-lg font-medium mt-4'>
                I am a junior software engineer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non nostrum minima ipsam quasi, aspernatur repellendus rem voluptatum, sapiente aliquam tempore? Alias quasi earum minima mollitia modi aliquid, expedita inventore.
            </p>
            <div className='flex items-center'>
              <Link 
              href='/' 
              target={'_blank'}
              className='flex items-center mt-6 bg-purple-950 text-light hover:bg-purple-800 hover:text-light rounded-xl text-lg font-semibold border p-3 px-6'
              >Resume <BsBoxArrowUpRight className={'w-6 ml-1 font-extrabold'}/>
              </Link>
              <Link 
              href='mailto:esrasevinc@hotmail.com' 
              target={'_blank'}
              className='mt-4 bg-light text-purple-950 text-lg font-semibold ml-6 underline underline-offset-4'
              >Contact</Link>
            </div>

        </div>
        <div className='w-1/2'>
            <Image src={profilePic} alt='Profile Picture' className='w-[100%] h-auto'/>
        </div>
        </div>
        <HireMe />
      </main>
    </>
  )
}
