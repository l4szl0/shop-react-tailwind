import React from "react";
import Product from "./Product";

const Products = ({ products }) => {

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="max-w-[309px] h-[65px] py-[8.5px] mb-[49px] mt-[50px] ml-[25px]">
        <h1 className="text-5xl font-semibold text-[#323232]">See Products</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 mx-auto">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="w-[305px] h-[320px] bg-[#FFFFFF] rounded-[6.45791px] border-[0.65px] border-[#DBDBDB] mb-[5px] relative"
            >
              <div className="w-[282.21px] h-[149.18px]">
                <img
                  className="w-full h-full object-cover mx-[11.16px] mt-[10.33px] rounded-[6.45791px]"
                  src={product.thumbnail}
                  alt="/"
                />
                <p className="absolute top-[20px] right-[20px] w-[83px] h-[30px] flex justify-center items-center bg-[#6100FF] text-sm font-semibold text-[#FFFFFF] rounded-[13.8775px]">
                  -{product.discountPercentage}%
                </p>
              </div>
              <div className="flex justify-between items-center ml-[12px] mr-[10px] mb-[6.49px]">
                <h1 className="max-w-[206px] h-[27px] font-bold text-xl text-[#323232] #323232 mt-[3px] overflow-hidden">{product.title}</h1>
                <h1 className="font-bold text-2xl text-[#323232]">{product.price}$</h1>
              </div>
              <div className="max-w-[218px] max-h-[40px] overflow-hidden mb-[13px]">
                <p className="text-sm font-medium text-[#323232] ml-[13px]">{product.description}</p>
              </div>


              <div>
                <Product key={index} product={product} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
