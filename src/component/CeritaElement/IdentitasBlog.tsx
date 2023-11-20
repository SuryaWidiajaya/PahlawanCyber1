import Image from 'next/image';
import ButtonLogin from './buttonLogin';
import { StaticImageData } from "next/image"; 
import Link from 'next/link';  

type Props = {
    Image: StaticImageData;
  };

export default function IdentitasBlog(props : Props) {
  return (
    <>
      <div className="flex flex-col items-center w-[592px]">

        <div className="flex flex-col items-center bg-black  rounded-2xl bg-opacity-70 p-[36px]">
        <div className="w-[181px] z-10 border-4 border-gray-600 rounded-full">
          <Image src={props.Image} alt=""></Image>
        </div>
          <h1 className="text-[32px] font-bold text-white mt-5">Hallo, Selamat Datang</h1>
          <h1 className="text-[32px] font-bold text-white mb-[34px]"> Iqbal Zuwandi</h1>
          
    
          <div className="mb-[34px]">
            <Link href='/Cerita/Intro1'><ButtonLogin/></Link>
          </div>
        </div>
      </div>
    </>
  );
}