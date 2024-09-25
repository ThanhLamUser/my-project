import Banner from "../shared/Banner";
import banner2 from "../assets/banner2.png"

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl auto my-12"> 
            <Banner banner={banner2} heading="Each student an share their discount code for friends " subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the 'topic sentence.' "} btn1={"I have code a code "} btn2={""}/>
        </div>
    );
};

export default Newsletter;