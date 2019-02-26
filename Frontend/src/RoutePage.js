import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Calc from './components/calculator/Calc';


class RoutePage extends Component{
    render(){
        return(
            <div>
                <Route path='/' component={Calc}></Route>
            </div>
        )
    }
}
export default RoutePage;