"use client";
import { Button, DatePicker, Form, Selector, Slider, Toast } from "antd-mobile";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { SliderValue } from "antd-mobile/es/components/slider";
import { addHandler } from "@/app/api-client/gifts";
import wisshy from "../../../../../public/logo/wiishy-gray.jpg";
import { AddCircleOutline } from "antd-mobile-icons";

function AddEvent() {
  const { register, handleSubmit, reset } = useForm();

  const [file, setFile] = useState<File>();
  const [image, setImage] = useState(wisshy.src);
  const [desire, setDesire] = useState<SliderValue>(50);
  const [loading, setLoading] = useState(false);

  /// Handle Submit
  const onSubmit = async (data: any) => {
    if (file) {
      setLoading(true);
      const response = await addHandler({
        ...data,
        desire_rate: desire,
        image: file,
      });
      if (response) {
        setLoading(false);
        Toast.show({
          content: response,
          position: "bottom",
        });
        reset();
        setImage(wisshy.src);
      }
    } else {
      Toast.show({
        content: "You should add an image",
        position: "bottom",
      });
    }
  };
  /// End Handle Submit

  const marks = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  return (
    <>
      <div className="py-5 px-2 w-full h-screen">
        <h1 className="main-head">Add event</h1>
        <h4>Here you can add some important or memorial events like birthday and wedding aniversary. Wiishy will aware 
          you ten days in advance to make a plan for this vital parts of your life!
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* GIFT URL */}
          <Form.Item
            label="Gift URL"
            className="font-extrabold text-3xl "
            style={{ backgroundColor: "transparent" }}
          >
            <input
              placeholder="https://amazon.com/xxx"
              className="font-normal wiishy-input-text"
              {...register("gift_url")}
            />
          </Form.Item>
          {/* END URL */}

          {/* GIFT NAME */}
          <Form.Item
            label="Gift name"
            className="font-extrabold text-3xl "
            style={{ backgroundColor: "transparent" }}
          >
            <input
              placeholder="Electric bicycle"
              className="font-normal wiishy-input-text"
              {...register("giftname", { required: true, maxLength: 200 })}
            />
          </Form.Item>

          {/* END GIFT NAME */}

          {/* GIFT PRICE */}
          <Form.Item
            label="Gift Price (in USD)"
            className="font-extrabold text-3xl"
            style={{ backgroundColor: "transparent" }}
          >
            <input
              type="number"
              placeholder="250"
              className="font-normal  wiishy-input-text"
              {...register("giftprice", { required: true })}
            />
          </Form.Item>
          {/* END GIFT PRICE */}

          {/* GIFT DESIRE */}
          <Form.Item
            label="Gift desire"
            className="font-extrabold text-3xl"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="my-4">
              <Slider
                marks={marks}
                ticks
                onAfterChange={(value) => setDesire(value)}
                defaultValue={3}
                max={5}
              />
            </div>
          </Form.Item>
          {/* Endi GIFT DESIRE */}
          {/* GIFT DESCRIPTION */}
          <Form.Item
            label="Gift description"
            help="Let others know about this product"
            className="font-extrabold text-3xl"
            style={{ backgroundColor: "transparent" }}
          >
            <textarea
              placeholder="Write atleast three lines about the gift"
              maxLength={100}
              rows={5}
              className="font-normal wiishy-input-text"
              {...register("giftdescription", { required: true })}
            />
          </Form.Item>
          {/* END GIFT DESCRIPTION */}

          {/* SUBMIT BUTTON */}
          <div className="pb-5 px-0 mt-1 ">
            <Button
              loading={loading}
              type="submit"
              className="btn btn-regular w-full m-1"
              style={{ fontSize: "14px" }}
            >
              Save
            </Button>

            {/* END SUBMIT BUTTON */}
          </div>
        </form>
      </div>
    </>
  );
}

export default AddEvent;