import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";

type Props = {
  text: string;
  iconImage: StaticImageData;
  iconNextOrLock: StaticImageData;
  isUnlocked: boolean;
  onIconClick?: () => void;
  link:String;
};

export default function BlogList(props: Props) {
  const handleIconClick = (event: MouseEvent<HTMLImageElement>) => {
    if (props.onIconClick && props.isUnlocked) {
      props.onIconClick();
    }
  };

  return (
    <>
      <div className="flex w-[1078px] bg-white justify-between items-center p-[20px] border-2 border-black rounded-2xl bg-opacity-60">
        <div className="flex items-center">
          <Image src={props.iconImage} alt="" className="rounded-xl" />
          <h1 className="text-[24px] font-bold ml-[20px]">{props.text}</h1>
        </div>
        {props.isUnlocked ? (
          <Link href={`${props.link}`}>
              <Image
                src={props.iconNextOrLock}
                alt=""
                className="cursor-pointer transform origin-center transition-transform hover:scale-110"
                onClick={handleIconClick}
              />
          </Link>
        ) : (
          <Image
            src={props.iconNextOrLock}
            alt=""
            className="cursor-not-allowed transform origin-center transition-transform hover:scale-110"
          />
        )}
      </div>
    </>
  );
}

