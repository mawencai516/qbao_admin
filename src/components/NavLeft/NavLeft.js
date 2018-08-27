import React from 'react'
import {Layout, Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom'
import logo from './../../assets/images/logo.png'
import './index.less'
import MenuConfig from './../../utils/menuConfig'

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
    state = {
        currentKey: ''
    }
    // 菜单点击
    // handleClick = ({item, key}) => {
    //     if (key == this.state.currentKey) {
    //         return false;
    //     }
    //     // 事件派发，自动调用reducer，通过reducer保存到store对象中
    //     const {dispatch} = this.props;
    //     dispatch(switchMenu(item.props.title));
    //
    //     this.setState({
    //         currentKey: key
    //     });
    // };

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key}
                             title={
                                 <span>
                                    {item.icon && <Icon type={item.icon}/>}
                                     <span className="nav-text">{item.title}</span>
                                 </span>
                             }
                    >
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                {item.icon && <Icon type={item.icon}/>}
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render() {
        return (
            <Sider trigger={null}
                   breakpoint="lg"
                   collapsed={this.props.collapsed}
                   style={{overflowY: 'auto'}}>
                <div className="logo">
                    <img src={logo} alt="" style={{display: this.props.collapsed ? 'none' : 'block'}}/>
                </div>
                <Menu theme="dark" mode="inline" onClick={this.handleClick}>
                    {this.state.menuTreeNode}
                </Menu>
            </Sider>

        )
    }
}

export default NavLeft