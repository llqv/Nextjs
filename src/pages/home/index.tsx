import { Layout } from 'antd';
import HomeBanner from './banner';
import HomeContent from './content';
import HomeFooter from './footer';
import HomeHeader from './header';
import HomeSidebar from './sidebar';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

const Home = (props: Props) => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <Layout style={{ backgroundColor: 'white', maxWidth:'150rem', margin:'auto'}}>
                    <HomeHeader />
                    <HomeBanner />
                    <div style={{display:'flex'}}>
                    <HomeSidebar/>
                    <HomeContent />
                    </div>
                    <HomeFooter />
                </Layout>
            </div>
        </>
    )
}

export default Home