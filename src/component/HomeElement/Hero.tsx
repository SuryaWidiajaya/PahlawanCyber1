import Image from 'next/image';
import HeroImage from '../../../public/image/HeroImage.png';
import ButtonHero from './ButtonHome/ButtonHero';
import AnimatedCounter from './CounterHome/ConterHome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="flex">
        <div className="flex ml-[148px] mt-[197px] flex-col ">
          <div data-aos="fade-up">
            <div className="flex">
              <h1 className="text-[48px] font-bold mr-2">Jadilah</h1>
              <h1 className="font-bold text-[48px] text-gray ">
                <span className=" text-transparent bg-clip-text animate-colorChange">Pahlawan Cyber,</span>
              </h1>
            </div>
            <h1 className="text-[40px] font-bold mt-[-12px]">Lindungi Dunia Digitalmu</h1>
            <h2 className="text-[18px] font-bold text-gray-600">
              Tempat di mana anak-anak bisa belajar secara mudah dan menyenangkan <br />
              tentang keamanan siber sehingga dapat menjadi pahlawan Cyber <br />
              yang sesungguhnya dalam dunia digital.
            </h2>
          </div>
          <div className="mt-[49px] mb-[90px]" data-aos="fade-up" data-aos-delay="400">
            <Link href='/ListOfStory'><ButtonHero /></Link>
          </div>

          <div className="flex gap-[105px] mb-[77px] ">
            <div data-aos="fade-up" data-aos-delay="0">
              <AnimatedCounter counter={1055} />
              <h1 className="text-[18px] font-bold text-gray-600">Jumlah anak yang tersadar</h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <AnimatedCounter counter={1022} />
              <h1 className="text-[18px] font-bold text-gray-600">Jumlah quiz yang telah dimainkan</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="800" className='mt-[100px]'>
          <Image src={HeroImage} alt=""></Image>
        </div>
      </div>
    </>
  );
}
