import Image from 'next/image';
import AboutImage from '../../../public/image/AboutImage.png';
import CardAbout from './CardHome/CardAbout';
import IconAbout1 from '../../../public/image/Icon1About.png'
import IconAbout2 from '../../../public/image/Icon2About.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="flex ml-[148px] mt-[123px] About">
        <div className='w-[525px] mb-[100px]'>
            
            <h1 className='text-[16px] p-2 bg-gray-100 rounded-lg font-bold px-3 w-[130px]' data-aos="fade-down" data-aos-delay='1000' >Tentang Kami</h1>
            <div data-aos="fade-up" data-aos-delay='0'>
            <h1 className='text-[36px] font-bold'>Tingkat Selanjutnya Tentang <br />PahlawanCyber</h1>
            <p className='text-[18px] font-bold text-gray-600 mb-[30px]'>Kami adalah tim PahlawanCyber yang siap melindungi dunia maya. Temui kami dan pelajari lebih banyak tentang apa yang kami lakukan.</p>
            </div>
            <div className='mb-[30px] border-4 rounded-2xl border-[#1C42B8]' data-aos="fade-up" data-aos-delay='0'>
            <CardAbout iconImage={IconAbout1} text="PahlawanCyber menyediakan berbagai pembelajaran menarik untuk kamu jelajahi" title="Temukan kesukaanmu" color=''/>
            </div>

            <div className='mb-[30px] border-4 rounded-2xl border-[#CE0C1E]' data-aos="fade-up" data-aos-delay='0'>
            <CardAbout iconImage={IconAbout2} text="PahlawanCyber menyediakan berbagai pembelajaran menarik untuk kamu jelajahi" title="Dapatkan setifikat" color=''/>
            </div>
        </div>
        <div className='ml-[120px]' data-aos="fade-up" data-aos-delay='1000'>
          <Image src={AboutImage} alt=""></Image>
        </div>
      </div>
    </>
  );
}
