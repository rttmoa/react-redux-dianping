import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Buy from './subpage/buy'
import Comment from './subpage/Comment'

/**
 * 开发详情页-获取商户信息
 * 
 */
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取商户ID
        const id = this.props.params.id

        return (
            <div>
                <Header title="商户详情" type="share"/>
                <Info id={id}/>
                {/* 收藏和购买是用户登陆后才可以使用的组件 */}
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}
 
export default Detail