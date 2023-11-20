import Image, { StaticImageData } from 'next/image';
type Props = {
  text: String;
  Image: StaticImageData;
  title: String;
  color: String;
};

export default function CardCategory(props: Props) {
  return (
    <>
      <div className={`flex flex-col items-center w-[316px] border-${props.color} p-8 `}>
        <h1 className={`text-[24px] font-bold text-${props.color} mb-[10px]`}>{props.title}</h1>
        <div className='rounded-xl'>
            <Image src={props.Image} alt=''></Image>
        </div>
        <p className={`text-[16px] mt-[14px] font-bold text-${props.color}`}>{props.text}</p>
      </div>
    </>
  );
}
