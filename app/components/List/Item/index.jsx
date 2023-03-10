import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
// import imgs from '../Item/food.png';
import imgs from '../Item/marry.png'
import './style.less'



class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        // console.log(data)
        return (
            <div className="list-item clear-fix">
                <Link to={'/detail/' + data.id}>
                    <div className="item-img-container float-left">
                        {/* 如果图片加载不出来 就显示alt中的数据 */}
                        {/* <img src={data.img} alt={data.title}/>   */}
                        <img src={imgs} alt={data.title} />
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right">{data.distance}</span>
                        </div>
                        <p className="item-sub-title">
                            {data.subTitle}
                        </p>
                        <div className="item-price-container clear-fix">
                            <span className="price float-left">￥{data.price}</span>
                            <span className="mumber float-right">已售{data.mumber}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListItem