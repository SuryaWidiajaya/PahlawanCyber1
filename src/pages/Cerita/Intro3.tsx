import BgMain from '../../../public/image/BG-MAIN.png';
import Image from 'next/image';
import close from '../../../public/image/IconKeluarCeritaFlow.png';
import kiri from '../../../public/image/iconKiriCeritaFlow.png';
import kanan from '../../../public/image/iconKananCeritaFlow.png';
import image3 from '../../../public/image/image3CeritaFlow.png';
import Link from 'next/link';

export default function Intro3() {
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
        <div className="pt-[320px] cursor-pointer transform origin-center transition-transform hover:scale-110">
        <Link href='/Cerita/Intro1'><Image src={kiri} alt="" /></Link>
        </div>

        <div className="w-[1165px] pt-[46px] p-[50px]">
          <div className="flex items-center justify-center">
            <Image src={image3} alt=""></Image>
            
          </div>
          <br />
          <br />
          <div className="flex items-center justify-center">
          <p className="text-[32px] font-bold ">Tips Keamanan Siber </p>
          
          </div>
          <br />
          <p className="text-[20px] font-bold "> Mengingat ancaman dunia maya banyak menargetkan anak-anak, pra-remaja, dan remaja, maka sangat penting bagi kamu untuk mengetahui tips agar aman berseluncur di Internet. Berikut tipsnya. </p>
          <ol className="list-decimal ml-[30px] text-[20px] font-bold">
            <li>Mengaktifkan pengaturan keamanan dan privasi untuk membuat akun media sosialmu lebih aman dan mengontrol siapa saja yang dapat melihat postingan dan informasi pribadimu di internet.</li>

            <li>Waspadalah ketika mengakses situs web, aplikasi, game apa yang kamu mainkan dan dengan siapa.</li>

            <li>Jangan mengeklik tautan yang tidak dikenal, mengunduh lampiran tidak dikenal yang kamu temukan di situs Internet, email, grup obrolan, pesan teks, grup permainan online, dll.</li>
            <li>Jangan pernah membagikan informasi pribadi apa pun seperti nama, email, nomor telepon, alamat, foto pribadi, informasi keuangan, tanggal lahir, dll. kepada siapa pun secara online (situs web, aplikasi seluler, media sosial, grup obrolan, platform game , dll.) dan offline (percakapan langsung dengan orang lain, formulir tertulis, survei, kelompok fokus, dll.).</li>
            <li>Tentang pentingnya mengaktifkan kontrol keamanan seperti autentikasi 2 faktor, kata sandi yang kuat dan secara berkala memperbarui perangkat lunak dan aplikasi yangkamu gunakan</li>
          </ol>
        </div>
        <div className="pt-[310px] cursor-pointer transform origin-center transition-transform hover:scale-110">
        <Link href='/Cerita/StartCerita'><Image src={kanan} alt="" /></Link>
        </div>
      </div>

    </div>
  );
}
