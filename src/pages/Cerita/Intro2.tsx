import BgMain from '../../../public/image/BG-MAIN.png';
import Image from 'next/image';
import close from '../../../public/image/IconKeluarCeritaFlow.png';
import kiri from '../../../public/image/iconKiriCeritaFlow.png';
import kanan from '../../../public/image/iconKananCeritaFlow.png';
import image2 from '../../../public/image/image2CeritaFlow.png';
import Link from 'next/link';

export default function Intro2() {
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
        <Link href='/Cerita/Intro1'><Image src={kiri} alt="" /></Link>
        </div>
        <div className="w-[1165px] pt-[66px] p-[50px]">
          <div className="flex items-center">
            <Image src={image2} alt=""></Image>
            <div className='ml-8'>
            <p className="text-[24px] font-bold">
            Adapun manfaat keamanan siber, antara lain:
            </p>
            <ol className="list-decimal ml-[30px] text-[20px] font-bold">
                <li>Melindungi informasi pribadi</li>
                <li>Menjaga produktifitas kerja</li>
                <li>Memastikan sebuah bisnis aman dan terpercaya</li>
                <li>Waktu pemilihan yang lebih singkat dan mencegah kerugian yang berlipat</li>
            </ol>
            </div>
          </div>
          <br />
          <p className="text-[32px] font-bold "> Jenis Ancaman Keamanan Siber</p>
    
         
          <ol className="list-decimal ml-[30px] text-[24px] font-bold">
            <li>Malware : Malware dapat membahayakan komputer serta penggunanya dengan menyebarkan  virus komputer, pyware, hingga worms.</li>

            <li>Penindasan Siber (Cyberbullying) : Ini melibatkan intimidasi atau pelecehan terhadap individu melalui pesan teks, platform media sosial, jaringan game, grup obrolan online, atau saluran komunikasi digital lainnya untuk membuat mereka merasa marah, sedih, malu, atau takut. Penting untuk dipahami bahwa anak-anak, pra-remaja, dan remaja dapat menjadi korban penindasan maya</li>

            <li>Phishing : Phishing biasa terjadi melalui bentuk SMS atau email yang menggunakan alamat yang mirip dengan sumber terpercaya. Phising seringkali terjadi pada kasus penipuan game online yang menyediakan layanan jual beli item didalam game dengan menawarkan harga yang lebih murah dengan harga yang ada pada game, sehingga korbannya kebanyakan anak-anak </li>
          </ol>
        </div>
        <div className="pt-[310px] cursor-pointer transform origin-center transition-transform hover:scale-110">
          <Link href='/Cerita/Intro3'><Image src={kanan} alt="" /></Link>
        </div>
      </div>
    </div>
  );
}