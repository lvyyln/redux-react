import React,{Component} from "react";
import Spinner from "./components/spinner/spinner";
import ReactDOM from 'react-dom';
export default class App extends Component{
    render(){
        return(
            <div>
                <Spinner>

                </Spinner>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));