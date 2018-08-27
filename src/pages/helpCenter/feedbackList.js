import React from 'react'
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Table,Form, Select,Button,Card,Input} from 'antd';
const FormItem = Form.Item;
const columns = [
    { title: '序号', width: 120, dataIndex: 'key', fixed: 'left' },
    { title: '用户ID', dataIndex: 'accountNo'},
    { title: '等级', dataIndex: 'level',},
    { title: '用户名', dataIndex: 'accountName'},
    { title: '手机号码', dataIndex: 'phone', index: 'phone' },
    { title: '邀请码', dataIndex: 'inviteCode',},

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
    accountNo: '61187465',
    level: '0级',
    accountName: 'CBC',
    phone:'123',
    inviteCode:'123333'
}, {
    key: '2',
    accountNo: 'John Brown',
    level: '1级',
    accountName: '123',
    inviteCode:'12333'
}];
export default class FeedbackList extends React.Component{
    render(){
        return(
            <div>
                    <Card style={{marginBottom:10}} title="反馈列表">
                        <FilterForm />
                    </Card>
                    <Table
                        style={{background:'#fff',padding:'20px'}}
                        columns={columns}
                        dataSource={data}
                        scroll={{ x: 1500 }}
                    />
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
                            <Input size="small" placeholder="钱包ID" style={{ width: 100 }}/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('mode')(
                            <Input size="small" placeholder="用户名" style={{ width: 100 }}/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('mode')(
                            <Input size="small" placeholder="手机号码" />
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
                                <Option value="1">未认证</Option>
                                <Option value="2">已认证</Option>
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
                                <Option value="">全部可邀请用户量</Option>
                                <Option value="1">1-30位</Option>
                                <Option value="2">30位以上</Option>
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
                                <Option value="">全部可邀请奖励</Option>
                                <Option value="1">0-2000</Option>
                                <Option value="2">2000以上</Option>
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
                                <Option value="">全部来源</Option>
                                <Option value="1">IOS</Option>
                                <Option value="2">Android</Option>
                                <Option value="3">Web</Option>
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
                                <Option value="">全部等级</Option>
                                <Option value="1">0级</Option>
                                <Option value="2">1级</Option>
                                <Option value="3">2级</Option>
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
                                <Option value="">全部内测</Option>
                                <Option value="1">有内测权限</Option>
                                <Option value="2">无内测权限</Option>
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