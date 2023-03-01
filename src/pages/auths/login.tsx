import { authApi } from '@/api/auth-api'
import { Form, Input, Checkbox, Button, MenuProps, message } from 'antd';
import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';


const StyleLoginForm = styled.div`
  display: grid;
  margin: auto ;
  .form-login{
    margin: auto;
  }
  .content-form {
    /* H3 */

font-family: 'Gilroy';
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 38px;
/* identical to box height, or 136% */

text-align: center;

/* chinh/1 */

color: #FF881D;
  }
  
  .input-form {
    width: 30rem;
    height: 3rem;
    background: #FBFBFB;
/* text/1 */

border: 1px solid #E0E1E0;
border-radius: 10px;
  }
  .button-submit{
    width: 30rem;
    height: 3rem;
    background: #FF881D;
border-radius: 10px;
font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

text-align: center;

/* Text/white */

color: #FFFFFF;
  }
`

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`${key}`);
};

const LoginPage = () => {
  const router = useRouter()
  async function handleLoginClick() {
    try {
      await authApi.login({
        username: 'admin',
        password: '123123'
      })
      router.push('/home')
    } catch (error) {
      console.log('failed to login', error);

    }
  }
  // async function handleGetProfileClick() {
  //   try {
  //     await authApi.getProfile()
  //   } catch (error) {
  //     console.log('failed to getProfile', error);
  //   }
  // }
  // async function handleLogoutClick() {
  //   try {
  //     await authApi.logout()
  //   } catch (error) {
  //     console.log('failed to logOut', error);
  //   }
  // }
  return (
    <div>
      <StyleLoginForm>
        <h1 className='content-form'>Login Page</h1>
        <Form className='form-login'
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className='input-form' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className='input-form' />
          </Form.Item>

          <Form.Item>
            <Button className='button-submit' onClick={handleLoginClick}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </StyleLoginForm>
    </div>
  )
}
export default LoginPage