import Image from 'next/image';
import Title1 from '../../../public/image/TitleCategoryImage.png';
import Title2 from '../../../public/image/TitleCategory1Image.svg';
import Title3 from '../../../public/image/TitleCategory2Image.svg'
import CardCategory from './CardHome/CardCategory';
import Image1 from '../../../public/image/CardCategoryImage1.png'
import Image2 from '../../../public/image/CardCategoryImage2.png'
import Image3 from '../../../public/image/CardCategoryImage3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Category() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className=" flex items-center text-center justify-center mb-[30px]">
        <span className="inline-block mr-4" data-aos="fade-up" data-aos-delay='500'>
          <Image src={Title2} alt='' />
        </span>
        <span className="inline-block mr-4" data-aos="fade-up" data-aos-delay='0'>
          <Image src={Title1} alt='' />
        </span>
        <span className="inline-block" data-aos="fade-up" data-aos-delay='700'>
          <Image src={Title3} alt='' />
        </span>
        </div>
        <div className='flex gap-[41px] justify-center mb-[97px]'>
          <div data-aos="fade-up" data-aos-delay='0' className='border-4 rounded-2xl border-[#0D6AF6]'>
            <CardCategory title='Cerita' color='' text='Pada menu ini berisikan materi pokok cyber security dan tips-tips yang harus kamu lakukan agar kamu aman dari kejahatan cyber' Image={Image1}/>
          </div>
          <div data-aos="fade-up" data-aos-delay='400' className='border-4 rounded-2xl border-[#5D23A8]'>
            <CardCategory title='Cerita' color='' text='Pada menu ini berisikan kuis untuk mengetes pemahaman kamu terkait materi cybersecurity, setelah akhir kuis kamu mendapatkan sertifikat' Image={Image2}/>
          </div>
          <div data-aos="fade-up" data-aos-delay='800' className='border-4 rounded-2xl border-[#ED9124]'>
            <CardCategory title='Cerita' color='' text='Pada menu ini berisikan video animasi menyenangkan untuk membantu kamu lebih memahami tentang cybersecurity sehingga memudahkan kamu' Image={Image3}/>
          </div>
        </div>
    </>
  );
}
