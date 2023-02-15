import { Breadcrumb, Layout, theme } from 'antd';
import DemoAreaMap from './admindashboard/DemoAreaMap';
const { Header, Content, Footer, Sider } = Layout;
import DemoLine from './admindashboard/DemoLine'
type Props = {}

const AdminDashboard = (props: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                    <DemoLine />
                    <DemoAreaMap />
                    <div style={{ padding: 14, float: 'right' }}>

                    </div>
                </div>
            </Content>
        </>
    )
}

export default AdminDashboard