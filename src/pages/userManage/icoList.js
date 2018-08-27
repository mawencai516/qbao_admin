import React from 'react'
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Table,Form, Select,Button,Card,Input} from 'antd';
const FormItem = Form.Item;
const columns = [
    { title: 'ID', width: 120, dataIndex: 'id', key: 'id', fixed: 'left' },
    { title: '用户名', dataIndex: 'accountName', key: 'accountName'},
    { title: '邮箱', dataIndex: 'email', key: 'email' },
    { title: 'ICO地址', dataIndex: 'address', key: 'address' },
    { title: '激活状态', dataIndex: 'active', key: 'active' },
    { title: '活动状态', dataIndex: 'status', key: 'status' },

    {
        title: '问卷调查详情',
        key: 'operation',
        fixed: 'right',
        width: 140,
        render: () => <a href="javascript:;">action</a>,
    },
];

const data = [{
    id: '1',
    accountName: 'CBC',
    email: '412153636@qq.com',
    address: '1wdwdwed',
    active:'未激活',
    status:'未参加活动'
}, {
    id: '2',
    accountName: '啦啦啦',
    email: '412153636@qq.com',
    address: '1wdwdwed',
    active:'未激活',
    status:'未参加活动'
}];
export default class userList extends React.Component{
    render(){
        return(
            <div>
                <BreadcrumbCustom first="用户管理" second="ICO用户"/>
                <div>
                    <Card style={{marginBottom:10}}>
                        <FilterForm />
                    </Card>
                    <Table
                        style={{background:'#fff',padding:'20px'}}
                        columns={columns}
                        dataSource={data}
                        scroll={{ x: 1500 }}
                    />
                </div>
            </div>
        )
    }
}
class FilterForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem>
                    {
                        getFieldDecorator('city_id')(
                            <Input size="small" placeholder="用户名" style={{ width: 100 }}/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('mode')(
                            <Input size="small" placeholder="邮箱" style={{ width: 100 }}/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                size="small"
                                style={{ width: 80 }}
                            >
                                <Option value="">全部激活状态</Option>
                                <Option value="1">未激活</Option>
                                <Option value="2">已激活</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                size="small"
                                style={{ width: 100 }}
                            >
                                <Option value="">全部审核状态</Option>
                                <Option value="1">未填写问卷</Option>
                                <Option value="2">审核中</Option>
                                <Option value="2">审核成功</Option>
                                <Option value="2">审核失败</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}} size="small">查询</Button>
                    <Button size="small">重置</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);