import React from "react";

export default class MyNav extends React.Component {
    render(){
        console.log(this.props.nav);
        // props 不可以在组件内修改 只能去传递过来的父组件去修改
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul>
                    {/* 如果遇到大括号按照js来解析 */}
                    {
                        this.props.nav.map((item, index) => {
                        return <li key={index}>{item}</li>
                        })
                    }
                    {/* <li>nav1</li>
                    <li>nav2</li>
                    <li>nav3</li> */}
                </ul>
            </div>
        )
    }
}