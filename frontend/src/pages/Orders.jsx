import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { currency, backendUrl, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

 

  return (
    <div className="border-t pt-8 md:pt-16 px-4 md:px-8">
      <div className="text-xl md:text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.length === 0 ? (
          <p>No orders found.</p>
        ) : ( 
          orderData.slice(0, 3).map((item, index) => (
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
                  <div className="flex gap-2 md:gap-3 items-center mt-1 text-sm md:text-base text-gray-700">
                    <p className="text-base md:text-lg">
                      {currency} {item.price}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-1 text-sm md:text-base">
                    Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    Payment: <span className="text-gray-400">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-center gap-2">
                  <p className="min-w-[8px] h-[8px] rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">{item.status}</p>
                </div>
                <button onClick={loadOrderData} className="border px-3 py-2 mt-2 md:mt-0 text-sm font-medium hover:bg-black hover:text-white transition-all duration-500">
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
