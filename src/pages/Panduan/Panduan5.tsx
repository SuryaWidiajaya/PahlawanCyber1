import Layout from '@/component/Layout/Layout';
import ButtonReturn from '@/component/PanduanElement/ButtonReturn';
import Link from 'next/link';
export default function Panduan5() {
  return (
    <>
      <Layout Tipe=''>
        <div className="mx-[120px]">
          <div className="my-[30px]">
          <Link href='/Panduan'><ButtonReturn /></Link>
          </div>

          <h1 className="font-bold text-[32px] my-[55px]">Konten apa saja yang boleh dan aman di buka anak-anak</h1>
          <p className="text-[18px]">Berikut adalah beberapa jenis konten yang biasanya dianggap aman untuk anak-anak:</p>
          <br />

          <ol className="list-decimal ml-[20px] text-[18px]">
            <li>
              <span className="font-bold">Konten Pendidikan</span> <br />
              Konten yang dirancang khusus untuk pendidikan anak-anak, seperti aplikasi pembelajaran, video pelajaran, dan situs web edukasi.
            </li>

            <li>
              <span className="font-bold">Animasi dan Kartun</span> <br />
              Kartun anak-anak yang sesuai dengan usia, yang menyajikan pesan positif dan hiburan yang aman.
            </li>

            <li>
              <span className="font-bold">Buku Digital dan Cerita Interaktif</span> <br />
              Buku anak-anak yang diadaptasi dalam bentuk digital, dengan narasi cerita dan gambar yang menarik.
            </li>

            <li>
              <span className="font-bold">Permainan Edukatif</span> <br />
              Permainan komputer atau aplikasi yang mendidik dan mengembangkan keterampilan seperti matematika, bahasa, dan pemecahan masalah.
            </li>

            <li>
              <span className="font-bold">Konten Musik dan Lagu Anak-anak</span> <br />
              Lagu anak-anak yang cocok untuk usia mereka dan memiliki lirik yang bersifat pendidikan dan hiburan.
            </li>

            <li>
              <span className="font-bold">Situs Web Keamanan Anak</span> <br />
              Situs web yang dirancang khusus untuk anak-anak, yang memiliki filter keamanan untuk mencegah akses ke konten yang tidak sesuai.
            </li>

            <li>
              <span className="font-bold">Kartun dan Film Animasi</span> <br />
              Film animasi yang sesuai untuk usia anak-anak dengan nilai-nilai positif dan tanpa konten yang tidak pantas.
            </li>

            <li>
              <span className="font-bold">Platform Video Anak-anak</span> <br />
              Platform seperti YouTube Kids yang menawarkan konten video yang aman untuk anak-anak dan memiliki filter keamanan.
            </li>

            <li>
              <span className="font-bold">Pilihan Game untuk Anak-anak</span> <br />
              Permainan yang dirancang khusus untuk anak-anak dengan pengawasan orang tua atau wali.
            </li>

            <li>
              <span className="font-bold">Media Sosial yang Dikendalikan Orang Tua</span> <br />
              Jika anak-anak sudah mencapai usia yang sesuai untuk menggunakan media sosial, pastikan mereka menggunakan platform yang memiliki pengaturan privasi yang baik dan diawasi oleh orang tua atau wali.
            </li>
          </ol>

          <br />
          <p className="text-[18px]">
            Namun, selalu ingat untuk memverifikasi konten sebelumnya dan berkomunikasi secara terbuka dengan anak-anak tentang penggunaan teknologi dan internet. Selalu perhatikan apa yang mereka tonton dan mainkan, serta buat batasan
            waktu untuk penggunaan perangkat digital. Pastikan juga bahwa anak-anak tahu cara melaporkan konten yang tidak pantas atau mengganggu jika mereka menemukannya. Keamanan anak selalu menjadi prioritas, dan pengawasan serta edukasi
            adalah kunci untuk menciptakan lingkungan yang aman di dunia digital.
          </p>

          <div className="flex justify-center">
            <h3 className="my-[61px] font-bold text-[24px]">*Semoga membantu*</h3>
          </div>
        </div>
      </Layout>
    </>
  );
}
