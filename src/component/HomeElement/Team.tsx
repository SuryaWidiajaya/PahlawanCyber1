import Image from 'next/image';
import Arrow from '../../../public/image/ArrowTeam.png';
import CardTeam from './CardHome/CardTeam';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Team() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="flex items-center flex-col mb-[100px]">
        <div className="flex flex-col items-center mb-[58px]" data-aos="fade-down" data-aos-delay="0">
          <h1 className="text-[36px] font-bold " >
            TEAM KAMI
          </h1>
          <Image src={Arrow} alt="" />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className='border-4 rounded-2xl border-[#F77154]' data-aos="fade-up" data-aos-delay='0'>
            <CardTeam name="Muhammad Ari Rifqi" role="Coder" text="Kita adalah orang yang melebihi apa yang kita pikirkan" color="" />
          </div>
          <div className='border-4 rounded-2xl border-[#9747FF]' data-aos="fade-up" data-aos-delay='400'>
            <CardTeam name="I Made Surya Widiajaya Putra" role="Coder" text="Bumi mungkin lebih besar dari manusia, tetapi takdirnya tetap dibawah pijakan kaki manusia" color="" />
          </div>
          <div className='border-4 rounded-2xl border-[#476FFF]' data-aos="fade-up" data-aos-delay='800'>
            <CardTeam name="Muhammad Iqbal Zuwandi" role="Coder" text="Kita adalah orang yang melebihi apa yang kita pikirkan" color="" />
          </div>
          <div className='border-4 rounded-2xl border-[#FFCB47]' data-aos="fade-up" data-aos-delay='0'>
            <CardTeam name="I Wayan Ary Winanda Putra" role="Designer" text="Kita adalah orang yang melebihi apa yang kita pikirkan" color="" />
          </div>
          <div className='border-4 rounded-2xl border-[#2DC9A4]' data-aos="fade-up" data-aos-delay='400'>
            <CardTeam name="Dara Finas Elen" role="Designer" text="Keberanian adalah ketika kamu melanjutkan meskipun kamu merasa takut" color="" />
          </div>
        </div>
      </div>
    </>
  );
}
