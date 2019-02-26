import React,{Component} from 'react';
//import {button} from 'react-dom';
//import './App.css';
import axios from 'axios';
class Calc extends Component{
    constructor(props){
    super(props);
        this.state={
        display:'0',
        operand:'0',
        oper:null,
        operator:'0',
        result:'',
        inputError:false
        //operatorflag:false

    }
    
   // this.displayHandle=this.displayHandle.bind(this);
    this.inputHandle=this.inputHandle.bind(this);
    //this.OperHandle=this.OperHandle.bind(this);
    this.EquHandle=this.EquHandle.bind(this);
}
componentWillMount(){
    this.setState({
        operatorflag:false,
        inputError:false
    })
}
     validateInput(input){
         const pattern=/^\d*$/;
         const result=pattern.test(input);
         console.log(result);
         if(result===true){
             this.setState({
                 inputError:false
             })
             return true;
         }
         else{
            this.setState({
                inputError:true
            })
            return false;
         }
         
     }   
    inputHandle=(e)=>{
        if(this.validateInput(e.target.value)){
        if(!this.state.operatorflag){
        this.setState({
            display:e.target.value,
            operator:e.target.value
        },
            ()=>{console.log("value here operator",this.state.operator)}
        )
    }else{
        this.setState({
            display:e.target.value,
            operand:e.target.value
        })
        
    }
    }
}
        /*if(this.state.display!==''&& this.state.oper===null){
            this.setState({
                display:e.target.value
            });
        }
        if(this.state.display==='' && this.state.oper!==null ){
            this.setState({
                display:e.target.value
            });
        }
        if(this.state.display!=='' && this.state.oper!==null ){
                this.setState({
                    display:e.target.value
             });
            }*/

    ClrHandle=(e)=>{
        this.setState({
            display:'0',
            operand:'0',
            oper:null,
            operator:'0',
            result:'',
            operatorflag:false
        })
    }
   OperHandle(op){
        this.setState({
            
            oper:op,
            display:'',
            operatorflag:true
        
        })
    }
    EquHandle=(e)=>{
  
        e.preventDefault();
        const data={
            operator:this.state.operator,
            oper:this.state.oper,
            
            operand:this.state.operand,
        }
        console.log(data);
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/Calc',data)
            .then(response=>{
                console.log("Status Code: ",response);
                if(response.status===200){
                    this.setState({
                        
                        display:response.data ,    
                         
                 
                
                    });
                }
            });
            this.ClrHandle()
            this.setState({
                operatorflag:false,
                inputError:false
            })
        }
    

    

    render(){
        
        return(
           <div class='container'>
           <input class='display' type='text' onChange={this.inputHandle} defaultValue='0' value={this.state.display} name='display'></input>
           {this.state.inputError ? <span style={{color: "red"}}>Please Enter correct value</span> : ''}
           <button class='btn btn-default Add' onClick={this.OperHandle.bind(this,'+')}>+</button>
           <button class='btn btn-default Sub' onClick={this.OperHandle.bind(this,'-')}>-</button>
           <button class='btn btn-default Div' onClick={this.OperHandle.bind(this,'/')}>/</button>
           <button class='btn btn-default Mul' onClick={this.OperHandle.bind(this,'*')}>*</button>
           <button class='btn btn-default Equ' onClick={this.EquHandle}>=</button>
           <button class='btn btn-default Clr' onClick={this.ClrHandle.bind(this)}>Clr</button>
           </div>
            );  
    }
}
export default Calc;