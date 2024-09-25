import about from '../assets/about.png'
import about2 from '../assets/about2.png'
import {motion} from 'framer-motion'
import {FadeIn} from '../variants'

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id='about'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <motion.div
                variants={FadeIn('right',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount: 0.7}}
                 className='md:w-1/2'>
                    <img src={about} />
                </motion.div>
                <motion.div
                               variants={FadeIn('left',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount: 0.7}}
                 className='md:w-2/5'>
                    <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary '>for many years</span> </h2>
                    <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China</p>
                    <button className='btnPrimary'>Get started </button>
                </motion.div>
            </div> 
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <motion.div 
                  variants={FadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount: 0.7}}
                className='md:w-1/2'>
                    <img src={about2} />
                </motion.div>
                <motion.div
                  variants={FadeIn('right',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount: 0.7}}
                 className='md:w-2/5'>
                    <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>You can Practice at any <span className='text-secondary '>time convinent for you</span> </h2>
                    <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China</p>
                    <button className='btnPrimary'>Get started </button>
                </motion.div>
            </div> 
        </div>
        
    );
};

export default About;