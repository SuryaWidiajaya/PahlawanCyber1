import Image, {StaticImageData} from 'next/image';
import InputLogin from './InputLogin';
import ButtonLogin from './buttonLogin';
import Link from 'next/link';

type Props = {
  image: StaticImageData;
  link: string;
};

export default function LoginBlog(props : Props) {
  return (
    <>
      <div className="flex flex-col items-center w-[592px]">
        <div className="w-[181px] mb-[-90px] z-10 border-4 border-gray-800 rounded-full">
          <Image src={props.image} alt=""></Image>
        </div>

        <div className="flex flex-col items-center bg-black  rounded-2xl bg-opacity-70 p-[36px] pt-[116px]">
          <h1 className="text-[40px] font-bold text-white mb-[34px]">SELAMAT DATANG</h1>
          <h2 className="text-[24px] font-bold text-white mb-[34px]">Masukkan data kamu dengan benar !</h2>

          <div className="mb-[34px]">
            <InputLogin text="Nama Lengkap" usePersonIcon />
          </div>
          <div className="mb-[34px]">
            <InputLogin text="Umur" />
          </div>

          <div className="mb-[34px]">
            <Link href={`${props.link}`}><ButtonLogin/></Link>
          </div>
        </div>
      </div>
    </>
  );
}
