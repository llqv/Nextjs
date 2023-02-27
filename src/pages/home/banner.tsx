import { Carousel, Layout } from 'antd';
import Image from 'next/image';
import BannerImg from '../Banner.jpg';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;
import '../../../src/assets/css/styles.scss'
import styled from 'styled-components';


const BannerStyle = styled.div `
    position: relative;
    margin-top :0.4rem;
    text-align: center;
    background: '#FFFFFF';
    .banner-img {
        margin: auto;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const HomeBanner = (props: Props) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <BannerStyle>
            <Layout>
                <Carousel afterChange={onChange}>
                    <div>
                        <Image className='banner-img' src={BannerImg} alt="" />
                    </div>
                </Carousel>
                <Layout />
            </Layout>
        </BannerStyle>
    )
}

export default HomeBanner