import React from 'react'
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts'
import themeLight from './themeLight'

// 引入饼图和折线图
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

export default class Bar extends React.Component{
    componentWillMount(){
        echarts.registerTheme('Imooc',themeLight);
    }
    render(){
        return(
            <ReactEcharts
                option={this.props.getOption}
                theme="Imooc"
                notMerge={true}
                lazyUpdate={true}
                style={{ height: 500 }}/>
        )
    }
}