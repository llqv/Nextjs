import { Carousel, Layout } from 'antd';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import BannerImg from '../public/Banner.jpg';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

interface content { }
interface formcontent { }

const bannerStyle: React.CSSProperties = {
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
                        <Image style={{ margin: 'auto' }} src={BannerImg} alt="" width={1312} height={496} />
                    </div>
                </Carousel>
                <Layout />
            </Layout>
        </>
    )
}

export default HomeBanner