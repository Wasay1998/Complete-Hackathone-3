
import { CiPhone} from 'react-icons/ci';
import { TfiEmail } from 'react-icons/tfi';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import React from 'react'

const Topsale = () => {
  return (
    <section className='w-full h-[46px] bg-black flex justify-between items-center px-6'>
  <div className='flex items-center gap-[10px]'>
    {/* Phone Number as a Link */}
    <h1 className='text-white'>
      <a href="tel:+12255550118" className="flex items-center gap-2">
        <CiPhone /> (225) 555-0118
      </a>
    </h1>
    
    {/* Email as a Link */}
    <h2 className='flex items-center gap-[3px]'>
      <TfiEmail />
      <a href="mailto:michelle.rivera@example.com" className="text-white">
        michelle.rivera@example.com
      </a>
    </h2>
  </div>

  <div className='w-[334px]'>
    <p className='text-white'>Follow Us and get a chance to win 80% off</p>
  </div>

  <div className='flex items-center gap-4'>
    <span className='text-[16px] text-white'>Follow Us:</span>
    <div className='flex gap-2'>
      {/* Social Media Icons as Links */}
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='text-white hover:text-[#B4B4B4] transition' />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className='text-white hover:text-[#B4B4B4] transition' />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className='text-white hover:text-[#B4B4B4] transition' />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className='text-white hover:text-[#B4B4B4] transition' />
      </a>
    </div>
  </div>
</section>

  
 )
}
export default Topsale;
