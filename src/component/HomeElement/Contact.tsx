import Image from 'next/image';
import Title1 from '../../../public/image/TitleContactImage1.png';
import Title2 from '../../../public/image/TitleContactImage2.png';
import Icon1 from '../../../public/image/IconContact1.png';
import Icon2 from '../../../public/image/IconContact2.png';
import Icon3 from '../../../public/image/IconContact3.png';
import ImageContact from '../../../public/image/ContactImage.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <>

      <div className="flex justify-center items-center gap-8">
        <div data-aos="fade-up" data-aos-delay='400'>
          <Image src={Title1} alt=""></Image>
        </div>
        <div className="font-bold flex flex-col items-center" data-aos="fade-up" data-aos-delay='0'>
          <h1 className="text-[24px] p-2 bg-gray-100 rounded-xl px-6" data-aos="fade-down" data-aos-delay='1000'>Kontak kami</h1>
          <h2 className="text-[36px] mt-2">Terhubung dengan kami</h2>
          <h2 className="text-[36px]">Kami menantikan pesan dari kamu</h2>
        </div>
        <div data-aos="fade-up" data-aos-delay='400'>
          <Image src={Title2} alt=""></Image>
        </div>
      </div>

      <div className="flex font-bold gap-20 justify-center mt-[100px] ">
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay='0'>
          <Image src={Icon1} alt=""></Image>
          <h1 className="text-[36px] text-[#9D0E1F] mt-[10px] mb-[20px]">Alamat</h1>
          <h1 className="text-[20px] text-gray-600">Taman Karang Baru, Udayana,</h1>
          <h1 className="text-[20px] text-gray-600">Kota Mataram-Nusa tenggara barat</h1>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay='400'>
          <Image src={Icon2} alt=""></Image>
          <h1 className="text-[36px] text-[#314994] mt-[10px] mb-[20px]">Telpon</h1>
          <h1 className="text-[20px] text-gray-600">Manajer proyek +62 87864836478</h1>
          <h1 className="text-[20px] text-gray-600">Tim proyek +62 87864836478</h1>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay='800'>
          <Image src={Icon3} alt=""></Image>
          <h1 className="text-[36px] text-[#E29C13] mt-[10px] mb-[20px]">Alamat</h1>
          <h1 className="text-[20px] text-gray-600">PahlawanCyber@gmail.com</h1>
          <h1 className="text-[20px] text-gray-600">Pahlawanku@gmail.com</h1>
        </div>
      </div>

      <div className='flex justify-center mt-[120px] mb-[100px]' data-aos="fade-up" data-aos-delay='0'>
        <div className="rounded-2xl bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400 p-[50px] w-[1234px] border-2 border-[#5518A5] flex">
          <div className='w-[593px]'>
            <Image src={ImageContact} alt=""></Image>
          </div>
          <div className='w-[480px] ml-[50px] text-white'>
            <h1 className='font-bold text-[40px]'>Beri Masukan untuk Kami!</h1>
            <h2 className='font-bold text-[20px]'>Masukan yang kamu berikan sangat berarti bagi pengembangan dan perbaikan website ini, jadi jangan segan untuk memberikan pendapat terbaikmu</h2>
            <input type="text" placeholder='Masukkan nama disini !' className='bg-gradient-to-r via-blue-300 to-blue-400 border-2 border-[#5518A5] rounded-xl px-4 w-full py-2 mt-4 text-black font-bold'/>
            <textarea placeholder='Tulis pesanmu disini !' className='bg-gradient-to-r via-blue-300 to-blue-400 border-2 border-[#5518A5] rounded-xl px-4 w-full py-2 mt-4 text-black font-bold'></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
