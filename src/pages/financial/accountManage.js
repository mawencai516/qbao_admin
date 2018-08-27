import React from 'react'
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Table,Form, Select,Button,Card,Input} from 'antd';
const FormItem = Form.Item;
const columns = [
    { title: '序号', width: 120, dataIndex: 'index', key: 'index', fixed: 'left' },
    { title: '账户ID', dataIndex: 'accountId', key: 'accountId'},
    { title: '客户（产品）ID', dataIndex: 'customerId', key: 'customerId' },
    { title: '客户（产品）名', dataIndex: 'customerName', key: 'customerName' },
    { title: '账户类型', dataIndex: 'status', key: 'status' },
    { title: '币种', dataIndex: 'unit', key: 'unit' },
    { title: '余额', dataIndex: 'amount', key: 'amount' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="javascript:;">action</a>,
    },
];

const data = [{
    key:'1',
    index: '1',
    accountId: '61187465',
    customerId: '0级',
    customerName: 'CBC',
    status:'',
    unit:'',
    amount:''
}, {
    key:'2',
    index: '2',
    accountId: '61187465',
    customerId: '0级',
    customerName: 'CBC',
    status:'',
    unit:'',
    amount:''
}];
export default class userList extends React.Component{
    render(){
        return(
            <div>
                <BreadcrumbCustom first="财务管理" second="账户管理"/>
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
                            <Input size="small" placeholder="账户ID" style={{ width: 100 }}/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('mode')(
                            <Input size="small" placeholder="客户（产品）名" style={{ width: 100 }}/>
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
                                <Option value="">全部账户类型</Option>
                                <Option value="1">个人账户</Option>
                                <Option value="2">内部账户</Option>
                                <Option value="3">商户账户</Option>
                                <Option value="4">产品账户</Option>
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
                                <Option value="">全部币种</Option>
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