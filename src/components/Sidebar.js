import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import '../assets/css/sidebar.css'
import { FaExchangeAlt, FaTractor, FaHome } from 'react-icons/fa'
import Application from '../assets/img/application.svg'
import Inflatable from '../assets/img/inflatable.svg'

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props) => {
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed} className='side-menu' collapsedWidth='68px' width='332px'>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<FaHome />}>
                    Home
                </Menu.Item>
                <SubMenu key="sub1" icon={<FaExchangeAlt />} title="Trade/Exchange">
                    <Menu.Item key="2">Trade</Menu.Item>
                    <Menu.Item key="3">Liquidity</Menu.Item>
                </SubMenu>
                <Menu.Item key="4" icon={<FaTractor />}>
                    Farm
                </Menu.Item>
                <Menu.Item key="5" icon={<img src={Inflatable} />}>
                    Pool
                </Menu.Item>
                <SubMenu key="sub2" icon={<img src={Application} />} title="More">
                    <Menu.Item key="6">Moneydefi Website</Menu.Item>
                    <Menu.Item key="7">Poocoin Chart</Menu.Item>
                    <Menu.Item key="8">Token Contract Address</Menu.Item>
                    <Menu.Item key="9">Product</Menu.Item>
                    <Menu.Item key="10">Dex Tool</Menu.Item>
                    <Menu.Item key="11">Audit</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider >
    )
}

export default Sidebar;