import { Breadcrumb, Layout, theme } from 'antd';
// import DemoCard from './admindashboard/DemoCard';
// import DemoChart from './admindashboard/DemoChart';
// import DemoColumn from './admindashboard/DemoColumn';
const { Header, Content, Footer, Sider } = Layout;
// import DemoLine from './admindashboard/DemoLine'
// import DemoRingProgress from './admindashboard/DemoRingProgress';
// import DemoRingUnprogress from './admindashboard/DemoRingUnprogress';
import { Col, Row } from 'antd';
type Props = {}

const AdminDashboard = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <h1>Hello World</h1>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                    <Row>
                        {/* <Col span={24}><DemoCard /></Col> */}
                    </Row>
                    <Row className='item'>
                        {/* <Col className='item1' span={6}><DemoLine /></Col>
                        <Col className='item1' span={6}><DemoChart /></Col> */}
                        {/* <Col className='item1' span={6}><DemoColumn /></Col> */}
                    </Row>
                    <Row className='item'>
                        {/* <Col span={6}><DemoRingProgress /></Col>
                        <Col span={6}><DemoRingUnprogress /></Col>
                        <Col span={6}><DemoRingProgress /></Col>
                        <Col span={6}><DemoRingUnprogress /></Col> */}
                    </Row>
                    <div style={{ padding: 14, float: 'right' }}>
                    </div>
                </div>
            </Content>
        </>
    )
}

export default AdminDashboard