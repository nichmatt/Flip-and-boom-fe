import { useEffect } from "react";
import CardShop from "../components/CardShop";
import MrKingCard from "/assets/character/mr-king.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuccesPayment } from "../actionCreators/payment";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.paymentReducer);
  const handlePay = (tokenMidtrans) => {
    window.snap.pay(tokenMidtrans, {
      onSuccess: function (result) {
        console.log("success");
        console.log(result);
        const {
          gross_amount,
          order_id,
          status_code,
          // transaction_id,
          // transaction_time,
        } = result;

        // validasi berdasarkan groos amount untuk ingame balance
        let topupBalance = "";
        switch (gross_amount) {
          case "16.000.00":
            topupBalance = 16;
            break;
          case "31.000.00":
            topupBalance = 32;
            break;
          case "61.000.00":
            topupBalance = 64;
            break;
        }
        let newAmount = gross_amount.slice(0, gross_amount.indexOf('.00'))
        const payloadDispatch = {
          amount: newAmount,
          topupBalance: topupBalance,
          status: status_code === 200 ? "success" : "cancel",
          orderId: order_id,
        };
        dispatch(fetchSuccesPayment(payloadDispatch));
      },
      onPending: function (result) {
        console.log("pending");
        console.log(result);
      },
      onError: function (result) {
        console.log("error");
        console.log(result);
      },
      onClose: function () {
        console.log("customer closed the popup without finishing the payment");
      },
    });
  };

  useEffect(() => {
    if (token) {
      handlePay(token);
    }
  }, [token]);
  return (
    <>
      <section
        id="Shop-Section"
        className="mt-[25px] break-before-page flex flex-col"
      >
        <div className="ml-[30vw] flex">
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[20vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              CHARACTERS
            </p>
          </div>
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              CARDS
            </p>
          </div>
        </div>
        <div
          id="column-shop"
          className="mt-[2vw] w-[57vw] ml-[32vw] flex flex-wrap"
        >
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
        </div>
      </section>
    </>
  );
}
