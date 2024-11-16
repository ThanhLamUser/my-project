import { useState } from "react";
import rectangle18 from "../assets/Rectangle18.png";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";

const Pricing = () => {
  const checkOut = async (count) => {
    if (count === 1) {
      var productData = {
        productName: "Khóa Học Start",
        description: "Thanh toán đơn hàng",
        returnUrl: "https://tailwind-react-alpha.vercel.app/success",
        cancelUrl: "https://tailwind-react-alpha.vercel.app/cancel",
        price: 1000,
      };
    } else if (count === 2) {
      var productData = {
        productName: "Khóa Học Advanced",
        description: "Thanh toán đơn hàng",
        returnUrl: "https://tailwind-react-alpha.vercel.app/success",
        cancelUrl: "https://tailwind-react-alpha.vercel.app/cancel",
        price: 2000,
      };
    } else {
      var productData = {
        productName: "Khóa Học Premium",
        description: "Thanh toán đơn hàng",
        returnUrl: "https://tailwind-react-alpha.vercel.app/success",
        cancelUrl: "https://tailwind-react-alpha.vercel.app/cancel",
        price: 3000,
      };
    }

    try {
      const response = await fetch(
        "https://spring-render-c3hj.onrender.com/create-payment-link",
        // "http://localhost:8080/create-payment-link",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      console.log("Response status:", response.status); // Kiểm tra mã trạng thái

      // Đọc phản hồi dưới dạng văn bản
      const textResponse = await response.text();
      console.log("Raw response:", textResponse); // In ra phản hồi thô

      //   // Kiểm tra xem phản hồi có phải là JSON không
      //   let data;
      //   try {
      //     data = JSON.parse(textResponse); // Cố gắng phân tích cú pháp JSON
      //   } catch (error) {
      //     console.error("Lỗi phân tích cú pháp JSON:", error);
      //     console.error("Phản hồi không hợp lệ:", textResponse);
      //     return; // Kết thúc nếu không thể phân tích cú pháp
      //   }

      //   // Kiểm tra dữ liệu trả về
      //   console.log("Response data:", data); // Kiểm tra dữ liệu trả về

      //   // Kiểm tra xem có trường link không
      if (textResponse) {
        window.location.href = textResponse; // Chuyển hướng tới đường dẫn
      } else {
        console.error("Link không tồn tại trong dữ liệu trả về");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
    }
  };

  const [isYearly, setISYearly] = useState(false);

  const packages = [
    {
      count: 1,
      name: "Start",
      monthlyPrice: 1000,
      yearlyPrice: 199,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectuer adipiscing elit.",
      green: rectangle18,
    },
    {
      count: 2,
      name: "Advance",
      monthlyPrice: 2000,
      yearlyPrice: 399,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectuer adipiscing elit.",
      green: rectangle18,
    },
    {
      count: 3,
      name: "Premium",
      monthlyPrice: 3000,
      yearlyPrice: 599,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectuer adipiscing elit.",
      green: rectangle18,
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2 font-serif">
          BẢNG GIÁ CHÍNH THỨC{" "}
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4 font-serif">
          PHIÊN BẢN MỚI NHẤT 2025 - DÀNH CHO BẠN HỌC VIỆT NAM
        </p>
      </div>
      {/* <div className="mt-16 flex justify-center">
                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                    <span className="mr-8 text-2xl font-semibold font-serif">Hàng tháng</span>
                <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                    <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500 "}`}></div>
                </div>
                <span className="ml-8 text-2xl font-semibold ">Hàng năm</span>
                 </label>
                 <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setISYearly(!isYearly)} />
            </div>  */}
      <motion.div
        id="pricing"
        variants={FadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
            key={index}
          >
            <h3 className="text-3xl font-bold text-center text-primary ">
              {pkg.name}
            </h3>
            <p className="text-tartiary my-5 font-serif text-justify">
              {pkg.description}
            </p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `${pkg.yearlyPrice} VND` : `${pkg.monthlyPrice} VND`}{" "}
              <span className="text-base text-tartiary font-medium">
                /{isYearly ? "năm" : "tháng"}
              </span>
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3 flex-row items-center">
                <img src={pkg.green} alt="" className="w-5" /> Video of lessons
              </li>
              <li className="flex gap-3 flex-row items-center">
                <img src={pkg.green} alt="" className="w-5" /> Homework check
              </li>
              <li className="flex gap-3 flex-row items-center">
                <img src={pkg.green} alt="" className="w-5" /> Additional
                practical task
              </li>
              <li className="flex gap-3 flex-row items-center">
                <img src={pkg.green} alt="" className="w-5" /> Monthly
                conferences
              </li>
              <li className="flex gap-3 flex-row items-center">
                <img src={pkg.green} alt="" className="w-5" /> Personal advice
                from teachers
              </li>
            </ul>
            <div
              className="w-full mx-auto mt-8 flex items-center justify-center"
              onClick={() => checkOut(pkg.count)}
            >
              <button className="btnPrimary">MUA NGAY</button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
