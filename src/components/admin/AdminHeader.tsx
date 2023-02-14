import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Input, Space } from 'antd';
import { BellTwoTone, SettingOutlined, SettingTwoTone } from '@ant-design/icons';
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
type Props = {}
const onSearch = (value: string) => console.log(value);
const AdminHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <div className='navbar'>
          <ul className='menu'>
            <li>
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                style={{}}
              />
            </li>
            <li>
              <BellTwoTone style={{ fontSize: '25px' }} />
            </li>
            <li>
              <SettingTwoTone style={{ fontSize: '25px' }} />
            </li>
          </ul>
        </div>
      </Header>
    </>
  )
}

export default AdminHeader