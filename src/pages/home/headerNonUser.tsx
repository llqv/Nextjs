import { BranchesOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Col, Dropdown, Input, Layout, MenuProps, message, Row, Select, Space } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';
import AvatarImg from '../Avatar.png';
import LogoImg from '../Logo.png';
import '../../../src/assets/css/styles.scss'
import { authApi } from '@/api/auth-api';
import HomeHeader from './header';
import Link from 'next/link'
type Props = {}
import { getCookies, hasCookie } from 'cookies-next';
import cookies from 'next-cookies';
import cookie from 'js-cookie'
import nextCookie from 'next-cookies';
import Cookies from 'js-cookie'
import { break_points } from '@/utils/styled';
const { Header, Footer, Sider, Content } = Layout;



const HeaderStyleDesktop = styled.div`
    position: 'relative';
    text-align: center;
    color: black;
    padding-inline: 50;
    line-height: 6.4rem;
    background-color:#FFFFFF;
    ${break_points.phone_only}{ 
        display: none;
    }
    .avatar {
        margin-top: 1.7rem;
    }
    .input-type{
        border: 0.1rem solid #FCDAB0 ;
        
    }
    .logo-img{
        margin-top: 1.4rem;
    }
    .select-options-region {
        width: 10rem;
    }
    .select-options-language{
        width: 8rem;
    }
`

const HeaderStyle = styled.div`
    position: 'relative';
    text-align: center;
    color: black;
    padding-inline: 50;
    line-height: 6.4rem;
    background-color:#FFFFFF;
    ${break_points.desktop_only}{ 
        display: none;
    }
`

const StyleButtonAddress = styled.button`
    position: absolute;
    top: 2.1rem;
    right: 0.5rem;
    width: 7.4rem;
    height: 3.4rem;
    background-color: #FFFFFF;
    border-radius:1rem;
    border: 1px solid #FCDAB0;
`
const StyleButtonOrder = styled.button`
    width: 7.4rem;
    height: 3.4rem;
    background-color: #FF881D;
    border-radius:1rem;
    border: 1px solid #FCDAB0;
    font-family: 'Gilroy';
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
`
const StyleButtonLanguage = styled.button`
    width: 7.4rem;
    height: 3.4rem;
    background-color: #FFFFFF;
    border-radius:1rem;
    border: 1px solid #FCDAB0;
`
const StyleLogin = styled.p`
    padding-top:1.3rem;
    text-decoration: underline;
    width: 6.3rem;
    height: 1.6rem;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.6rem;
    text-align: center;
    color: #007AFF;
    flex: none;
    order: 0;
    flex-grow: 0;
`


const HomeHeaderNonUser = (props: Props) => {
        console.log(props);
        return (
            <>
                <HeaderStyleDesktop>
                    <Row >
                        <Col span={4}>
                            <Image className='logo-img' src={LogoImg} alt="" />
                        </Col>
                        <Col span={4}>
                            <Select className='select-options-region'
                                defaultValue="HaNoi"
                                options={[
                                    { value: 'HCM', label: 'HCM' },
                                    { value: 'HCM', label: 'HCM' },
                                    { value: 'HCM', label: 'HCM' },
                                    { value: 'HCM', label: 'HCM', disabled: true },
                                ]}
                            />
                        </Col>
                        <Col span={9}>
                            <Input className='input-type'
                                placeholder="Nhập từ khoá"
                                prefix={<SearchOutlined />} />
                        </Col>
                        <Col span={6}>
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <StyleButtonOrder>Order</StyleButtonOrder>
                                </Col>
                                <Col span={6}>
                                    <Select className='select-options-language'
                                        defaultValue="EN"
                                        options={[
                                            { value: 'EN', label: 'EN' },
                                            { value: 'HCM', label: 'HCM' },
                                            { value: 'HCM', label: 'HCM' },
                                            { value: 'HCM', label: 'HCM', disabled: true },
                                        ]}
                                    />
                                </Col>
                                <Col span={6}>
                                    <Link href="/auths/login">Đăng nhập</Link>
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

export default HomeHeaderNonUser