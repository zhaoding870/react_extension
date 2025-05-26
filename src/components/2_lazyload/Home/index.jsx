import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>Home</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-xs-offset-2">
            <h3>我是Home的内容</h3>
          </div>
        </div>
      </div>
    )
  }
}
