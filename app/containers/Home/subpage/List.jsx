import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'

import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

// import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    render() {
        return (
            <div>
                {/* <h2 className="home-list-title">猜你喜欢</h2> */}
                <h2 style={{fontSize: '16px', color: '#666', margin: '10px 15px'}}>猜你喜欢</h2>
                {
                    // 渲染数据处理
                    this.state.data.length 
                    ? <ListCompoent data={this.state.data}/>
                    : <div>正在加载中...</div>
                }
                {
                    // 加载更多滚动处理....
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageData()
    }
    // 获取首页数据
    loadFirstPageData() {
        const cityName = this.props.cityName
        // console.log(cityName)
        const result = getListData(cityName, 0) // 请求地址： /api/homelist/%E5%A4%A9%E6%B4%A5/0
        this.resultHandle(result)// result回来的是Promise、所以需要.then()处理、 函数可复用、所以要封装使用
    }
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName
        const page = this.state.page
        const result = getListData(cityName, page)
        // console.log('同步1')
        this.resultHandle(result)
        // console.log(page)

        // console.log('同步3')
        // 增加 page 技术
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }
    // 处理数据
    resultHandle(result) {
        result.then(res => {
            // console.log(res)// 在这里可以看到状态码、是否成功、URL地址等返回的基本信息
            return res.json()
        }).then(json => {
            // console.log(json) // 返回的数据为数组和hasMore、 {distance, id, img, number, price, subTitle, title}
            const hasMore = json.hasMore
            const data = json.data

            this.setState({
                hasMore: hasMore,
                // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
                // 两种方法都可以ES6、ES7语法
                data: this.state.data.concat(data)
                // data: [...this.state.data, ...data]
            })
            // console.log('同步2')
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
            }
        })
    }
}

export default List