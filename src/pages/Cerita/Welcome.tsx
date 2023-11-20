import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import startClose from '../../../public/image/start-close.png';
import startOpen from '../../../public/image/start-open.png';
import BGStart from '../../../public/image/BG-start.png';

export default function Welcome() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative bg-cover h-[1024px]"
      style={{
        backgroundImage: `url(${BGStart.src})`,
        position: 'relative',
      }}
    >
     <Link href="/Cerita/PilihAvatar"> 
     <div
      className='mt-[200px]'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={isHovered ? startOpen : startClose} alt="" />
      </div> </Link>
    </div>
  );
}
