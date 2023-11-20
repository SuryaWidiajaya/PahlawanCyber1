import Image from 'next/image';
import Logo from '../../../public/image/LogoFooter.svg'
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='border-t-[4px] border-[#9747FF] bg-[#F4F8F3]'>
      <div className="max-w-[1350px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
            <div className='flex items-center'>
            <Image src={Logo} alt="Logo" className='mr-3' />
                <h1 className="w-full text-[32px] font-bold text-[#192752]">PahlawanCyber</h1>
            </div>
          <p className="py-4 text-[#58768C]">Pahlawancyber adalah sebuah website edukasi terbaik untuk anak-anak dengan metode belajar yang seru dan menyenangkan.</p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={50} />
            <FaInstagramSquare size={50} />
            <FaTwitterSquare size={50} />
           
          </div>
        </div>
        <div className="lg:col-span-2 flex mt-3">
          <div className='mr-[168px]'>
            <h6 className=" text-[#192752] font-bold text-[24px] mb-7">Pages</h6>
            <ul>
              <li className="py-2 text-[16px] text-[#58768C]">Home</li>
              <li className="py-2 text-[16px] text-[#58768C]">About</li>
              <li className="py-2 text-[16px] text-[#58768C]">Panduan</li>
            </ul>
          </div>
          <div className='mr-[168px]'>
            <h6 className=" text-[#192752] font-bold text-[24px] mb-7">Kategori</h6>
            <ul>
              <li className="py-2 text-[16px] text-[#58768C]">Cerita</li>
              <li className="py-2 text-[16px] text-[#58768C]">Kuis</li>
              <li className="py-2 text-[16px] text-[#58768C]">Video</li>
            </ul>
          </div>
          <div>
          <h6 className=" text-[#192752] font-bold text-[24px] mb-10">Berlangganan Website</h6>
          <input type='text' placeholder='Alamat email kamu' className='p-2 rounded-md w-[260px]'/>
          <button className='bg-[#192752] text-white font-[24px] p-2 rounded-md mt-5'>Subscribe</button>
          </div>
        </div>
      </div>
        <div className='flex justify-center border-gray-400 border-t-2 w-[86%] p-4 text-gray-400 m-auto'>
          <h1 >Copyright © 2023 PahlawanCyber. Hak Cipta Dilindungi Undang-Undang.</h1>
        </div>
    </div>
  );
};

export default Footer;