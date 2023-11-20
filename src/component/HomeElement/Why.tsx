import Image from 'next/image';
import BgWhy from '../../../public/image/bg-Why.png';
import Image1 from '../../../public/image/WhyImage1.png';
import Image2 from '../../../public/image/WhyImage2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Why() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="relative bg-cover h-[958px]" style={{ backgroundImage: `url(${BgWhy.src})` }}>
        <div className=" flex mt-[] text-white font-bold">
          <div className='mt-[215px] ml-[148px]' data-aos="fade-up" data-aos-delay='0'>
          <h1 className='text-[32px] '>Mengapa perlu belajar dengan PahlawanCyber?</h1>
          <br />
          <p className='text-[18px]'>Pahlawan Cyber menyediakan pendekatan belajar yang menarik dan menyenangkan dengan menyajikan materi disertai quiz sehingga memungkinkan kamu dapat memahami materi dengan mudah</p>
          </div>
          <div className='mt-[180px] mr-[148px] ml-[80px]' data-aos="fade-up" data-aos-delay='400'>
          <Image src={Image1} alt=''></Image>
          </div>
        </div>
        <div className=" flex text-white font-bold">
          <div className='mt-[30px] ml-[148px] mr-[100px]' data-aos="fade-up" data-aos-delay='800'>
          <Image src={Image2} alt=''></Image>
          </div>
          <div className='mt-[70px] mr-[148px]' data-aos="fade-up" data-aos-delay='1200'>
          <h1 className='text-[32px] '>Keunggulan PahlawanCyber dibandingkan website lain?</h1>
          <br />
          <ol className='text-[18px] list-decimal ml-[20px]'>
            <li>Kamu dapat belajar tentang keamanan cyber secara gratis</li>
            <li>Materi disajikan dengan menarik</li>
            <li>Terdapat sertifikat yang dapat anda peroleh setalah belajar pada website ini</li>
            <li>Ilmu bermanfaat</li>
          </ol>
          </div>
        </div>
      </div>
    </>
  );
}
