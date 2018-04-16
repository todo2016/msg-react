import React, {Component} from 'react';


import {observer, inject} from 'mobx-react';
import {Button, TextareaItem, NavBar, WhiteSpace, Brief, List, Modal} from 'antd-mobile';


// @inject(stores => {
//     return {
//         store: stores.store
//     }
// })
@observer
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: ''
        }
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    componentDidMount() {
        this.props.store.find();
    }

    add = () => {
        if (!this.state.msg) return;
        this.props.store.add(this.state.msg)
        this.setState({
            msg: ''
        })
    }

    render() {
        const Item = List.Item;
        const Brief = Item.Brief

        const {list} = this.props.store;
        return (

            <div>
                <NavBar mode="dark">留言板</NavBar>
                <WhiteSpace></WhiteSpace>
                <TextareaItem
                    rows={5}
                    count={100}
                    onChange={(v) => this.onChange('msg', v)}
                    value={this.state.msg}
                />
                <WhiteSpace></WhiteSpace>
                <Button
                    type="primary"
                    size="small"
                    onClick={this.add}
                    inline>留言</Button>
                <WhiteSpace></WhiteSpace>
                <List>
                    {list.map(item => <Item key={item} multipleLine>{item.split('\n').map(d => <Brief
                        key={d}>{d}</Brief>)}</Item>)}
                </List>

            </div>
        );
    }
}

export default App;
