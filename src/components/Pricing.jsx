import { useState } from "react";
import rectangle18 from "../assets/Rectangle18.png";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";

const Pricing = () => {
  const [loading, setLoading] = useState(false); // Thêm state loading

  const checkOut = async (count) => {
    setLoading(true); // Bắt đầu loading
    let productData;

    if (count === 1) {
      productData = {
        productName: "Khóa Học Start",
        description: "Thanh toán đơn hàng",
        returnUrl: "https://tailwind-react-alpha.vercel.app/success",
        cancelUrl: "https://tailwind-react-alpha.vercel.app/cancel",
        price: 1000,
      };
    } else if (count === 2) {
      productData = {
        productName: "Khóa Học Advanced",
        description: "Thanh toán đơn hàng",
        returnUrl: "https://tailwind-react-alpha.vercel.app/success",
        cancelUrl: "https://tailwind-react-alpha.vercel.app/cancel",
        price: 2000,
      };
    } else {
      productData = {
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
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      const textResponse = await response.text();

      if (textResponse) {
        window.location.href = textResponse; // Chuyển hướng tới đường dẫn
      } else {
        console.error("Link không tồn tại trong dữ liệu trả về");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
    } finally {
      setLoading(false); // Kết thúc loading
    }
  };

  const packages = [
    {
      count: 1,
      name: "Start",
      monthlyPrice: 1000,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectuer adipiscing elit.",
      green: rectangle18,
    },
    {
      count: 2,
      name: "Advance",
      monthlyPrice: 2000,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectuer adipiscing elit.",
      green: rectangle18,
    },
    {
      count: 3,
      name: "Premium",
      monthlyPrice: 3000,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectuer adipiscing elit.",
      green: rectangle18,
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div> // Hiển thị "Loading..." trong khi đợi dữ liệu
      ) : (
        <>
          <div className="text-center">
            <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2 font-serif">
              BẢNG GIÁ CHÍNH THỨC{" "}
            </h2>
            <p className="text-tartiary md:w-1/3 mx-auto px-4 font-serif">
              PHIÊN BẢN MỚI NHẤT 2025 - DÀNH CHO BẠN HỌC VIỆT NAM
            </p>
          </div>
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
                  {`${pkg.monthlyPrice} VND`}{" "}
                  <span className="text-base text-tartiary font-medium">
                    /{"tháng"}
                  </span>
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-3 flex-row items-center">
                    <img src={pkg.green} alt="" className="w-5" /> Video of
                    lessons
                  </li>
                  <li className="flex gap-3 flex-row items-center">
                    <img src={pkg.green} alt="" className="w-5" /> Homework
                    check
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
                    <img src={pkg.green} alt="" className="w-5" /> Personal
                    advice from teachers
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
        </>
      )}
    </div>
  );
};

export default Pricing;
