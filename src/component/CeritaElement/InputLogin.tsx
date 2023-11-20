import React from 'react';
import { IoTime, IoPerson } from 'react-icons/io5';

type Props = {
  text: string;
  usePersonIcon?: boolean;
};

export default function InputLogin(props: Props) {
  const IconComponent = props.usePersonIcon ? IoPerson : IoTime;

  return (
    <>
      <div>
        <div className="relative">
          <IconComponent className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder={props.text}
            className="px-8 py-3 w-[500px] outline-none bg-black bg-opacity-0 rounded-xl font-bold text-[24px] text-white pl-12 border-2 border-white"
          />
        </div>
      </div>
    </>
  );
}

