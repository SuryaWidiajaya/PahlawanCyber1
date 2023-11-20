import { useEffect, useState } from 'react';

type Props = {
  counter: number;

};



export default function AnimatedCounter (props : Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < props.counter) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <span className="text-5xl font-bold transition-transform transform hover:scale-110 duration-300 ease-in-out">
      {count}
    </span>
  );
};



