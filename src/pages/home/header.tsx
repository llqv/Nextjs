import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Input, Layout, Row } from 'antd';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import LogoImg from '../public/Logo.png';
type Props = {}
import AvatarImg from '../public/Avatar.png';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000000',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#FFFFFF',
}
const StyleLogoImage = styled.div`
float: right;
    margin-top: 8px;
    width: 138px;
    height: 41;
`
const StyleContent = styled.div`
margin: 14;
`
const StyleAvatar = styled.div`
width: 32;
height: 32;

`
const StyleButtonAddress = styled.button`
width: 74px;
height: 34px;
background-color: #FFFFFF;
    border-radius:10px;
    border: 1px solid #FCDAB0;
`
const StyleButtonOrder = styled.button`
width: 74px;
height: 34px;
background-color: #FF881D;
    border-radius:10px;
    border: 1px solid #FCDAB0;
    font-family: 'Gilroy';
    color: white;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
`
const StyleButtonLanguage = styled.button`
width: 74px;
height: 34px;
background-color: #FFFFFF;
    border-radius:10px;
    border: 1px solid #FCDAB0;
`
const StyleLogin = styled.p`
padding-top:13px;
text-decoration: underline;
width: 63px;
height: 16px;
font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 16px;
text-align: center;
color: #007AFF;
flex: none;
order: 0;
flex-grow: 0;
`
const HomeHeader = (props: Props) => {
    return (
        <>
            <Header style={headerStyle}>
                <Row>
                    <Col span={4}>
                        <StyleLogoImage>
                            <Image src={LogoImg} alt="" />
                        </StyleLogoImage>
                    </Col>
                    <Col span={4}><StyleButtonAddress>Ha noi</StyleButtonAddress></Col>
                    <Col span={9}>
                        <Input
                            placeholder="Nhập từ khoá"
                            prefix={<SearchOutlined />} />
                    </Col>
                    <Col span={6}>
                        <StyleContent>
                            <Row gutter={[16, 16]}>
                                <Col span={12}><StyleButtonOrder>Order</StyleButtonOrder></Col>
                                <Col span={6}><StyleButtonLanguage>EN</StyleButtonLanguage></Col>
                                <Col span={6}>
                                    <StyleAvatar>
                                        <Image style={{ marginTop: 17 }} src={AvatarImg} alt="" />
                                    </StyleAvatar>
                                </Col>

                                <Col span={8}>
                                    {/* <StyleLogin>Đăng nhập</StyleLogin> */}
                                </Col>
                            </Row>
                        </StyleContent>
                    </Col>
                </Row>
            </Header>
        </>
    )
}

export default HomeHeader