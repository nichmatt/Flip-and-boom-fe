import { useEffect } from "react";
import CardShop from "../components/CardShop";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuccesPayment } from "../actionCreators/payment";
import { fetchShopData } from "../actionCreators";
import { actionFilterShopData } from "../actionCreators/fetchShop";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.paymentReducer);

  const { datas, filter } = useSelector((state) => state.fetchShopReducer);
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
        let newAmount = gross_amount.slice(0, gross_amount.indexOf(".00"));
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

  useEffect(() => {
    dispatch(fetchShopData());
    // console.log(datas);
  }, []);

  function handleCharacter() {
    const character = datas?.filter((type) => {
      // console.log("lu masuk ga sih");
      return type.type === "char" && type.name !== "default";
    });
    dispatch(actionFilterShopData(character));
  }

  function handleSkin() {
    const skin = datas.filter((type) => {
      return type.type === "skin" && type.name !== "default";
    });
    dispatch(actionFilterShopData(skin));
  }

  function showAll() {
    dispatch(actionFilterShopData([]));
  }

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
            onClick={handleCharacter}
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
            onClick={handleSkin}
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
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={showAll}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              ALL
            </p>
          </div>
        </div>
        <div
          id="column-shop"
          className="mt-[2vw] w-[57vw] ml-[32vw] flex flex-wrap"
        >
          <CardShop
            imgUrl="/assets/voucher/16.png"
            itemName="16 Points"
            itemCategory="VOUCHER"
            itemPrice="IDR 16.000"
          />
          <CardShop
            imgUrl="/assets/voucher/32.png"
            itemName="32 Points"
            itemCategory="VOUCHER"
            itemPrice="IDR 31.000"
          />
          <CardShop
            imgUrl="/assets/voucher/64.png"
            itemName="64 Points"
            itemCategory="VOUCHER"
            itemPrice="IDR 61.000"
          />
          {filter.length
            ? filter.map((item) => {
                return (
                  <CardShop
                    key={item.id}
                    imgUrl={`/assets/shops/${item.name}.png`}
                    itemName={item.name}
                    itemCategory={item.type}
                    itemPrice={`${item.price}`}
                  />
                );
              })
            : datas.map((item) =>
                item.name !== "default" ? (
                  <CardShop
                    key={item.id}
                    imgUrl={`/assets/shops/${item.name}.png`}
                    itemName={item.name}
                    itemCategory={item.type}
                    itemPrice={`${item.price}`}
                  />
                ) : (
                  ""
                )
              )}
        </div>
      </section>
    </>
  );
}
