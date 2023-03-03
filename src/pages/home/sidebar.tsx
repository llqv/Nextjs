import { Col } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';
import AllProductImage from '../all.png';
import ChineseFoodImage from '../chinese.png';
import CoffeeImage from '../coffee.png';
import FastFoodImage from '../fastfood.png';
import FreeshipImage from '../freeship.png';
import GiftImage from '../gift.png';
import JapaneseFoodImage from '../japanese.png';
import MilkImage from '../milk.png';
import TakeAwayImage from '../package.png';
import PizzaImage from '../pizza.png';
import SweetImage from '../sweet.png';
import VegetarianImage from '../vergetarian2.png';
import VoucherImage from '../voucher.png';
import '../../../src/assets/css/styles.scss'

const StyleSidebar = styled.div`
    margin-left: 4rem;
    padding-top: 1rem;
    padding-left: 1rem;
    width: 100%;
    max-width: 25.8rem;
    height: 170rem;
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
            padding-bottom: 2rem;
            color: black;
            text-align: left;
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 2.4rem;
            color: #000000;
            flex: none;
            order: 1;
            flex-grow: 1;
            a{
                text-align: center;
                margin-right: 1rem;
            }
        }
    }
`
const StyleSidebarMobile = styled.div`
    padding-top: 0.6rem;
    width: 100%;
    background: #FFFFFF;
    overflow-x: auto;
    overflow: hidden;
/* /Cards Pressed button */
    @media screen and (min-width: 985px) {
    display: none;
  }
    ul{ 
        width: 100%;
        margin-left: 0rem;
        padding-top: 1rem;
        display: flex;
        list-style: none;
        text-align: center;
        box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
        li {
            margin-left: 3rem;
            padding-bottom: 2rem;
            color: black;
            text-align: left;
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 3rem;
            color: #000000;
            flex: none;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap-reverse;
            justify-content: space-between;
            align-items: baseline;
            align-content: space-around;
            text-align: center;
        }
    }
`
const HomeSidebar = () => {
    return (
        <>
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
            <StyleSidebarMobile>
                <ul className='sibar-content' id='sidebar-mobile'>
                    <li><Image className='menu-item' src={AllProductImage} alt="" />
                        All
                    </li>
                    <li><Image  className='menu-item' src={FastFoodImage} alt="" />
                        Fast food
                    </li>
                    <li><Image className='menu-item'  src={TakeAwayImage} alt="" />
                        Take-away
                    </li>
                    <li><Image  className='menu-item' src={ChineseFoodImage} alt="" />
                        Chinese food
                    </li>
                    <li><Image  className='menu-item' src={JapaneseFoodImage} alt="" />
                        Japanese food
                    </li>
                    <li><Image  className='menu-item' src={VoucherImage} alt="" />
                        Voucher
                    </li>
                    <li><Image  className='menu-item' src={VegetarianImage} alt="" />
                        Vegetarian
                    </li>
                    <li><Image  className='menu-item' src={CoffeeImage} alt="" />
                        Coffee
                    </li>
                    <li><Image  className='menu-item' src={PizzaImage} alt="" />
                        Pizza
                    </li>
                    <li><Image  className='menu-item' src={GiftImage} alt="" />
                        Gift
                    </li>
                    <li><Image  className='menu-item' src={SweetImage} alt="" />
                        Sweet
                    </li>
                    <li><Image  className='menu-item' src={MilkImage} alt="" />
                        Milk
                    </li>
                    <li><Image  className='menu-item' src={FreeshipImage} alt="" />
                        Freeship
                    </li>
                </ul >
            </StyleSidebarMobile>
        </>
    )
}

export default HomeSidebar