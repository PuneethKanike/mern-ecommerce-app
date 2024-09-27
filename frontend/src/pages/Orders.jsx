import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-8 md:pt-16 px-4 md:px-8">
      <div className="text-xl md:text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex gap-4 md:gap-6 items-start text-sm md:text-base">
              <img
                className="w-12 sm:w-16 md:w-20"
                src={item.image[0]}
                alt={item.name}
              />
              <div>
                <p className="text-sm sm:text-base font-medium">{item.name}</p>
                <div className="flex gap-2 md:gap-3 items-center mt-2 text-sm md:text-base text-gray-700">
                  <p className="text-base md:text-lg">
                    {currency} {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2 text-sm md:text-base">
                  Date: <span className="text-gray-400">23-4-2026</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-2">
                <p className="min-w-[8px] h-[8px] rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="border px-3 py-2 mt-2 md:mt-0 text-sm font-medium hover:bg-black hover:text-white transition-all duration-500">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
