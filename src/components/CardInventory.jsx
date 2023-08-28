import { useEffect } from "react";

export default function CardInventory({ imgUrl, itemName, itemCategory }) {
  useEffect(() => {
    console.log(imgUrl);
  }, []);
  return (
    <section className="w-[250px] h-[325px] bg-[rgba(0,0,0,0.3)] rounded-[5px] m-[10px] hover:bg-[rgba(231,231,231,0.3)] duration-300 hover:scale-[1.05]">
      <div className="w-[80%] m-auto  p-[10px] pt-[30px] flex justify-center">
        <img src={imgUrl} className="max-h-[180px]" alt="item-image" />
      </div>
      <p className="text-white font-semibold italic text-center text-xl mb-[2vh]">
        {itemName}
      </p>
      <div id="price" className="flex justify-center ">
        <div className="text-center text-white italic font-semibold text-xs ml-[20px] mr-[5px]  bg-[rgba(0,0,0,0.3)] px-[15px] flex items-center">
          {itemCategory}
        </div>
        <p className="text-white px-[5px]">|</p>
        <p
          style={{ textShadow: "1px 1px 10px" }}
          className="pr-[30px] pl-[10px] py-[3px] text-[#9eff27] italic font-semibold"
        >
          use
        </p>
      </div>
    </section>
  );
}
