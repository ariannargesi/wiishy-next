"use client";

import { ProductComplete } from "@/types";
import ProductCardComplete from "../productCardComplete/productCardComplete";

function HomeProductList(props: { productList: [ProductComplete] }) {
  return (
    <>
      {props.productList.map((Item, index) => {
        return (
          <ProductCardComplete
            key={"prd" + index}
            gift_name={Item.gift_name}
            gift_price={Item.gift_price}
            desire_rate={Item.desire_rate}
            gift_like={Item.gift_like}
            gift_view={Item.gift_view}
            gift_id={Item.gift_id}
            gift_image_url={Item.gift_image_url}
            name={Item.name}
            family={Item.family}
            user_image_url={Item.user_image_url}
            user_id={Item.user_id}
            age={Item.age}
          />
        );
      })}
    </>
  );
}

export default HomeProductList;
