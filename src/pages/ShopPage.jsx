import { useEffect } from "react";
import CardShop from "../components/CardShop";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopData } from "../actionCreators";
import { actionFilterShopData } from "../actionCreators/fetchShop";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { datas, filter } = useSelector((state) => {
    return state.fetchShopReducer;
  });

  function handleCharacter() {
    const character = datas.filter((type) => {
      return type.type === "char";
    });
    dispatch(actionFilterShopData(character));
  }

  function handleSkin() {
    const skin = datas.filter((type) => {
      return type.type === "skin";
    });
    dispatch(actionFilterShopData(skin));
  }

  function showAll() {
    dispatch(actionFilterShopData([]));
  }

  useEffect(() => {
    dispatch(fetchShopData());
    // console.log(datas);
  }, []);
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
            : datas.map((item) => {
                return (
                  <CardShop
                    key={item.id}
                    imgUrl={`/assets/shops/${item.name}.png`}
                    itemName={item.name}
                    itemCategory={item.type}
                    itemPrice={`${item.price}`}
                  />
                );
              })}
        </div>
      </section>
    </>
  );
}
