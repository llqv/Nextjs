import { Card, Col, Layout, Row, Avatar } from 'antd';
const { Meta } = Card;
import Image from 'next/image';
import styled from 'styled-components';
import AddressImage from '../address.png';
import AllProductImage from '../all.png';
import DeliveryImage from '../Button.png';
import ChineseFoodImage from '../chinese.png';
import CoffeeImage from '../coffee.png';
import FastFoodImage from '../fastfood.png';
import TimeStartImage from '../Frame 60.png';
import TimeEndImage from '../Frame 61.png';
import FreeshipImage from '../freeship.png';
import GiftImage from '../gift.png';
import BookingImage from '../Group 47.png';
import JapaneseFoodImage from '../japanese.png';
import MilkImage from '../milk.png';
import TakeAwayImage from '../package.png';
import PizzaImage from '../pizza.png';
import Product1Image from '../product1.png';
import Product2Image from '../product2.png';
import Product3Image from '../product3.png';
import Product4Image from '../product4.png';
import Product5Image from '../product5.png';
import SweetImage from '../sweet.png';
import TimeImage from '../time.png';
import StatusStoreImage from '../Vector.png';
import VegetarianImage from '../vergetarian2.png';
import VoucherImage from '../voucher.png';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

const ContentStyle = styled.div`
    width: 100%;
    max-width: 800;
    padding : 20px 20px 0px 80px;
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
    .card-form {
        width: 100%;
        max-width: 300px;
        height: 100%;
        min-height: 312px;
    }

`
const StyleContentProduct = styled.div`
width: 100%;
max-width: 258px;
min-width: 172px;
min-height: 312px;
height: 390px;
    margin-left: 10px;
    font-family: 'Gilroy';
    font-style: normal;
`
const Styleh1 = styled.div`
/* Peppo restaurant */
width: 100%;
max-width: 226px;
margin-bottom: 20px;

/* H4 */
font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 24px;
/* identical to box height, or 133% */


color: #000000;


/* Inside auto layout */


`
const StyledAdressContent = styled.div`
/* 12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km) */
width:100%;
align-items: flex-start;
/* Note 12 */

font-family: 'Gilroy';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;

color: #000000;


/* Inside auto layout */


`
const StyleStatus = styled.div`
/* Đang mở cửa */
margin-top: 10px;
align-items: flex-start;
width: 100%;
max-width: 200px;
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
.status-store {
    margin-right: 8px;
}



`
const StyleTime = styled.div`
/* Frame 62 */

width:100%;
/* Auto layout */
margin-top: 10px;
text-align: center;
display: flex;
flex-direction: row;
padding: 0px;
gap: 26px;

margin-bottom: 30px;

/* Inside auto layout */
.time-start-image{
    margin-left: 6px;
}
.time-end-img{
    margin-left: 18px;
}
`
const StyleBooking = styled.div`
/* Frame 24 */

/* Auto layout */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    .delivery-img{
        object-fit: cover;
    }
    .booking-img{
        object-fit: cover;
    }

`
const HomeContent = (props: Props) => {

    return (
        <ContentStyle>
            <Row>
                <StyleFormContent>
                    <Row gutter={[16, 16]}>
                        <Col span={8} xs={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }}>
                            <Card className='card-form'
                                cover={
                                    <Image src={Product1Image} alt="" />
                                }
                            >
                                <Styleh1>
                                    Peppo Restaurant
                                </Styleh1>
                                <StyledAdressContent>
                                    <Row>
                                        <Col span={2}>
                                            <Image src={AddressImage} alt="" />
                                        </Col>
                                        <Col span={22}>
                                            12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)
                                        </Col>
                                    </Row>
                                </StyledAdressContent>
                                <StyleStatus>
                                    <Image className='status-store' src={StatusStoreImage} alt="" />
                                    Đang mở cửa
                                </StyleStatus>
                                <StyleTime>
                                    <Row>
                                        <Image src={TimeImage} alt="" />
                                        <Col className='time-start-image' span={10}>
                                            <Image src={TimeStartImage} alt="" />
                                        </Col>
                                        <Col span={10}>
                                            <Image className='time-end-img' src={TimeEndImage} alt="" />
                                        </Col>
                                    </Row>

                                </StyleTime>
                                <StyleBooking>
                                    <Image className='delivery-img' src={DeliveryImage} alt="" />
                                    <Image className='booking-img' src={BookingImage} alt="" />
                                </StyleBooking>

                            </Card>
                        </Col>
                        <Col span={8} xs={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }}>
                            <Card className='card-form'
                                cover={
                                    <Image src={Product1Image} alt="" />
                                }
                            >
                                <Styleh1>
                                    Peppo Restaurant
                                </Styleh1>
                                <StyledAdressContent>
                                    <Row>
                                        <Col span={2}>
                                            <Image src={AddressImage} alt="" />
                                        </Col>
                                        <Col span={22}>
                                            12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)
                                        </Col>
                                    </Row>
                                </StyledAdressContent>
                                <StyleStatus>
                                    <Image className='status-store' src={StatusStoreImage} alt="" />
                                    Đang mở cửa
                                </StyleStatus>
                                <StyleTime>
                                    <Row>
                                        <Image src={TimeImage} alt="" />
                                        <Col className='time-start-image' span={10}>
                                            <Image src={TimeStartImage} alt="" />
                                        </Col>
                                        <Col span={10}>
                                            <Image className='time-end-img' src={TimeEndImage} alt="" />
                                        </Col>
                                    </Row>

                                </StyleTime>
                                <StyleBooking>
                                    <Image className='delivery-img' src={DeliveryImage} alt="" />
                                    <Image className='booking-img' src={BookingImage} alt="" />
                                </StyleBooking>

                            </Card>
                        </Col>
                        <Col span={8} xs={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }}>
                            <Card className='card-form'
                                cover={
                                    <Image src={Product1Image} alt="" />
                                }
                            >
                                <Styleh1>
                                    Peppo Restaurant
                                </Styleh1>
                                <StyledAdressContent>
                                    <Row>
                                        <Col span={2}>
                                            <Image src={AddressImage} alt="" />
                                        </Col>
                                        <Col span={22}>
                                            12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)
                                        </Col>
                                    </Row>
                                </StyledAdressContent>
                                <StyleStatus>
                                    <Image className='status-store' src={StatusStoreImage} alt="" />
                                    Đang mở cửa
                                </StyleStatus>
                                <StyleTime>
                                    <Row>
                                        <Image src={TimeImage} alt="" />
                                        <Col className='time-start-image' span={10}>
                                            <Image src={TimeStartImage} alt="" />
                                        </Col>
                                        <Col span={10}>
                                            <Image className='time-end-img' src={TimeEndImage} alt="" />
                                        </Col>
                                    </Row>

                                </StyleTime>
                                <StyleBooking>
                                    <Image className='delivery-img' src={DeliveryImage} alt="" />
                                    <Image className='booking-img' src={BookingImage} alt="" />
                                </StyleBooking>

                            </Card>
                        </Col>

                    </Row>

                </StyleFormContent>
            </Row >
        </ContentStyle >
    )
}

export default HomeContent