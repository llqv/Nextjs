import { Carousel, Layout } from 'antd';
import Image from 'next/image';
import BannerImg from '../public/Banner.jpg';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

interface content { }
interface formcontent { }

const bannerStyle: React.CSSProperties = {
    position: 'relative',
    marginTop: 4,
    color: '#fff',
    textAlign: 'center',
    background: '#FFFFFF',
};

const HomeBanner = (props: Props) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <>
            <Layout style={bannerStyle}>
                <Carousel afterChange={onChange}>
                    <div>
                        <Image style={{ margin: 'auto', objectFit:'cover', width:'100%', height:'100%'}} src={BannerImg} alt="" />
                    </div>
                </Carousel>
                <Layout />
            </Layout>
        </>
    )
}

export default HomeBanner