import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../../components/Star'

import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const data = this.props.data
        // console.log('数据详情子组件数据', data)
        return (
            <div id="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="info-content">
                        <h1>{data.title}</h1>
                        <div className="star-container">
                            {/* 引用 Star 组件 - 处理满意度问题 */}
                            <Star star={data.star}/>
                            <span className="price">￥{data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                {/* 设置 innerHTML - 转义HTML结构 - XSS攻击 */}
                <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
            </div>
        )
    }
}

export default DetailInfo