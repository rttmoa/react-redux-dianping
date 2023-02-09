import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'


// 用户点评 和 首页下拉加载 都用到了这个组件
class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    // 父组件中处理, 控制是否加载更多, 控制数据的增加
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandle() {
        // 执行传输过来的
        //这里点击事件用不到啊 因为滚动直接加载了...
        // console.log(this.props)  
        this.props.loadMoreFn();
    }
    componentDidMount() {
        // console.log(this.props)
        // console.log(this.refs.wrapper.getBoundingClientRect().top)// 获取DOM属性的上下左右的距离
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            // console.log('top', top)
            const windowHeight = window.screen.height; // 740
            // console.log('windowHeight', windowHeight)
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) return

            // console.log(timeoutId)
            // console.log(!!timeoutId)
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
    }
}

export default LoadMore