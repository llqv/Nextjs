import { Layout } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
type Props = {}

const AdminFooter: React.FC = () => {
  return (
    <>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </>
  )
}

export default AdminFooter