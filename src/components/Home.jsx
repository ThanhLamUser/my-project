import banner from '../assets/banner.png';
import Banner from '../shared/Banner';

const Home = () => {
    
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id='home'>
                <Banner banner={banner} heading="EFFORTLESS ENGLISH 2025: BẠN SẼ NÓI TIẾNG ANH THÀNH THẠO, TRÔI CHẢY NHƯ NGƯỜI BẢN NGỮ !" subheading="Bạn cảm thấy xấu hổ khi nói tiếng Anh? Phát âm của bạn rất tệ? Bạn gặp nhiều lỗi khi nói?

Trong các bài học Effortless English, thầy AJ Hoge chỉ ra cho bạn những cách tuyệt vời để nói tiếng Anh tốt hơn, kết bạn với người nước ngoài và cảm thấy thoải mái khi nói tiếng Anh." subheading1="Đăng ký mua bộ chương trình bài học Effortless English ngay hôm nay để có thể nói tiếng Anh dễ dàng, tự tin và trôi chảy sau 6 tháng." btn1={'KHÁM PHÁ NGAY'} />
        </div>
    );
}
export default Home;