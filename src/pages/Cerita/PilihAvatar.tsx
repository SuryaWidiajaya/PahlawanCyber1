import React, { useState } from "react";
import Image from "next/image";
import BgStart2 from "../../../public/image/BG-start2.png";
import Link from "next/link";
import ManLofi from '../../../public/image/ManLoFi.png';
import WomanLofi from '../../../public/image/WomanLoFi.png';
import ManHifi from '../../../public/image/ManHiFi.png';
import WomanHifi from '../../../public/image/WomanHiFi.png';

export default function PilihAvatar() {
  const [manHovered, setManHovered] = useState(false);
  const [womanHovered, setWomanHovered] = useState(false);

  return (
    <>
      <div>
        <div className="relative bg-cover h-[1024px]" style={{ backgroundImage: `url(${BgStart2.src})`, position: 'relative' }}>
          <div className="flex justify-center text-[70px] text-white font-bold pt-[80px]">
            <h1>PILIH AVATAR</h1>
          </div>
          <div className="flex justify-center gap-60 mt-[266px]">
            <Link href='/Cerita/LoginSiswaLK'><div
              onMouseEnter={() => setManHovered(true)}
              onMouseLeave={() => setManHovered(false)}
              className={`cursor-pointer transition-transform transform ${manHovered ? 'scale-110' : ''}`}
            >
              <Image src={manHovered ? ManHifi : ManLofi} alt="" />
            </div></Link>
            <Link href='/Cerita/LoginSiswaPR'><div
              onMouseEnter={() => setWomanHovered(true)}
              onMouseLeave={() => setWomanHovered(false)}
              className={`cursor-pointer transition-transform transform ${womanHovered ? 'scale-110' : ''}`}
            >
              <Image src={womanHovered ? WomanHifi : WomanLofi} alt="" />
            </div></Link>
          </div>
        </div>
      </div>
    </>
  );
}

