import { Col, Layout, Row } from 'antd';
type Props = {}
import styled from 'styled-components';
import Image from 'next/image';
const { Header, Footer, Sider, Content } = Layout;
import IosImage from '../public/Group 62.png'
import AndroidImage from '../public/Group 63.png'
import LogoImg from '../public/LogoFooter.png';
import SocialNetWorkImage from '../public/Group 61.png'
import SubcribeImage from '../public/image 2.png'

const footerStyle: React.CSSProperties = {
    paddingTop: 110,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'white'
};
const StyleContentFooter = styled.div`
   font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color :black;

`
const StyleItemContent = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #2E92FF;
    ul{
    list-style: none;
}
`
const StyleItemContentCompany = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    ul{
        list-style: none;
    }
/* identical to box height, or 157% */
    align-items: center;
    text-align: right;

    color: #000000;
`
const StyleLogoFooter = styled.div`
    width: max-content;
    padding-top: 50px;
    margin: auto;
    color: black;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 12px;

    align-items: center;
    letter-spacing: -0.01em;
    color: #828282;
`
const StyleOperatingSystem = styled.div`
    padding-top: 25px;
`
const HomeFooter = (props: Props) => {

    return (
        <>
            <Footer style={footerStyle}>
                <Row>
                    <Col span={4}>
                        <StyleContentFooter>Công ty</StyleContentFooter>
                        <StyleItemContent>
                            <ul>
                                <li>Giới thiệu và liên hệ</li>
                                <li>Trung tâm trợ giúp</li>
                                <li>Quy chế</li>
                                <li>Điều khoản sử dụng</li>
                                <li>Bảo mật thông tin</li>
                                <li>Giải quyết khiếu nại</li>
                                <li>Hợp tác nhân viên giao nhận</li>
                                <li>Đăng ký quán</li>
                                <li>Ứng dụng Capichi</li>
                            </ul>
                        </StyleItemContent>
                    </Col>
                    <Col span={4}>
                        <StyleContentFooter>App Capichi</StyleContentFooter>
                        <StyleOperatingSystem>
                            <Image src={IosImage} alt="" />
                        </StyleOperatingSystem>
                        <StyleOperatingSystem>
                            <Image src={AndroidImage} alt="" />
                        </StyleOperatingSystem>

                    </Col>
                    <Col span={10}>
                        <StyleLogoFooter>
                            <Image src={LogoImg} alt="" />
                            <p>@ Capichi 2021 - A Food Delivery Corporation</p>
                            <Image src={SocialNetWorkImage} alt="" />
                        </StyleLogoFooter>
                    </Col>
                    <Col span={6}>
                        <StyleContentFooter>Địa chỉ công ty</StyleContentFooter>
                        <StyleItemContentCompany>
                            <ul>
                                <li>Công ty cổ phần Capichi</li>
                                <li>Tầng 4, toàn nhà VietinBank, số 1 Lê Thái Tông, phường Cầu Giấy, quận Cầu Giấy, Hà Nội</li>
                                <li>Giấy CN ĐKDN số: 02264651313, do sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 11/12/2020, sửa đổi lần thứ 21, ngày 01/02/2021</li>
                                <li>Số điện thoại: 19001522</li>
                                <li>Email: capichi@gmail.com</li>
                                <Image src={SubcribeImage} alt="" />
                            </ul>
                        </StyleItemContentCompany>
                    </Col>
                </Row>
            </Footer>
        </>
    )
}

export default HomeFooter