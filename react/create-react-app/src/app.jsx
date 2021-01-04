import React from "react";
import Home from "./home"
import MyNav from "./my-nav"
import StateComponent from "./state-component"

//用类的形式创建类
class App extends React.Component{
    render() {

        // const nav1 = ['Home', "Media", "Music"]
        // const nav2 = ['首页', "其他", "关于我们"]
        return (
            <div>
                <StateComponent />
                {/* <h1>Hello React Component</h1>
                <p>学习react</p>
                <Home  />
                <MyNav nav={nav1} title="导航一"/>
                <MyNav nav={nav2} title="导航二"/> */}
            </div>
        )
    }
}
export default App