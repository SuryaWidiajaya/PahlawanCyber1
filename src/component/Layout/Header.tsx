import Image from 'next/image';
import Logo from '../../../public/image/Logo.svg';
import LogoLogin from '../../../public/image/LogoLogin.svg';
import Link from 'next/link';

type Props = {
  tipe: string;
};

export default function Header(props: Props) {
  return (
    <>
      <div className={`${props.tipe} z-10 w-full border-b-[4px] border-[#9747FF]`}>
        <div className="flex p-[27px]  bg-[#F4F8F3] pl-[99px] items-center">
          <Image src={Logo} alt="Logo" className="mr-3" />
          <h1 className="font-bold text-[36px] text-gray ">
            <span className=" text-transparent bg-clip-text animate-colorChange">Pahlawan Cyber</span>
          </h1>

          <div className="flex ml-[267px] items-center">
            <Link href="/">
              <h1 className="mr-[99px] text-[20px] font-bold hover:text-[#9747FF] cursor-pointer">Home</h1>
            </Link>
            <Link href="/">
              <h1 className="mr-[99px] text-[20px] font-bold hover:text-[#9747FF] cursor-pointer">About</h1>
            </Link>
            <Link href="/Panduan">
              <h1 className="mr-[99px] text-[20px] font-bold hover:text-[#9747FF] cursor-pointer">Panduan</h1>
            </Link>
            <div className="flex items-center text-[20px] rounded-full bg-[#9747FF] px-[30px] py-[10px] gap-[12px]">
              <h1 className="font-bold text-white">Login</h1>
              <Image src={LogoLogin} alt="LogoLogin" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
