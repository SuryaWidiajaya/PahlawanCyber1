import { useState, useEffect } from 'react';
import BlogList from '@/component/UnlockElement/BlogList';
import ButtonReturn from '@/component/UnlockElement/ButtonReturn';
import IconIntro from '../../../public/image/introImage.png';
import IconCerita from '../../../public/image/CeritaImage.png';
import IconVideo from '../../../public/image/VideoImage.png';
import IconQuiz from '../../../public/image/QuizImage.png';
import IconNext from '../../../public/image/iconNextUnlock.svg';
import IconLock from '../../../public/image/IconLockUnlock.png';
import BgUnlock from '../../../public/image/BG-UNLOCK.png';
import Link from 'next/link';

export default function ListOfStory() {
  const [introUnlocked, setIntroUnlocked] = useState(false);
  const [ceritaUnlocked, setCeritaUnlocked] = useState(false);
  const [videoUnlocked, setVideoUnlocked] = useState(false);
  const [quizUnlocked, setQuizUnlocked] = useState(false);

  useEffect(() => {

    if (typeof window !== 'undefined') {
 
      const introUnlockedStored = localStorage.getItem('introUnlocked');
      const ceritaUnlockedStored = localStorage.getItem('ceritaUnlocked');
      const videoUnlockedStored = localStorage.getItem('videoUnlocked');
      const quizUnlockedStored = localStorage.getItem('quizUnlocked');

      setIntroUnlocked(introUnlockedStored === 'true');
      setCeritaUnlocked(ceritaUnlockedStored === 'true');
      setVideoUnlocked(videoUnlockedStored === 'true');
      setQuizUnlocked(quizUnlockedStored === 'true');
    }
  }, []);

  const handleIntroClick = () => {
    localStorage.setItem('introUnlocked', 'true');
    setIntroUnlocked(true);
    if (!ceritaUnlocked) {
      localStorage.setItem('ceritaUnlocked', 'true');
      setCeritaUnlocked(true);

    }
  };

  const handleCeritaClick = () => {
    if (ceritaUnlocked == true ){
      localStorage.setItem('ceritaUnlocked', 'true');
      setCeritaUnlocked(true);
      if (!videoUnlocked) {
        localStorage.setItem('videoUnlocked', 'true');
        setVideoUnlocked(true);
      }
    }

    
  };

  const handleVideoClick = () => {
    if (videoUnlocked == true ){
    localStorage.setItem('ceritaUnlocked', 'true');
    setCeritaUnlocked(true);
    if (!quizUnlocked) {
      localStorage.setItem('quizUnlocked', 'true');
      setQuizUnlocked(true);
    }
  }
  };

  return (
    <>
      <div className='bg-cover' style={{ backgroundImage: `url(${BgUnlock.src})` }}>
        <div className="bg-cover flex flex-col items-center" >
          <div className="flex flex-col items-center p-[23px] mt-[46px] w-[1233px] border-black border-b-4 mb-[44px]">
            <h1 className="text-[40px] font-bold ">PahlawanCyber</h1>
            <h2>Be a Cyber Protector</h2>
          </div>

          <div className="mb-[30px]">
            <BlogList text="Intro" iconImage={IconIntro} iconNextOrLock={IconNext} onIconClick={handleIntroClick} isUnlocked = {true} link='/Intro'/>
          </div>
          <div className="mb-[30px]">
            <BlogList text="Cerita" iconImage={IconCerita} iconNextOrLock={ceritaUnlocked ? IconNext : IconLock} onIconClick={handleCeritaClick} isUnlocked = {ceritaUnlocked ? true : false} link='/Cerita/Welcome'/>
          </div>
          <div className="mb-[30px]">
            <BlogList text="Video" iconImage={IconVideo} iconNextOrLock={videoUnlocked ? IconNext : IconLock} onIconClick={handleVideoClick} isUnlocked = {videoUnlocked ? true : false} link='/Video'/>
          </div>
          <div className="">
            <BlogList text="Quiz" iconImage={IconQuiz} iconNextOrLock={quizUnlocked ? IconNext : IconLock} isUnlocked = {quizUnlocked ? true : false} link=''/>
          </div>
        </div>
        <div className="ml-[150px] mt-2 pb-[119px]">
          <h1 className="text-red-500 mb-[152px]">*Putar video intro terlebih dahulu agar bisa melanjutkan ke materi lainnya</h1>
          <Link href='/'><ButtonReturn /></Link>
        </div>
      </div>
    </>
  );
}
