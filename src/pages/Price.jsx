import React, { Component } from 'react'

export default class Price extends Component {
    state = null
    constructor(props) {
        super(props)
        this.state = {
            list: ["Gule 1", "Badeng Presto"]
        }
    }
    onAddList() {
        // this.setState({
        //     list: [...this.state.list, "List Baru"]
        // })
        this.setState((state) => state.list = state.list.concat({
            
        }));
    }
    render() {
        return (
            <>
                <ul>
                    {
                        this.state.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))
                    }
                </ul>
                <button onClick={() => this.onAddList()}>Add list</button>
            </>
        )
    }
}
