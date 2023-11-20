import Layout from '@/component/Layout/Layout';
import ButtonReturn from '@/component/PanduanElement/ButtonReturn';
import Link from 'next/link';
export default function Panduan1() {
  return (
    <>
      <Layout Tipe=''>
        <div className="mx-[120px]">
          <div className="my-[30px]">
            <Link href='/Panduan'><ButtonReturn /></Link>
          </div>

          <h1 className="font-bold text-[32px] my-[55px]">Pengertian Privasi dan Data Diri</h1>
          <h2 className="font-bold text-[24px] mb-[18px]">Privasi</h2>
          <p className=" text-[18px]">
            Privasi adalah hak untuk menjaga informasi pribadi dan rahasia tentang diri sendiri. Ini berarti bahwa setiap orang memiliki hak untuk tidak membagikan informasi pribadi mereka kepada orang lain jika mereka tidak ingin
            melakukannya. Ini juga berarti bahwa orang lain tidak boleh mencuri atau mencoba mengakses informasi pribadi seseorang tanpa izin. <br />
            <br /> Untuk anak-anak : Privasi untuk anak-anak adalah tentang menjaga rahasia dan informasi tentang diri mereka sendiri, seperti nama, alamat, nomor telepon, dan detail pribadi lainnya. Mereka harus belajar bahwa tidak semua
            informasi harus dibagikan kepada setiap orang, dan mereka memiliki hak untuk merasa aman dan nyaman dengan informasi pribadi mereka.
          </p>

          <h2 className="font-bold text-[24px] my-[18px]">Data Diri</h2>
          <p className=" text-[18px] ">
            Data diri adalah informasi yang dapat digunakan untuk mengidentifikasi seseorang, seperti nama, tanggal lahir, alamat, nomor telepon, dan foto. Data diri juga mencakup informasi kesehatan, pendidikan, atau apa pun yang dapat
            digunakan untuk mengidentifikasi seseorang.
            <br />
            <br />
            Untuk anak-anak : Data diri untuk anak-anak adalah informasi pribadi yang mereka miliki, seperti nama lengkap, umur, alamat rumah, nama sekolah, dan lain-lain. Mereka harus memahami bahwa menjaga data diri mereka adalah penting
            karena ini membantu melindungi mereka dari orang yang mungkin ingin menggunakan informasi tersebut dengan cara yang tidak baik.
            <br />
            <br />
            Penting bagi anak-anak untuk belajar tentang privasi dan data diri sendiri agar kita dapat memahami hak-hak kita dan bagaimana melindungi diri kita sendiri di dunia yang semakin terhubung secara digital. Kita juga perlu diberi
            tahu bahwa Kita itu harus meminta izin orang tua atau wali Kita seperti ibu dan bapak sebelum membagikan informasi pribadi kita secara online atau kepada orang yang tidak kita kenal.
          </p>
          <div className="flex justify-center">
            <h3 className="my-[61px] font-bold text-[24px]">*Semoga membantu*</h3>
          </div>
        </div>
      </Layout>
    </>
  );
}
