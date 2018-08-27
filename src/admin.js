import React from 'react';
import {Layout} from 'antd';
import './assets/index.less';
import NavLeft from './components/NavLeft/NavLeft'
import Header from './components/Header'
const {Content} = Layout;

export default class Admin extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout>
                <NavLeft collapsed={this.state.collapsed} />
                <Layout style={{flexDirection: 'column'}}>
                    <Header toggle={this.toggle} collapsed={this.state.collapsed} />
                    <Content style={{ overflow: 'initial' }} className="content">  {this.props.children}</Content>
                </Layout>
            </Layout>
        )
    }
}
