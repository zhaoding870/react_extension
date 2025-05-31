import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users: [
        //     { id: '001', name: 'tom', age: 18 },
        //     { id: '002', name: 'jack', age: 20 },
        //     { id: '003', name: 'lucy', age: 22 }
        // ]
        users: 'abc'   // 故意写错，模拟错误
    }

    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                <ul>
                    {
                        this.state.users.map(user => {
                            return <li key={user.id}>
                                {user.name} - {user.age}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
