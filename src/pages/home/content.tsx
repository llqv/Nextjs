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
import '../../../src/assets/css/styles.scss'
import { start } from 'repl';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

const ContentStyle = styled.div`
    width: 100%;
    max-width: 700;
    padding : 2rem 2rem 0px 8rem;
    min-height: 120;
    height: 1700;
    color: '#fff';
    @media screen and (max-width : 990px) {
        padding : 2rem 0px 0px 0px;
    }
`
const StyleContent = styled.div`
width: 100%;
margin-left: 0.4rem;
margin-bottom: 0.5rem;
max-width: 2.58rem;
height: 3.69rem;
border-radius: 0.1rem;
background: white;
color: black;
font-family: 'Gilroy';
font-style: normal;
box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
`
const StyleFormContent = styled.div`
/* padding : top | right | bottom | left */
    padding-top: 0.4rem;
    .card-form {
        width: 100%;
        max-width: 30rem;
        height: 100%;
        min-height: 3.12rem;
    }

`
const Styleh1 = styled.div`
/* Peppo restaurant */

width: 100%;
margin-bottom: 2rem;

/* H4 */
font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 2rem;
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
font-size: 1.4rem;
line-height: 1.4rem;

color: #000000;


/* Inside auto layout */


`
const StyleStatus = styled.div`
/* Đang mở cửa */
margin-top: 1rem;
align-items: flex-start;
width: 100%;
max-width: 20rem;
height: 2rem;

/* Note 12 */

font-family: 'Gilroy';
font-style: normal;
font-weight: 400;
font-size: 1.4rem;
line-height: 1.4rem;
display: flex;
align-items: center;

/* status/6 */

color: #1DAC0E;
.status-store {
    margin-right: 0.8rem;
}



`
const StyleTime = styled.div`
/* Frame 62 */

width:100%;
max-width: 30rem;
/* Auto layout */
margin-top: 1rem;
text-align: center;
display: flex;
flex-direction: row;
padding: 0px;
gap: 2.6rem;
margin-bottom: 3rem;
/* .time-store{
    @media screen and (max-width:400px) {
 display: grid ;
}
} */
@media screen and (min-width:400px) {
 display: grid ;
}
/* Inside auto layout */
.time-start-image{
    margin-left: 0.2rem;
}
.time-end-img{
    margin-left: 1.8rem;
}
`
const StyleBooking = styled.div`
/* Frame 24 */

/* Auto layout */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    .delivery-img{
        @media screen and (max-width: 400px) {
            width: 10rem;
        }

    }
    .booking-img{
        margin-left: 2rem;
        @media screen and (max-width: 400px) {
            width: 7rem;
            height: 7rem;
            margin-left: 0rem;
        }
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
                                    <Row className='time-store'>
                                        <Image src={TimeImage} alt="" />
                                        <Col className='time-start-image' span={10}>
                                            <Image src={TimeStartImage} alt="" />
                                        </Col>
                                        <Col className='time-end-img'  span={10}>
                                            <Image src={TimeEndImage} alt="" />
                                        </Col>
                                    </Row>
                                </StyleTime>
                                <StyleBooking>
                                <Row>
                                    <Col span={8}>
                                        <Image className='delivery-img' src={DeliveryImage} alt="" /> 
                                    </Col>
                                    <Col span={8} offset={8}>
                                        <Image className='booking-img' src={BookingImage} alt="" />
                                    </Col>
                                </Row>
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
                                    <Row className='time-store'>
                                        <Image src={TimeImage} alt="" />
                                        <Col className='time-start-image' span={10}>
                                            <Image src={TimeStartImage} alt="" />
                                        </Col>
                                        <Col className='time-end-img'  span={10}>
                                            <Image src={TimeEndImage} alt="" />
                                        </Col>
                                    </Row>
                                </StyleTime>
                                <StyleBooking>
                                <Row>
                                    <Col span={8}>
                                        <Image className='delivery-img' src={DeliveryImage} alt="" /> 
                                    </Col>
                                    <Col span={8} offset={8}>
                                        <Image className='booking-img' src={BookingImage} alt="" />
                                    </Col>
                                </Row>
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
                                    <Row className='time-store'>
                                        <Image src={TimeImage} alt="" />
                                        <Col className='time-start-image' span={10}>
                                            <Image src={TimeStartImage} alt="" />
                                        </Col>
                                        <Col className='time-end-img'  span={10}>
                                            <Image src={TimeEndImage} alt="" />
                                        </Col>
                                    </Row>
                                </StyleTime>
                                <StyleBooking>
                                <Row>
                                    <Col span={8}>
                                        <Image className='delivery-img' src={DeliveryImage} alt="" /> 
                                    </Col>
                                    <Col span={8} offset={8}>
                                        <Image className='booking-img' src={BookingImage} alt="" />
                                    </Col>
                                </Row>
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