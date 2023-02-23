import { Button, Card, Col, Layout, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;
import Image from 'next/image';
import AllProductImage from '../public/all.png'
import FastFoodImage from '../public/fastfood.png'
import TakeAwayImage from '../public/package.png'
import ChineseFoodImage from '../public/chinese.png'
import JapaneseFoodImage from '../public/japanese.png'
import VoucherImage from '../public/voucher.png'
import VegetarianImage from '../public/vergetarian2.png'
import CoffeeImage from '../public/coffee.png'
import PizzaImage from '../public/pizza.png'
import GiftImage from '../public/gift.png'
import SweetImage from '../public/sweet.png'
import MilkImage from '../public/milk.png'
import FreeshipImage from '../public/freeship.png'
import Product1Image from '../public/product1.png'
import Product2Image from '../public/product2.png'
import Product3Image from '../public/product3.png'
import Product4Image from '../public/product4.png'
import Product5Image from '../public/product5.png'
import DeliveryImage from '../public/Button.png'
import BookingImage from '../public/Group 47.png'
import AddressImage from '../public/address.png'
import StatusStoreImage from '../public/Vector.png'
import TimeImage from '../public/time.png'
import TimeStartImage from '../public/Frame 60.png'
import TimeEndImage from '../public/Frame 61.png'
const contentStyle: React.CSSProperties = {
    marginTop: 4,
    marginLeft: 100,
    marginRight: 100,
    minHeight: 120,
    height: 1700,
    color: '#fff',
};
const StyleContent = styled.div`
width: 260px;
height: 380px;
border-radius: 10px;
background: white;
color: black;
font-family: 'Gilroy';
font-style: normal;
`
const StyleFormContent = styled.div`
/* padding : top | right | bottom | left */
    margin: 10px 0px 10px 0px;
`
const StyleSidebar = styled.div`
    width: 258px;
    height: 1300px;
    /* bg/2 */
    background: #FFFFFF;
    /* Navigation Menu Bar */
    box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
    ul{
        list-style: none;
        text-align: center;
        li {
            display: flex;
            margin: 20px 20px 0 0;
            color: black;
            text-align: left;
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            flex: none;
            order: 1;
            flex-grow: 1;
            a{
                text-align: center;
                margin-right: 10px;
            }
        }
    }
`
const StyleContentProduct = styled.div`
    margin-left: 10px;
    font-family: 'Gilroy';
    font-style: normal;
    h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
    }
    div {
        display: flex;
        place-items: center;
        p {
            margin-left: 10px;
        }
    }
    div {
        display: flex;
        place-items: center;
        span {
            margin-left: 10px;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            color: #1DAC0E;
        }
    }
    h1{
       padding-top: 16;
    }
    

`
const HomeContent = (props: Props) => {

    return (
        <>
            <Content style={contentStyle}>
                <Row>
                    <Col span={18} push={6}>
                        <StyleFormContent>
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <StyleContent>
                                        <Image src={Product1Image} alt="" />
                                        <StyleContentProduct>
                                            <h3>
                                                Peppo restaurant
                                            </h3>
                                            <div>
                                                <Image src={AddressImage} alt="" />
                                                <p>12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)</p>
                                            </div>
                                            <div>
                                                <Image src={StatusStoreImage} alt="" />
                                                <span>Đang mở cửa</span>
                                            </div>
                                            <h1 className='item'>
                                                <Image src={TimeImage} alt="" />
                                                <Image src={TimeStartImage} alt="" />
                                                <Image src={TimeEndImage} alt="" />
                                            </h1>
                                            <div>
                                                <Image src={DeliveryImage} alt="" width={101} height={60} />
                                                <Image src={BookingImage} alt="" />
                                            </div>
                                        </StyleContentProduct>
                                    </StyleContent>
                                </Col>
                                <Col span={8}><StyleContent>
                                    <Image src={Product2Image} alt="" /></StyleContent></Col>
                                <Col span={8}><StyleContent>
                                    <Image src={Product3Image} alt="" /></StyleContent></Col>
                            </Row>
                        </StyleFormContent>
                        <StyleFormContent>
                            <Row gutter={[16, 16]}>
                                <Col span={8}><StyleContent>1</StyleContent></Col>
                                <Col span={8}><StyleContent>2</StyleContent></Col>
                                <Col span={8}><StyleContent>3</StyleContent></Col>
                            </Row>
                        </StyleFormContent>
                        <StyleFormContent>
                            <Row gutter={[16, 16]}>
                                <Col span={8}><StyleContent>1</StyleContent></Col>
                                <Col span={8}><StyleContent>2</StyleContent></Col>
                                <Col span={8}><StyleContent>3</StyleContent></Col>
                            </Row>
                        </StyleFormContent>
                    </Col>
                    <Col span={6} pull={18}>
                        <StyleSidebar>
                            <ul>
                                <li><a href=""> <Image src={AllProductImage} alt="" /></a>
                                    All
                                </li>
                                <li><a href=""><Image src={FastFoodImage} alt="" /></a>
                                    Fast food
                                </li>
                                <li><a href=""><Image src={TakeAwayImage} alt="" /></a>
                                    Take-away
                                </li>
                                <li><a href=""><Image src={ChineseFoodImage} alt="" /></a>
                                    Chinese food
                                </li>
                                <li><a href=""><Image src={JapaneseFoodImage} alt="" /></a>
                                    Japanese food
                                </li>
                                <li><a href=""><Image src={VoucherImage} alt="" /></a>
                                    Voucher
                                </li>
                                <li><a href=""><Image src={VegetarianImage} alt="" /></a>
                                    Vegetarian
                                </li>
                                <li><a href=""><Image src={CoffeeImage} alt="" /></a>
                                    Coffee
                                </li>
                                <li><a href=""><Image src={PizzaImage} alt="" /></a>
                                    Pizza
                                </li>
                                <li><a href=""><Image src={GiftImage} alt="" /></a>
                                    Gift
                                </li>
                                <li><a href=""><Image src={SweetImage} alt="" /></a>
                                    Sweet
                                </li>
                                <li><a href=""><Image src={MilkImage} alt="" /></a>
                                    Milk
                                </li>
                                <li><a href=""><Image src={FreeshipImage} alt="" /></a>
                                    Freeship
                                </li>
                            </ul >
                        </StyleSidebar >
                    </Col >
                </Row >
            </Content >
        </>
    )
}

export default HomeContent