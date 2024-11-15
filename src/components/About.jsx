import about from "../assets/about.png";
import about2 from "../assets/about2.png";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";

const About = () => {


  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="grid grid-col-1 md:flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={FadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="md:w-1/2"
        >
          <img src={about} />
        </motion.div>
        <motion.div
          variants={FadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal font-sans">
            VƯỢT QUA SỰ LO LẮNG NÓI TIẾNG ANH MỘT CÁCH{" "}
            <span className="text-secondary ">TỰ TIN</span>{" "}
            VÀ
            <span className="text-secondary "> TRÔI CHẢY</span>{" "}

          </h2>
          <p className="text-tartiary text-lg mb-7 font-serif">
            Dựa trên các nghiên cứu gần nhất và với hơn 20 năm kinh nghiệm dạy tiếng Anh của thầy A.J, Effortless English sẽ chỉ cho bạn cách để nói tiếng Anh thành công.
          </p>
          {/* <button className="btnPrimary" onClick={checkOut}>
            Get started{" "}
          </button> */}
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="md:w-1/2"
        >
          <img src={about2} />
        </motion.div>
        <motion.div
          variants={FadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal uppercase font-sans">
            Effortless English Online Vip Program 2025 sẽ dạy bạn nói tiếng Anh thành thạo{" "}
            <span className="text-secondary ">theo phương pháp hoàn toàn mới</span>{" "}
          </h2>
          <p className="text-tartiary text-lg mb-7 font-serif">
            Bạn không cô đơn đâu. Lí do bạn gặp phải các vấn đề đó là bởi vì bạn học tiếng Anh theo các phương pháp học cũ trên trường.Hầu hết mọi người đều thất bại để có thể nói tiếng Anh nhanh, dễ dàng và tự động khi sử dụng các phương pháp cũ này.
          </p>
          {/* <button className="btnPrimary">Get started </button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
