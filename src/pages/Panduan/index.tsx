import Layout from '@/component/Layout/Layout';
import ButtonReturn from '@/component/PanduanElement/ButtonReturn';
import ButtonOptions from '@/component/PanduanElement/ButtonOptions';
import Link from 'next/link';

export default function Panduan() {
  return (
    <>
      <Layout Tipe=''>
        <div className="mx-[120px]">
          <div className="my-[30px]">
            <Link href='/'><ButtonReturn /></Link>
          </div>
          <h1 className="font-bold text-[32px] my-[55px]">PANDUAN TENTANG CYBERSECURITY</h1>
          <div className="mb-[29px]">
            <Link href='/Panduan/Panduan1'><ButtonOptions text="Pengertian privasi dan data diri" /></Link>
          </div>
          <div className="mb-[29px]">
          <Link href='/Panduan/Panduan2'><ButtonOptions text="Bagaimana cara membuat kata sandi yang kuat" /></Link>
          </div>
          <div className="mb-[29px]">
          <Link href='/Panduan/Panduan3'><ButtonOptions text="Bagaimana cara mengamankan akun" /></Link>
          </div>
          <div className="mb-[29px]">
          <Link href='/Panduan/Panduan4'><ButtonOptions text="Apa saja sih ancaman didunia siber" /></Link>
          </div>
          <div className="mb-[29px]">
          <Link href='/Panduan/Panduan5'><ButtonOptions text="Konten Apa saja sih yang boleh dan aman dibuka anak anak" /></Link>
          </div>
          <div className="mb-[80px]">
          <Link href='/Panduan/Panduan6'><ButtonOptions text="Bagaimana berperilaku online yang baik" /></Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
