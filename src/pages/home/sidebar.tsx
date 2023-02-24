import { Col } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';
import AllProductImage from '../public/all.png';
import ChineseFoodImage from '../public/chinese.png';
import CoffeeImage from '../public/coffee.png';
import FastFoodImage from '../public/fastfood.png';
import FreeshipImage from '../public/freeship.png';
import GiftImage from '../public/gift.png';
import JapaneseFoodImage from '../public/japanese.png';
import MilkImage from '../public/milk.png';
import TakeAwayImage from '../public/package.png';
import PizzaImage from '../public/pizza.png';
import SweetImage from '../public/sweet.png';
import VegetarianImage from '../public/vergetarian2.png';
import VoucherImage from '../public/voucher.png';

const StyleSidebar = styled.div`
margin-left: 40px;
    padding-top: 10px;
    padding-left: 10px;
    width: 100%;
    max-width: 258px;
    height: 1700px;
    /* bg/2 */
    background: #FFFFFF;
    /* Navigation Menu Bar */
    box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
        @media screen and (max-width: 990px) {
    display: none;
  }
    ul{
        list-style: none;
        text-align: center;
        li {
            display: flex;
            padding-bottom: 20px;
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
const HomeSidebar = () => {
  return (
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
  )
}

export default HomeSidebar