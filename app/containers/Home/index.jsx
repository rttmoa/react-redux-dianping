import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { bindActionCreators } from 'redux'  // 此Home不需要dispatch
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'



class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div> 
                {/* 头部选择城市 -> 去City路由中处理 存储redux中了 */}
                <HomeHeader cityName={this.props.userinfo.cityName}/>

                {/* 轮播图 - CSS结构 */}
                <Category/>
                
                <div style={{height: '3px',textAlign:'center'  }}>{/* '分割线' */}</div>

                {/* 超值特惠 */}
                <Ad/>

                {/* 猜你喜欢 */}
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log('Home state', state) // userinfo:{cityName: '北京'}  store:[]
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect( mapStateToProps, mapDispatchToProps )(Home)