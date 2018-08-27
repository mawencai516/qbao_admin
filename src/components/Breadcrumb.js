import React from 'react';
import { NavLink } from 'react-router-dom';
import {Breadcrumb} from 'antd'
import './../assets/index.less'
export default class BreadcrumbCustom extends React.Component{
    render(){
        const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
        const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
        const third = <Breadcrumb.Item>{this.props.third}</Breadcrumb.Item> || '';
        return(
            <Breadcrumb>
                <Breadcrumb.Item><NavLink to={'/home'}>首页</NavLink></Breadcrumb.Item>
                {first}
                {second}
                {third}
            </Breadcrumb>
        )
    }
}