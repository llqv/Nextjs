import { Card, Col, Layout, Row, Avatar } from 'antd';
const { Meta } = Card;
import Image from 'next/image';
import styled from 'styled-components';
import AddressImage from '../public/address.png';
import AllProductImage from '../public/all.png';
import DeliveryImage from '../public/Button.png';
import ChineseFoodImage from '../public/chinese.png';
import CoffeeImage from '../public/coffee.png';
import FastFoodImage from '../public/fastfood.png';
import TimeStartImage from '../public/Frame 60.png';
import TimeEndImage from '../public/Frame 61.png';
import FreeshipImage from '../public/freeship.png';
import GiftImage from '../public/gift.png';
import BookingImage from '../public/Group 47.png';
import JapaneseFoodImage from '../public/japanese.png';
import MilkImage from '../public/milk.png';
import TakeAwayImage from '../public/package.png';
import PizzaImage from '../public/pizza.png';
import Product1Image from '../public/product1.png';
import Product2Image from '../public/product2.png';
import Product3Image from '../public/product3.png';
import Product4Image from '../public/product4.png';
import Product5Image from '../public/product5.png';
import SweetImage from '../public/sweet.png';
import TimeImage from '../public/time.png';
import StatusStoreImage from '../public/Vector.png';
import VegetarianImage from '../public/vergetarian2.png';
import VoucherImage from '../public/voucher.png';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

const ContentStyle = styled.div`
    width: 100%;
    max-width: 800;
    padding : 20px 100px 0px 80px;
    min-height: 120;
    height: 1700;
    color: '#fff';
`
const StyleContent = styled.div`
width: 100%;
margin-left: 40px;
margin-bottom: 50px;
max-width: 258px;
height: 369px;
border-radius: 10px;
background: white;
color: black;
font-family: 'Gilroy';
font-style: normal;
box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
`
const StyleFormContent = styled.div`
/* padding : top | right | bottom | left */
    padding-top: 4px;
`
const StyleContentProduct = styled.div`
width: 100%;
max-width: 258px;
height: 400px;
    margin-left: 10px;
    font-family: 'Gilroy';
    font-style: normal;
`
const Styleh1 = styled.div`
/* Peppo restaurant */
width: 226px;
height: 32px;
margin-bottom: 20px;

/* H4 */
align-items: flex-start;
font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */


color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const StyledAdressContent = styled.div`
/* 12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km) */

align-items: flex-start;
width: 200px;
height: 28px;
/* Note 12 */

font-family: 'Gilroy';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 1;
`
const StyleStatus = styled.div`
/* Đang mở cửa */
margin-top: 10px;
align-items: flex-start;
width: 200px;
height: 20px;

/* Note 12 */

font-family: 'Gilroy';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
display: flex;
align-items: center;

/* status/6 */

color: #1DAC0E;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 1;
`
const StyleTime = styled.div`
/* Frame 62 */


/* Auto layout */
margin-top: 10px;
align-items: flex-start;
display: flex;
flex-direction: row;
padding: 0px;
gap: 26px;

width: 200px;
height: 18px;
margin-bottom: 40px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`
const StyleBooking = styled.div`
/* Frame 24 */


/* Auto layout */
padding-left: 16px;
display: flex;
flex-direction: row;
align-items: flex-end;
place-content: center;

gap: 77px;

width: 226px;
height: 54px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`
const HomeContent = (props: Props) => {

    return (
        <ContentStyle>
            <Row>
                <StyleFormContent>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card
                                style={{ width: 300, height: 390 }}
                                cover={
                                    <Image src={Product1Image} alt="" />
                                }
                            >
                                <Styleh1>
                                    Peppo Restaurant
                                </Styleh1>
                                <StyledAdressContent>
                                    <Image style={{ marginRight: 8 }} src={AddressImage} alt="" />
                                    12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)
                                </StyledAdressContent>
                                <StyleStatus>
                                    <Image style={{ marginRight: 8 }} src={StatusStoreImage} alt="" />
                                    Đang mở cửa
                                </StyleStatus>
                                <StyleTime>
                                <Image src={TimeImage} alt="" />
                                <Image src={TimeStartImage} alt="" />
                                <Image src={TimeEndImage} alt="" />
                                </StyleTime>
                                <StyleBooking>
                                    <Image src={DeliveryImage} alt="" />
                                    <Image src={BookingImage} alt="" />
                                </StyleBooking>

                            </Card>
                        </Col>
                        <Col span={8} xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 8 }} >
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                    </Row>
                </StyleFormContent>
            </Row >
        </ContentStyle >
    )
}

export default HomeContent