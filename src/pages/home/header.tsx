import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Layout, Row, Select } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';
import AvatarImg from '../public/Avatar.png';
import LogoImg from '../public/Logo.png';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

const HeaderStyleDesktop = styled.div`
    position: 'relative';
    text-align: center;
    color: black;
    padding-inline: 50;
    line-height: 64px;
    background-color:#FFFFFF;
    @media screen and (max-width: 1100px) { 
        display: none;
    }
`

const HeaderStyle = styled.div`
    position: 'relative';
    text-align: center;
    color: black;
    padding-inline: 50;
    line-height: 64px;
    background-color:#FFFFFF;
    @media screen and (min-width: 1099px) { 
        display: none;
    }
`
const StyleContent = styled.div`
    margin: 14;
`

const StyleButtonAddress = styled.button`
position: absolute;
top: 21px;
right: 5px;
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
            <HeaderStyleDesktop>
                <Row >
                    <Col span={4}>
                        <Image src={LogoImg} alt="" />
                    </Col>
                    <Col span={4}>
                        <Select
                            defaultValue="HaNoi"
                            style={{ width: 120}}
                            options={[
                                { value: 'HCM', label: 'HCM' },
                                { value: 'HCM', label: 'HCM' },
                                { value: 'HCM', label: 'HCM' },
                                { value: 'HCM', label: 'HCM', disabled: true },
                            ]}
                        />
                    </Col>
                    <Col span={9}>
                        <Input
                            style={{border: '1px solid #FCDAB0'}}
                            placeholder="Nhập từ khoá"
                            prefix={<SearchOutlined />} />
                    </Col>
                    <Col span={6}>
                        <Row gutter={[16, 16]}>
                            <Col span={12}><StyleButtonOrder>Order</StyleButtonOrder></Col>
                            <Col span={6}>
                            <Select
                            defaultValue="EN"
                            style={{ width: 70}}
                            options={[
                                { value: 'EN', label: 'EN' },
                                { value: 'HCM', label: 'HCM' },
                                { value: 'HCM', label: 'HCM' },
                                { value: 'HCM', label: 'HCM', disabled: true },
                            ]}
                        />
                            </Col>
                            <Col span={6}>
                                <Image style={{ marginTop: 17 }} src={AvatarImg} alt="" />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </HeaderStyleDesktop>
            <HeaderStyle>
                <Row >
                    <Col>
                        <Row gutter={20} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src={AvatarImg} alt="" />
                            </Col>
                            <Col><StyleButtonLanguage>EN</StyleButtonLanguage></Col>
                        </Row>
                    </Col>
                    <Col flex={1} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={LogoImg} alt="" />
                    </Col>
                    <Col>
                        <StyleButtonOrder>Order</StyleButtonOrder>
                    </Col>
                    <Col span={24}>
                        <Input
                            style={{ height: '45px' }}
                            placeholder="Nhập từ khoá"
                            prefix={<SearchOutlined />} />
                        <StyleButtonAddress>Ha noi</StyleButtonAddress>
                    </Col>
                </Row>
            </HeaderStyle>
        </>
    )
}

export default HomeHeader