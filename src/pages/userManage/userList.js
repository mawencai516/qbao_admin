import React from 'react'
import BreadcrumbCustom from "../../components/Breadcrumb";
import BaseForm from '../../components/BaseForm'
import {Table, Card} from 'antd';

const columns = [
    {title: '序号', width: 120, dataIndex: 'key', key: 'key', fixed: 'left'},
    {title: '用户ID', dataIndex: 'accountNo', key: 'accountNo'},
    {title: '等级', dataIndex: 'level', key: 'level'},
    {title: '用户名', dataIndex: 'accountName', key: 'accountName'},
    {title: '手机号码', dataIndex: 'phone', key: 'phone'},
    {title: '邀请码', dataIndex: 'inviteCode', key: 'inviteCode'},
];

const data = [{
    key: '1',
    accountNo: '61187465',
    level: '0级',
    accountName: 'CBC',
    phone: '',
    inviteCode: ''
}, {
    key: '2',
    accountNo: 'John Brown',
    level: '1级',
    accountName: '123',
    inviteCode: ''
}];
export default class userList extends React.Component {
    formList = [
        {
            type: 'INPUT',
            field: 'accountId',
            placeholder: '钱包ID',
            width: 80,
        },
        {
            type: 'INPUT',
            placeholder: '用户名',
            field: 'userName',
            width: 80,
        },
        {
            type: 'INPUT',
            placeholder: '手机号码',
            field: 'phone',
            width: 80,
        },
        {
            type: 'SELECT',
            field: 'certified',
            initialValue: '1',
            width: 80,
            list: [{id: '0', name: '未认证'}, {id: '1', name: '已认证'}]
        },
        {
            type: 'SELECT',
            field: 'invitedDaily',
            initialValue: '0',
            placeholder: '全部可邀请用户量',
            width: 80,
            list: [{id: '0', name: ''}, {id: '1', name: '1-30位'}, {id: '2', name: '30位以上'}]
        },
        {
            type: 'SELECT',
            field: 'inviteQbe',
            initialValue: '0',
            placeholder: '全部可邀请奖励',
            width: 80,
            list: [{id: '0', name: ''}, {id: '1', name: '0-2000'}, {id: '2', name: '2000以上'}]
        },
        {
            type: 'SELECT',
            field: 'resource',
            initialValue: '0',
            placeholder: '全部来源',
            width: 80,
            list: [{id: '0', name: ''}, {id: '1', name: 'IOS'}, {id: '1', name: 'Android'}]
        },
        {
            type: 'SELECT',
            field: 'level',
            initialValue: '0',
            placeholder: '全部等级',
            width: 80,
            list: [{id: '0', name: '0级'}, {id: '1', name: '1级'}]
        },
        {
            type: 'SELECT',
            field: 'authority',
            initialValue: '0',
            placeholder: '全部内测',
            width: 80,
            list: [{id: '0', name: '全部内测'}, {id: '1', name: '有内测权限'}, {id: '2', name: '无内测权限'}]
        }
    ]
    // handleFilter = (params)=>{
    //     this.params = params;
    //     //this.requestList();
    // }
    render() {
        return (
            <div>
                <BreadcrumbCustom first="用户管理" second="用户列表"/>
                <Card style={{marginBottom: 10}}>
                    <BaseForm formList={this.formList}
                        // filterSubmit={this.handleFilter}
                    />
                </Card>
                <div className="content-wrap">
                    <Table
                        style={{background: '#fff', padding: '20px'}}
                        columns={columns}
                        dataSource={data}
                        scroll={{x: 1500}}
                    />
                </div>
            </div>
        )
    }
}