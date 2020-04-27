import React, {Component} from "react";

import Navbar from './Navbar';
import Viewport from "./Viewport";

class Home extends Component {
    render() {
        return(
            <div>
            <Navbar />
            <Viewport />
            </div>
        );
    }
}

export default Home;

