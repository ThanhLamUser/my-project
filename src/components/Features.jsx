// import featureImg from '..assets/feature.png'
import feature from '../assets/feature.png';
import {motion} from 'framer-motion'
import {FadeIn} from '../variants'

const Features = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-xl mx-auto " id='feature'>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div 
                 variants={FadeIn('right',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount: 0.7}}
                className="lg:w-1/4">
                    <h3 className="text-2xl text-primary font-bold lg:w-11/12 mb-3 font-sans">LÀM THẾ NÀO ĐỂ NÓI TIẾNG ANH NHƯ NGƯỜI BẢN NGỮ</h3>
                    <p className="text-base text-tartiary font-serif">Bạn đã học tiếng Anh nhiều năm, nhưng bạn vẫn không nói tốt. Bạn đọc tiếng Anh tốt nhưng bạn lại cảm thấy lo lắng và nhút nhát khi nói tiếng Anh. Bạn biết rất nhiều công thức ngữ pháp nhưng bạn vẫn gặp nhiều lỗi khi nói. Phát âm của bạn rất tệ. Đúng vậy không?</p>
                </motion.div>
                <motion.div
                 variants={FadeIn('up',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount: 0.1 }}
                 className="w-full lg:w-3/4">
                    <div className='lg:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 hidden'>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer '>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={feature}/>   
                                <h5 className='text-2xl font-semibold px-5 text-center mt-5 text-primary'>Convenient study schedule</h5> 
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16  '>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={feature} />   
                                <h5 className='text-2xl font-semibold px-5 text-center mt-5 text-primary'>Convenient study schedule</h5> 
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer  '>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={feature} />   
                                <h5 className='text-2xl font-semibold px-5 text-center mt-5 text-primary'>Convenient study schedule</h5> 
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Features;