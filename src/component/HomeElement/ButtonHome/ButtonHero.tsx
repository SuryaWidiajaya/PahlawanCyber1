export default function ButtonHero() {
  return (
    <>
      <div className="flex p-[15px] text-white bg-[#793FDF] rounded-full w-[215px] items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-purple-100  hover:text-[#793FDF]">
        <button className="mr-[12px]  font-bold text-[20px] ml-2">Mulai Belajar</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M17.5629 16L10.9629 9.39998L12.8482 7.51465L21.3336 16L12.8482 24.4853L10.9629 22.6L17.5629 16Z" fill="white" />
        </svg>
      </div>
    </>
  );
}
