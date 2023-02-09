import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'


/***--- 
 * 用户页面
 * 一、渲染评价的状态(未评价、已评价、评价中、提交、取消)、
 * 二、控制显示与隐藏及颜色(未评价、已评价、评价中、提交、取消的点击事件处理、使用函数方式控制类名)、
 * 三、评价几颗星处理Star(点击的星星是第几颗、点击的星星颜色变成红色、回调函数的处理和封装和调用的方法)、
 * 四、评价的回调函数及星星的回调函数(如何封装和处理和方法的使用)
 */
class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        return (
            <div>
                {/* backRouter: '/' */}
                <Header title="用户主页" backRouter="/"/>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }
    componentDidMount() {
        // 如果未登录，跳转到登录页面
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
    }
} 
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
} 
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect( mapStateToProps,mapDispatchToProps )(User)