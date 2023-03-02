import { Layout } from 'antd';
import { hasCookie } from 'cookies-next';
import { getToken } from 'next-auth/jwt';
import { Context } from 'react';
import HomeBanner from './banner';
import HomeContent from './content';
import HomeFooter from './footer';
import HomeHeader from './header';
import HomeHeaderNonUser from './headerNonUser';
import HomeSidebar from './sidebar';
import cookie from "cookie"

// import { cookies } from 'next/headers'
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

const Home = (props: any) => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <Layout style={{ backgroundColor: 'white', maxWidth: '150rem', margin: 'auto' }}>

                    {
                        props?.access_token ? <HomeHeader /> : <HomeHeaderNonUser />
                    }
                    <HomeBanner />
                    <div style={{ display: 'flex' }}>
                        <HomeSidebar />
                        <HomeContent />
                    </div>
                    <HomeFooter />
                </Layout>
            </div>
        </>
    )
}
export default Home
export async function getServerSideProps(context: any) {
    const req = context.req;
    try {
        const cookies = cookie.parse(req ? req.headers.cookie : '');
        return {
            props: { access_token: cookies.access_token || undefined },
        };
    } catch (error) {
        return {
            props: {},
        };
    }

}
