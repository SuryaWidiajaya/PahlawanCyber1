import ButtonReturn from '@/component/UnlockElement/ButtonReturn';
import BgUnlock from '../../../public/image/BG-UNLOCK.png';
import Link from 'next/link';

export default function Video() {
  return (
    <>
      <div className="bg-cover" style={{ backgroundImage: `url(${BgUnlock.src})` }}>
        <div className="bg-cover flex flex-col items-center">
          <div className="flex flex-col items-center p-[23px] mt-[46px] w-[1233px] border-black border-b-4 mb-[44px]">
            <h1 className="text-[40px] font-bold ">PahlawanCyber</h1>
            <h2>Be a Cyber Protector</h2>
          </div>

          <div className="mb-[93px]">
            <iframe
              width="1066"
              height="600"
              src={`https://www.youtube.com/embed/${new URLSearchParams(new URL('https://www.youtube.com/watch?v=eTfL-7cNnfs').search).get('v')}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className=" mt-10 pb-[119px]">
              <Link href='/ListOfStory'><ButtonReturn /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
