import React from 'react'
import BreadcrumbCustom from "../../components/Breadcrumb";
import CardCustom from '../../components/Card'

export default class Home extends React.Component{
    state={
        marginBottom:'10px'
    }
    render(){
        return(
            <div>
               <BreadcrumbCustom/>
                <CardCustom title='提币资金池余额（剩余占比）' marginBottom={this.state.marginBottom}/>
                <CardCustom title='用户概况' marginBottom={this.state.marginBottom}/>
                <CardCustom title='Qbao Energy概况' marginBottom={this.state.marginBottom}/>
                <div>
                    <CardCustom title='交易概况' />
                </div>
            </div>
        )
    }
}