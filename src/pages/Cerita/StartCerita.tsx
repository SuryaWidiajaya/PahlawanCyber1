import BgMain from '../../../public/image/BG-MAIN.png';
import Image from 'next/image';
import close from '../../../public/image/IconKeluarCeritaFlow.png';
import kiri from '../../../public/image/iconKiriCeritaFlow.png';
import kanan from '../../../public/image/iconKananCeritaFlow.png';
import Start from '../../../public/image/Start.png';
import Link from 'next/link';

export default function StartCerita() {
  return (
    <div className="relative bg-cover h-[1024px]" style={{ backgroundImage: `url(${BgMain.src})` }}>
      <div className="flex items-center pl-[30px] pt-[50px]">
        <div className="flex items-center cursor-pointer">
          <div className="bg-white rounded-full w-[63px] transform origin-center transition-transform hover:scale-110">
          <Link href='/ListOfStory'><Image src={close} alt="" /></Link>
          </div>
          <h1 className="text-[32px] ml-4 font-bold text-white">Keluar</h1>
        </div>
        <h1 className="text-[58px] ml-[309px] font-bold text-white">Keamanan cyber</h1>
      </div>

      <div className="flex px-[50px]">
        <div className="mt-[320px] cursor-pointer transform origin-center transition-transform hover:scale-110">
        <Link href='/Cerita/Intro3'><Image src={kiri} alt="" /></Link>
        </div>

        <div className="w-[1165px] pt-[46px] p-[50px]">
          <div className='flex flex-col justify-center items-center font-bold text-[40px] mt-[100px] '>
                <h1>Mari Mengenal Lebih Dekat</h1> 
                <h1 className='mb-[32px]'>Contoh Kejahatan Siber</h1>
                <div className='cursor-pointer transform origin-center transition-transform hover:scale-110'>
                    <Image src={Start} alt=''></Image>
                </div>
          </div>
        </div>
        <div className="mt-[310px] cursor-pointer transform origin-center transition-transform hover:scale-110">
          <Image src={kanan} alt="" />
        </div>
      </div>

    </div>
  );
}