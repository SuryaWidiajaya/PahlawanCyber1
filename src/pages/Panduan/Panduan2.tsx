import Layout from '@/component/Layout/Layout';
import ButtonReturn from '@/component/PanduanElement/ButtonReturn';
import Link from 'next/link';
export default function Panduan2() {
  return (
    <>
      <Layout Tipe=''>
        <div className="mx-[120px]">
          <div className="my-[30px]">
          <Link href='/Panduan'><ButtonReturn /></Link>
          </div>

          <h1 className="font-bold text-[32px] my-[55px]">Apa itu kata sandi dan bagaimana cara membuat kata sandi yang kuat</h1>
          <h2 className="font-bold text-[24px] mb-[18px]">Pengertian kata sandi</h2>
          <p className="text-[18px]">
            Kata sandi (password) adalah sebuah kombinasi karakter, termasuk huruf, angka, simbol, atau karakter khusus lainnya, yang digunakan sebagai metode autentikasi atau verifikasi identitas seseorang untuk mengakses suatu sistem,
            layanan, atau akun tertentu. Kata sandi digunakan untuk melindungi informasi pribadi atau mengamankan akses ke berbagai jenis sumber daya digital, seperti akun email, media sosial, perbankan online, komputer, atau jaringan.{' '}
            <br />
            <br />
            Tujuan dari penggunaan kata sandi adalah untuk memastikan bahwa hanya pemilik yang sah dari akun atau data yang dapat mengaksesnya. Kata sandi yang kuat dan rahasia sangat penting untuk melindungi informasi pribadi dan mencegah
            akses yang tidak sah atau penyalahgunaan akun atau sistem. Oleh karena itu, penting untuk memilih kata sandi yang kuat dan tidak mudah ditebak serta mengubahnya secara berkala untuk menjaga keamanan online.
          </p>

          <h2 className="font-bold text-[24px] my-[18px]">Bagaimana cara membuat kata sandi yang kuat</h2>
          <h3 className="text-[18px]">Berikut adalah beberapa langkah sederhana untuk membuat kata sandi yang kuat untuk kalian agar tidak mudah dijebol atau di hack:</h3>
          <br />
          <ol className="list-decimal  ml-[20px] text-[18px]">
            <li>
              <span className="font-bold">Gunakan Kombinasi Huruf, Angka, dan Simbol</span> <br />
              Pastikan kata sandi menggabungkan huruf (baik huruf besar dan kecil), angka, dan simbol (seperti !, @, #, atau *) untuk meningkatkan kompleksitasnya. Misalnya, "D0g$L0v3r!" adalah kata sandi yang kuat.
            </li>

            <li>
              <span className="font-bold">Hindari Informasi Pribadi</span> <br />
              Pastikan tidak menggunakan informasi pribadi seperti nama lengkap, tanggal lahir, atau nama hewan peliharaan dalam kata sandi kamu. Hal ini membuat kata sandi lebih mudah ditebak.
            </li>

            <li>
              <span className="font-bold">Buat Kata Sandi yang Panjang</span> <br />
              Kata sandi yang lebih panjang cenderung lebih kuat. Buatlah kata sandi yang terdiri dari setidaknya 12 karakter.
            </li>

            <li>
              <span className="font-bold">Gunakan Kata-kata Acak</span> <br />
              Gunakanlah kata-kata acak yang tidak mudah ditebak. Kata-kata semacam itu tidak boleh terkait dengan hobi, teman-teman, atau kegiatan sehari-hari kamu.
            </li>

            <li>
              <span className="font-bold">Gunakan Frasa atau Penggalan Kalimat</span> <br />
              Untuk membuat kata sandi yang mudah diingat, kamu dapat menggunakan frasa atau penggalan kalimat yang hanya kamu yang tahu. Misalnya, "B0laKuningSayaLihatHariIni!" adalah kata sandi yang kuat dan mudah diingat.
            </li>

            <li>
              <span className="font-bold">Gunakan Penyusunan Unik</span> <br />
              Buatlah susunan unik dari huruf, angka, dan simbol. Hindari pola yang mudah ditebak, seperti "123456" atau "abc123."
            </li>

            <li>
              <span className="font-bold">Ubah Kata Sandi Secara Teratur</span> <br />
              Gantilah kata sandi kamu secara teratur, misalnya setiap beberapa bulan sekali. Ini membantu menjaga keamanan akun kamu.
            </li>

            <li>
              <span className="font-bold">Jangan Gunakan Kata Sandi yang Sama</span> <br />
              Kamu harus memahami pentingnya tidak menggunakan kata sandi yang sama untuk semua akun kamu. Setiap akun harus memiliki kata sandi yang berbeda.
            </li>

            <li>
              <span className="font-bold">Gunakan Manajer Kata Sandi </span> <br />
              Gunakanlah manajer kata sandi yang aman, seperti LastPass atau 1Password, untuk menyimpan dan mengelola kata sandi kamu.
            </li>

            <li>
              <span className="font-bold">Ajarkan Tentang Keamanan </span> <br />
              Selain membuat kata sandi yang kuat, ajarkan anak-anak untuk selalu waspada terhadap upaya phishing dan menjaga informasi login mereka dengan baik.
            </li>
          </ol>
          <div className="flex justify-center">
            <h3 className="my-[61px] font-bold text-[24px]">*Semoga membantu*</h3>
          </div>
        </div>
      </Layout>
    </>
  );
}
