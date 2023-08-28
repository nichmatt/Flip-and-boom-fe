import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetTokenMidtrans } from "../actionCreators/payment";
export default function CardShop({ imgUrl, itemName, itemCategory }) {
  const dispatch = useDispatch();

  const handleClickCard = (e) => {
    dispatch(fetchGetTokenMidtrans(16000));
  };

  const { token } = useSelector(state => state.paymentReducer)
  useEffect(() => {
    // console.log(token);
  }, [token]);
  return (
    <section
      className="w-[250px] h-[325px] bg-[rgba(0,0,0,0.3)] rounded-[5px] m-[10px] hover:bg-[rgba(231,231,231,0.3)] duration-300 hover:scale-[1.05]"
      onClick={handleClickCard}
    >
      <img
        src={imgUrl}
        alt="item-image"
        className="w-[80%] m-auto p-[10px] pt-[30px]"
      />
      <p className="text-white font-semibold italic text-center text-xl mb-[2vh]">
        {itemName}
      </p>
      <div id="price" className="flex justify-center ">
        <div className="text-center text-white italic font-semibold text-xs ml-[20px] mr-[5px]  bg-[rgba(0,0,0,0.3)] px-[15px] flex items-center">
          {itemCategory}
        </div>
        <p className="text-white px-[5px]">|</p>
        <i
          className="fa-solid fa-money-bill-1-wave text-[#ffb800] pt-[8px] ml-[5px] "
          style={{ textShadow: "0.5px 0.1px 5px" }}
        ></i>
        <p
          style={{ textShadow: "1px 1px 10px" }}
          className="pr-[30px] pl-[10px] py-[3px] text-[#ffb800] italic font-semibold"
        >
          300
        </p>
      </div>
    </section>
  );
}
