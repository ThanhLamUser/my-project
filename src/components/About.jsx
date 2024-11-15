import about from "../assets/about.png";
import about2 from "../assets/about2.png";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";

const About = () => {
  const checkOut = async () => {
    const productData = {
      productName: "Mì tôm hảo hảo ly",
      description: "Thanh toán đơn hàng",
      returnUrl: "http://localhost:3030/success",
      cancelUrl: "http://localhost:3030",
      price: 2000,
    };

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

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={FadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={about} />
        </motion.div>
        <motion.div
          variants={FadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className="text-secondary ">for many years</span>{" "}
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China
          </p>
          <button className="btnPrimary" onClick={checkOut}>
            Get started{" "}
          </button>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={about2} />
        </motion.div>
        <motion.div
          variants={FadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any{" "}
            <span className="text-secondary ">time convinent for you</span>{" "}
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China
          </p>
          <button className="btnPrimary">Get started </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
