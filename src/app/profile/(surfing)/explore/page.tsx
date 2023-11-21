"use client"
import { explore } from "@/app/api-client/gifts";
import MyFollowingsProductList from "@/app/components/profileComponents/myFollowingsProductList/myFollowingsProductList";
import ProductList from "@/app/components/profileComponents/productList/productList";
import { Skeleton } from "antd";

import { useEffect, useState } from "react";

function Explore() {
  const [count, setCount] = useState(0);
  const [giftlist, setGiftlist] = useState();

  useEffect(() => {
    (async () => {
      const res = await explore();
      setCount(res.explore);
      setGiftlist(res.explore);
     
    })();
  }, []);
  return (
    <>
      <div className="py-5 px-2 w-full h-screen">
        <h1 className="main-head">Explore</h1>
       
        {giftlist ? (
          <div className="grid grid-cols-2 gap-0 mt-7 mb-10 ">
            <MyFollowingsProductList productList={giftlist} />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-0 mt-7 mb-10 ">
            <Skeleton className="mb-2"  avatar paragraph={{ rows: 3 }} />
            <Skeleton className="mb-2"  avatar paragraph={{ rows: 3 }} />
            <Skeleton className="mb-2"  avatar paragraph={{ rows: 3 }} />
            <Skeleton className="mb-2"  avatar paragraph={{ rows: 3 }} />
            <Skeleton className="mb-2"  avatar paragraph={{ rows: 3 }} />
            <Skeleton className="mb-2"  avatar paragraph={{ rows: 3 }} />
          </div>
        )}
      </div>
    </>
  );
}

export default Explore;
