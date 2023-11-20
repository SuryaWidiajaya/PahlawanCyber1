import Layout from '@/component/Layout/Layout';
import ButtonReturn from '@/component/PanduanElement/ButtonReturn';
import Link from 'next/link';
export default function Panduan4() {
  return (
    <>
      <Layout Tipe=''>
        <div className="mx-[120px]">
          <div className="my-[30px]">
          <Link href='/Panduan'><ButtonReturn /></Link>
          </div>

          <h1 className="font-bold text-[32px] my-[55px]">Apa saja ancaman di dunia siber</h1>
          <h2 className="font-bold text-[24px] mb-[18px]">Ancaman di dunia siber</h2>
          <p className="text-[18px]">Berikut adalah beberapa ancaman umum di dunia siber yang sebaiknya dipahami:</p>
          <br />

          <ol className="list-decimal ml-[20px] text-[18px]">
            <li>
              <span className="font-bold">Konten Tidak Sesuai Usia</span> <br />
              Ancaman pertama adalah konten yang mungkin tidak cocok untuk usia mereka. Ini bisa berupa gambar, video, atau informasi yang mungkin membuat mereka tidak nyaman atau terluka.
            </li>

            <li>
              <span className="font-bold">Orang Asing Online</span> <br />
              Anak-anak harus tahu bahwa tidak semua orang yang mereka temui online adalah baik. Beberapa orang mungkin mencoba mengambil informasi pribadi atau melakukan hal-hal yang tidak baik.
            </li>

            <li>
              <span className="font-bold">Bullying Online (Cyberbullying)</span> <br />
              Ini adalah ketika seseorang mengganggu atau menghina orang lain secara online. Ini bisa terjadi di platform media sosial, pesan teks, atau email.
            </li>

            <li>
              <span className="font-bold">Berbagi Informasi Pribadi</span> <br />
              Anak-anak harus menjaga rahasia informasi pribadi seperti nama lengkap, alamat, nomor telepon, dan informasi sekolah. Mereka tidak boleh memberikannya kepada orang asing online.
            </li>

            <li>
              <span className="font-bold">Kata Sandi yang Lemah</span> <br />
              Menggunakan kata sandi yang mudah ditebak adalah masalah besar. Kata sandi harus kuat dan rahasia agar akun mereka tetap aman.
            </li>

            <li>
              <span className="font-bold">Penipuan dan Phishing</span> <br />
              Beberapa orang mungkin mencoba meminta uang atau informasi pribadi dengan cara berbohong atau menipu. Anak-anak harus waspada dan tidak memberikan informasi kepada orang asing online.
            </li>

            <li>
              <span className="font-bold">Virus dan Malware</span> <br />
              Virus adalah program komputer yang bisa merusak perangkat. Anak-anak harus berhati-hati saat mengklik tautan atau mengunduh sesuatu dari internet.
            </li>

            <li>
              <span className="font-bold">Bermain Game Online dengan Orang Asing</span> <br />
              Bermain game online bisa menyenangkan, tetapi anak-anak harus berhati-hati saat bermain dengan orang yang tidak mereka kenal dalam kehidupan nyata. Mereka tidak boleh memberikan informasi pribadi kepada sesama pemain.
            </li>

            <li>
              <span className="font-bold">Pencurian Identitas</span> <br />
              Ini adalah ketika seseorang mencuri informasi pribadi anak-anak untuk melakukan tindakan ilegal atas nama mereka. Mereka harus menjaga informasi seperti nomor KTP dengan baik.
            </li>

            <li>
              <span className="font-bold">Berbagi Foto</span> <br />
              Anak-anak harus berhati-hati dengan berbagi foto mereka online. Mereka tidak boleh berbagi foto yang mungkin dapat disalahgunakan oleh orang lain.
            </li>
          </ol>

          <br />
          <p className="text-[18px]">
            Penting untuk mendidik anak-anak tentang ancaman ini dan bagaimana mereka dapat melindungi diri mereka sendiri. Ajarkan mereka untuk selalu berbicara dengan Anda jika mereka merasa tidak nyaman atau mengalami sesuatu yang
            mencurigakan saat online. Selain itu, peran pengawasan orang tua atau wali sangat penting dalam menjaga keamanan anak-anak di dunia siber.
          </p>

          <div className="flex justify-center">
            <h3 className="my-[61px] font-bold text-[24px]">*Semoga membantu*</h3>
          </div>
        </div>
      </Layout>
    </>
  );
}
