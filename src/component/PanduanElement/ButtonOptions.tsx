import Image from "next/image";
import icon from "../../../public/image/IconPanahPanduan.png"

type Props = {
  text: string;
};

export default function ButtonOptions(props: Props) {
    
  return (
      <>
      <div className="w-[1233px] h-[50px] border-gray-200 border-2  rounded-lg flex items-center justify-between">
        <h1 className="text-[#757575] text-[24px] font-bold ml-5">{props.text}</h1>
        <Image src={icon} alt="" className="m-[11px] cursor-pointer"></Image>
      </div>
      </>
    );
  }