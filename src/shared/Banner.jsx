import { motion } from 'framer-motion';
import { FadeIn } from '../variants';

// eslint-disable-next-line react/prop-types
const Banner = ({ banner, heading, subheading, subheading1, btn1, btn2 }) => {
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        <motion.div
          variants={FadeIn('down', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={banner} className="w-3/4" alt="" />
        </motion.div>
        <motion.div
          variants={FadeIn('up', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='md:w-3/5'
        >
          <h2 className='md:text-4xl text-4xl font-bold text-white mb-6 leading-relaxed font-sans'>{heading}</h2>
          <p className='text-[#EBEBEB] text-lg pb-6 font-serif'>{subheading}</p>
          <p className='text-[#EBEBEB] text-lg pb-6 font-serif'>{subheading1}</p>
          <div className='space-x-5 space-y-4'>
            <a href="#pricing">
              <button className='btnPrimary'>{btn1}</button>
            </a>
            {/* Nếu bạn có nút thứ 2 */}
            {/* <a href="#pricing">
              <button className='btnPrimary'>{btn2}</button>
            </a> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
