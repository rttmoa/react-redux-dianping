import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData, postComment } from '../../../fetch/user/orderlist'

import OrderListComponent from '../../../components/OrderList'

import './style.less'

// 用户主页 -> 您的订单
class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        // console.log(!!this.state.data)
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                    : <div>{/* loading */}</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取订单数据
        const { UserName } = this.props
        UserName ? this.loadOrderList(UserName) : null 
    }
    // 获取列表数据
    loadOrderList(username) {
        const result = getOrderListData(username)  // Promise<Response>
        result.then(res => {
            return res.json()
        }).then(json => {
            // console.log('获取列表数据', json) // {id: 1665540613216, img: '0627.png', title: '汉堡大王', count: 3, price: '167', …} 
            // 获取数据
            this.setState({ data: json })
        }).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
    }
    // 提交评价
    submitComment(id , value, star, callback) {
        // console.log('OrderList-callback', callback) // this.setState({ commentState: 2});
        const result = postComment(id, value, star)
        result.then(res => {
            return res.json()
        }).then(json => {
            if (json.errno === 0) {
                // 已经评价，修改状态
                callback()
            }
        })
    }
}

export default OrderList