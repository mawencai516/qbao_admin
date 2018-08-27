import React from 'react'
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Tabs } from 'antd';
import '../../assets/index.less'
import AnalysisList from './analysisList'
import AnalysisDetail from './analysisDetail'
const TabPane = Tabs.TabPane;

export default class userList extends React.Component{
    render(){
        return(
            <div>
                <BreadcrumbCustom first="数据分析" second="用户分析"/>
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="用户概览" key="1">
                            <AnalysisList/>
                        </TabPane>
                        <TabPane tab="新增用户详情" key="2">
                            <AnalysisDetail/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}