import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="list-container"> {/* css样式：bgc、padding */}
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/> /* 渲染每一项、每一条数据 */
                })}
            </div>
        )
    }
}

export default List