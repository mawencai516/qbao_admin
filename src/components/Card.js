import React from 'react'
import { Card ,Row ,Col } from 'antd';
import './../assets/index.less'
export default class CardCustom extends React.Component{
    render(){
        return(
            <Card title={this.props.title} bordered={false} style={{marginBottom:this.props.marginBottom}}>
                <Row className="list">
                    <Col xs={{ span: 5}} lg={{ span: 6 }} className="Col">
                        <div> <span>3</span>（10%）</div>
                        <div>ETH</div>
                    </Col>
                    <Col xs={{ span: 5}} lg={{ span: 6 }} className="Col">
                        <div> <span>3</span>（10%）</div>
                        <div>ETH</div>
                    </Col>
                    <Col xs={{ span: 5}} lg={{ span: 6 }} className="Col">
                        <div> <span>3</span>（10%）</div>
                        <div>ETH</div>
                    </Col>
                    <Col xs={{ span: 5}} lg={{ span: 6 }} className="Col">
                        <div> <span>3</span>（10%）</div>
                        <div>ETH</div>
                    </Col>
                </Row>
            </Card>
        )
    }
}