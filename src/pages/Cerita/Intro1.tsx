import BgMain from '../../../public/image/BG-MAIN.png';
import Image from 'next/image';
import close from '../../../public/image/IconKeluarCeritaFlow.png';
import kiri from '../../../public/image/iconKiriCeritaFlow.png';
import kanan from '../../../public/image/iconKananCeritaFlow.png';
import image1 from '../../../public/image/image1CeritaFlow.png';
import Link from 'next/link';

export default function Intro1() {
  return (
    <div className="relative bg-cover h-[1024px]" style={{ backgroundImage: `url(${BgMain.src})` }}>
      <div className="flex items-center pl-[30px] pt-[50px]">
        <div className="flex items-center cursor-pointer">
          <div className="bg-white rounded-full w-[63px]">
          <Link href='/ListOfStory'><Image src={close} alt="" /></Link>
          </div>
          <h1 className="text-[32px] ml-4 font-bold text-white">Keluar</h1>
        </div>
        <h1 className="text-[58px] ml-[309px] font-bold text-white">Keamanan cyber</h1>
      </div>

      <div className="flex px-[50px]">
        <div className="pt-[320px] cursor-pointer transform origin-center transition-transform hover:scale-110">
          <Image src={kiri} alt="" />
        </div>
        <div className="w-[1165px] pt-[66px] p-[50px]">
          <div className="flex items-center">
            <Image src={image1} alt=""></Image>
            <p className="text-[24px] font-bold">
              Keamanan siber adalah tindakan yang dilakukan untuk melindungi perangkat seperti handphone maupun komputer dari sebuah serangan atau akses ilegal yang bisa membahayakan data pengguna dan seringkali menyisipkan virus
            </p>
          </div>
          <p className="text-[24px] font-bold "> Tujuan keamanan siber adalah untuk mengurangi kerusakan dari serangan dunia maya dan melindungi handphonemu dari ekploitasi yang tidak sah.</p>
          <br />
          <p className="text-[24px] font-bold "> Konsep keamanan siber mengacu pada 3 poin yang terkenal dengan sebutan CIA TRIAD. Tiga poin tersebut adalah kerahasiaan, integritas, dan ketersediaan informasi.</p>
          <br />
          <ol className="list-decimal ml-[30px] text-[24px] font-bold">
            <li>Kerahasiaan kira-kira setara dengan privasi. Tindakan kerahasiaan dirancang untuk mencegah informasi sensitif dari upaya akses yang tidak sah.</li>

            <li>Integritas melibatkan pemeliharaan konsistensi, keakuratan, dan kepercayaan data di seluruh siklus hidupnya.</li>

            <li>Ketersediaan berarti informasi harus tersedia secara konsisten dan mudah diakses oleh pihak-pihak yang berwenang.</li>
          </ol>
        </div>
        <div className="pt-[310px] cursor-pointer transform origin-center transition-transform hover:scale-110">
          <Link href='/Cerita/Intro2'><Image src={kanan} alt="" /></Link>
        </div>
      </div>
    </div>
  );
}
