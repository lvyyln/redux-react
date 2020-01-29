import React,{Component} from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorBoundry from "../error-boundry/error-boundry";
export default class App extends Component{
    render(){
        return(
            <div>
                <ErrorBoundry>
                <Spinner>

                </Spinner>
                <ErrorIndicator></ErrorIndicator>
                </ErrorBoundry>
            </div>
        )
    }
}
