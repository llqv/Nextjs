import { Layout } from 'antd';
import HomeBanner from './banner';
import HomeContent from './content';
import HomeFooter from './footer';
import HomeHeader from './header';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;

const Home = (props: Props) => {
    return (
        <>
            <Layout style={{ backgroundColor: 'white' }}>
                <HomeHeader />
                <HomeBanner />
                <HomeContent />
                <HomeFooter />
            </Layout>
        </>
    )
}

export default Home