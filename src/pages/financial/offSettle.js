import React from 'react'
import {Table, Form, DatePicker, Button, Card, Input} from 'antd';
const FormItem = Form.Item;
const columns = [
    {title: '序号', width: 120, dataIndex: 'key', key: 'key', fixed: 'left'},
    {title: '账户ID', dataIndex: 'accountId', key: 'accountId'},
    {title: '客户（产品）ID', dataIndex: 'customerId', key: 'customerId'},
    {title: '客户（产品）名', dataIndex: 'customerName', key: 'customerName'},
    {title: '账户类型', dataIndex: 'status', key: 'status'},
    {title: '币种', dataIndex: 'unit', key: 'unit'},
    {title: '余额', dataIndex: 'amount', key: 'amount'},
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="javascript:;">action</a>,
    },
];

const data = [{
    key: '1',
    accountId: '61187465',
    customerId: '0级',
    customerName: 'CBC',
    status: '',
    unit: '',
    amount: ''
}, {
    key: '2',
    accountId: '61187465',
    customerId: '0级',
    customerName: 'CBC',
    status: '',
    unit: '',
    amount: ''
}];
export default class userList extends React.Component {
    render() {
        return (
            <div className="offSettle">
                <Card style={{marginBottom: 10}}>
                    <FilterForm/>
                </Card>
                <Table
                    style={{background: '#fff', padding: '20px'}}
                    columns={columns}
                    dataSource={data}
                    scroll={{x: 1500}}
                />
            </div>
        )
    }
}

class FilterForm extends React.Component {

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form layout="inline">
                <FormItem>
                    {
                        getFieldDecorator('city_id')(
                            <Input size="small" placeholder="商户编号" style={{width: 100}}/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('mode')(
                            <Input size="small" placeholder="商户名称" style={{width: 100}}/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('op_mode')(
                            <DatePicker size="small"/>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin: '0 20px'}} size="small">查询</Button>
                    <Button size="small">重置</Button>
                </FormItem>
            </Form>
        );
    }
}

FilterForm = Form.create({})(FilterForm);