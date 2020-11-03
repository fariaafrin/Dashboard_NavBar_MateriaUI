import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
// import Header from "./component/Header1";
import Body from "./component/Body";
import Footer from "./component/Footer";
import ResponsiveDrawer from './component/ResponsiveDrawer';
// import BreadCrums from './component/BreadCrums';

const MainApp = () => {
    return (
        <div>
            {/* <Header /> */}
            {/* <Body /> */}
            {/* <Footer /> */}
            <ResponsiveDrawer />
            {/* <BreadCrums /> */}
        </div>



    );
};


export default MainApp;

if (document.getElementById("app")) {
    ReactDOM.render(<MainApp />, document.getElementById("app"));
}
