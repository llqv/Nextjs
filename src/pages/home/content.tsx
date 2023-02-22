import { Col, Layout, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;
import Image from 'next/image';
import AllProductImage from '../public/all.png'
const contentStyle: React.CSSProperties = {
    marginTop: 4,
    marginLeft: 100,
    marginRight: 100,
    textAlign: 'center',
    minHeight: 120,
    height: 1700,
    lineHeight: '120px',
    color: '#fff',
};
const StyleContent = styled.div`
margin-left:10px;
margin-right:5px;
padding-top: 5px;
    background-color: green;
    color: white;
`
const StyleFormContent = styled.div`
/* padding : top | right | bottom | left */
    padding: 10px 0px 10px 0px;
`
const StyleSidebar = styled.div`
    position: absolute;
    width: 258px;
    height: 1700px;


    /* bg/2 */

    background: #FFFFFF;
    /* Navigation Menu Bar */

    box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
    ul{
        list-style: none;
        li {
           margin: 40px 20px 0 0;
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
        }
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
                                <li>
                                    <Image src={AllProductImage} alt />All
                                </li>
                                <li><a href=""></a><Image src={AllProductImage} alt />Fast food</li>
                                <li><a href=""></a>Take-away</li>
                                <li><a href=""></a>Chinese food</li>
                                <li><a href=""></a>Japanese food</li>
                                <li><a href=""></a>Voucher</li>
                                <li><a href=""></a>Vegetarian</li>
                                <li><a href=""></a>Coffee</li>
                                <li><a href=""></a>Pizza</li>
                                <li><a href=""></a>Gift</li>
                                <li><a href=""></a>Sweet</li>
                                <li><a href=""></a>Milk</li>
                                <li><a href=""></a>Freeship</li>
                            </ul>
                        </StyleSidebar>
                    </Col>
                </Row>
            </Content>
        </>
    )
}

export default HomeContent