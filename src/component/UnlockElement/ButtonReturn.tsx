export default function ButtonReturn() {
    return (
      <>
      <div className="flex items-center ">
        <div className="bg-blue-600 flex items-center rounded-xl p-2 px-4 border-white border-4 cursor-pointer transform origin-center transition-transform hover:scale-110">
        <svg  xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
          <path
            d="M12.0323 21.17C11.8852 21.17 11.7381 21.1 11.622 20.95L6.57422 14.43C5.75358 13.37 5.75358 11.63 6.57422 10.57L11.622 4.05002C11.8465 3.76002 12.2181 3.76002 12.4426 4.05002C12.6671 4.34002 12.6671 4.82002 12.4426 5.11002L7.39487 11.63C7.02326 12.11 7.02326 12.89 7.39487 13.37L12.4426 19.89C12.6671 20.18 12.6671 20.66 12.4426 20.95C12.3265 21.09 12.1794 21.17 12.0323 21.17Z"
            fill="#ffffff"
          />
        </svg>
        
        <button className="ml-[5px] text-white text-[24px]">Kembali</button>
        </div>
      </div>
      </>
    );
  }