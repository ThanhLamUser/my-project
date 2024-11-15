import { useState } from "react";
import rectangle18 from '../assets/Rectangle18.png';
import {motion} from 'framer-motion'
import {FadeIn} from '../variants'

const Pricing = () => {

    const packages = [
        {name: "Start", monthlyPrice: 1000, description: "Đến với gói Start chỉ với 1000 VND/tháng, bạn đã có thể bắt đầu hành trình chinh phục kiến thức của mình mà không lo về chi phí! Gói này đặc biệt dành cho những ai mới bắt đầu, muốn trải nghiệm và khám phá các kiến thức nền tảng mà chúng tôi cung cấp. Dù chỉ là gói khởi động nhưng bạn sẽ nhận được:", btn: "btn1", green: rectangle18, link: "/start-link"},
        {name: "Advance", monthlyPrice: 2000, description: "Nếu bạn đã nắm vững những kiến thức cơ bản và muốn tiến xa hơn, gói Advance với mức phí chỉ 2000 VND/tháng sẽ là sự lựa chọn tuyệt vời. Gói này được thiết kế để giúp bạn phát triển mạnh mẽ với những kiến thức chuyên sâu và các tài liệu học tập nâng cao:", btn: "btn2", green: rectangle18, link: "/advance-link"},
        {name: "Premium", monthlyPrice: 3000, description: "Bạn là người ham học hỏi, muốn chinh phục mọi đỉnh cao kiến thức? Gói Premium chính là gói xịn xò mà bạn không thể bỏ qua! Chỉ với 3000 VND/tháng, bạn sẽ sở hữu mọi đặc quyền và sự hỗ trợ tốt nhất:", btn: "btn3", green: rectangle18, link: "/premium-link"},
    ];

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2 font-serif">BẢNG GIÁ CHÍNH THỨC</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4 font-serif">PHIÊN BẢN MỚI NHẤT 2025 - DÀNH CHO BẠN HỌC VIỆT NAM</p>
            </div>
            <motion.div
                id="pricing"
                variants={FadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount: 0.7}}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:w-11/12 mx-auto"
            >
            {
                packages.map((pkg, index) => (
                    <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl" key={index}>
                        <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                        <p className="text-tartiary my-5 font-serif text-justify">{pkg.description}</p>
                        <p className="mt-5 text-center text-secondary text-4xl font-bold">
                            {`${pkg.monthlyPrice} VND`} <span className="text-base text-tartiary font-medium">/tháng</span>
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex gap-3 flex-row items-center"><img src={pkg.green} alt="" className="w-5" /> Video of lessons</li>
                            <li className="flex gap-3 flex-row items-center"><img src={pkg.green} alt="" className="w-5" /> Homework check</li>
                            <li className="flex gap-3 flex-row items-center"><img src={pkg.green} alt="" className="w-5" /> Additional practical task</li>
                            <li className="flex gap-3 flex-row items-center"><img src={pkg.green} alt="" className="w-5" /> Monthly conferences</li>
                            <li className="flex gap-3 flex-row items-center"><img src={pkg.green} alt="" className="w-5" /> Personal advice from teachers</li>
                        </ul>
                        <div className="w-full mx-auto mt-8 flex items-center justify-center">
                            <a href={pkg.link} target="_blank" rel="noopener noreferrer">
                                <button className={`btnPrimary ${pkg.btn}`}>MUA NGAY</button>
                            </a>
                        </div>
                    </div>
                ))
            }
           </motion.div>
        </div>
    );
};

export default Pricing;
