import React,{Component} from 'react';

export default class State extends Component{
    constructor(){
        super();
        this.state = {
            color:''
        }
    }

    onChange = () =>{
        if(this.state.color === "black"){
            this.setState({
                color:''
            })
        }
        else{
        this.setState({
            color:'black'
        })
    }
    }
    render(){
        return(
            <div style = {{background:this.state.color}}>
                <button  onClick={this.onChange}>Button</button>
            </div>
        )
    }
}