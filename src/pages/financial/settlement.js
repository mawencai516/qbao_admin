import React from 'react'
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Tabs } from 'antd';
import '../../assets/index.less'
import OffSettle from './offSettle'
import OnSettle from './onSettle'
const TabPane = Tabs.TabPane;


export default class settlement extends React.Component{
    state={
        key:'线下商户结算'
    }
    handleCallback=(key)=>{
        this.setState({
            key:key
        })
    }
    render(){
        return(
            <div>
                <BreadcrumbCustom first="财务管理" second="账务结算" third={this.state.key}/>
                <div className="card-container">
                    <Tabs type="card" onChange={this.handleCallback}>
                        <TabPane tab="线下商户结算" key="线下商户结算">
                            <OffSettle/>
                        </TabPane>
                        <TabPane tab="线上商户结算" key="线上商户结算">
                            <OnSettle/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}