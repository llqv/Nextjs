import { Breadcrumb, Layout, theme } from 'antd';
import DemoCard from './admindashboard/DemoCard';
import DemoChart from './admindashboard/DemoChart';
import DemoColumn from './admindashboard/DemoColumn';
const { Header, Content, Footer, Sider } = Layout;
import DemoLine from './admindashboard/DemoLine'
import DemoRingProgress from './admindashboard/DemoRingProgress';
import DemoRingUnprogress from './admindashboard/DemoRingUnprogress';
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
                    <div className="dashboard">
                        <div className="item-1 item"><DemoCard /></div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ margin: 65 }} className="item-2 item"><DemoLine /></div>
                            <div style={{ margin: 65 }} className="item-2 item"><DemoChart /></div>
                            <div style={{ margin: 65 }} className="item-2 item"><DemoColumn /></div>
                        </div>
                        <div style={{ display: 'flex', margin: 30 }}>
                            <div style={{ margin: 50 }} className="item-3 item"><DemoRingProgress /></div>
                            <div style={{ margin: 50 }} className="item-3 item"><DemoRingUnprogress /></div>
                            <div style={{ margin: 50 }} className="item-3 item"><DemoRingProgress /></div>
                            <div style={{ margin: 50 }} className="item-3 item"><DemoRingUnprogress /></div>
                        </div>
                    </div>
                    <div style={{ padding: 14, float: 'right' }}>
                    </div>
                </div>
            </Content>
        </>
    )
}

export default AdminDashboard