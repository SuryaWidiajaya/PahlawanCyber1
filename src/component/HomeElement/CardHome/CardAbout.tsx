import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  iconImage: StaticImageData;
  title: string;
  color: string;
};

export default function CardAbout(props: Props) {
  return (
    <>
      <div className={`flex flex-col justify-center w-[500px] border-${props.color} p-4 rounded-xl`}>
        <div className="flex items-center">
          <Image src={props.iconImage} alt="" />
          <h1 className={`text-[24px] font-bold text-${props.color} ml-[14px]`}>{props.title}</h1>
        </div>
        <p className="text-[18px] font-bold mt-[14px]">{props.text}</p>
      </div>
    </>
  );
}
