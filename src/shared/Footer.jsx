import footer from "../assets/footer.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto">
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 space-y-8">
                    <a href="/" ><img className='w-32 md:w-64 md:mr-12 ' src={footer} alt="logo" /></a>
                    <p className="md:w-2/3 text-zinc-500">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the topic sentence. </p>
                    <div>
                        <input className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none" type="email" id="email" placeholder="Your email"/>
                        <input type="submit" value="Subscribe" className="py-2 px-4 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
                    <div className="space-y-5 mt-5">
                        <h4 className="text-xl text-gray-300">Platform</h4>
                        <ul className="space-y-3">
                            <a href="/" className="block text-gray-300 hover:text-gray-500">Overview</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">Features</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">About</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">Pricing</a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl text-gray-300">Help</h4>
                        <ul className="space-y-3">
                            <a href="/" className="block text-gray-300 hover:text-gray-500">How does it works?</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">Where ti ask question?</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">How to play?</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">What is need for this?</a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl text-gray-300">Contact</h4>
                        <ul className="space-y-3">
                            <a href="/" className="block text-gray-300 hover:text-gray-500">(012) 1234-567-890</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">123 xyz xyz</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">Q9,HCM</a>
                            <a href="/" className="block text-gray-300 hover:text-gray-500">095467</a>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
                <p className="text-gray-300">@ TFLORENTINA 2024. All rights reserved.</p>
                <div className="flex items-center space-x-5">
                    <img src={facebook} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
                    <img src={instagram} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
                    <img src={twitter} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
                    <img src={linkedin} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;