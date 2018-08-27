import React from 'react'
import BreadcrumbCustom from "../../components/Breadcrumb";
import Bar from "../../components/echarts/pie";
import FeedbackList from './feedbackList.js'
export default class feedback extends React.Component{
    getOption() {
        let option = {
            title: {
                text: '反馈问题分布',
                x : 'left'
            },
            legend : {
                orient: 'vertical',
                left: 80,
                top: 50,
                bottom: 20,
                data: ['功能建议','bug上报','联系业务']
            },
            tooltip: {
                trigger : 'item',
                formatter : "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name : '数据',
                    type : 'pie',
                    radius : '55%',
                    center : [
                        '50%', '60%'
                    ],
                    data:[
                        {
                            value:1000,
                            name:'功能建议'
                        },
                        {
                            value: 1000,
                            name: 'bug上报'
                        },
                        {
                            value: 2000,
                            name: '联系业务'
                        }
                    ],
                    itemStyle : {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        return option;
    }
    render(){
        return(
            <div>
                <BreadcrumbCustom first="帮助中心" second="反馈列表"/>
                <div style={{background:'#fff',padding:'20px',marginBottom:'10px'}}>
                   <Bar getOption={this.getOption()} />
                </div>
                <FeedbackList />
            </div>
        )
    }
}