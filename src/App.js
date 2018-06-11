import React, {Component} from 'react';
import {Layout} from 'antd';
import './assets/style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';

const {Content} = Layout;

class App extends Component {
    render() {
        return (
            <Layout>
                <SiderCustom/>
                <Layout style={{flexDirection: 'column'}}>
                    <HeaderCustom/>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
