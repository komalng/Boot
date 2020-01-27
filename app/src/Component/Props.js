import React,{Component} from "react";

export default function Props(props){
    return (        
    <div style = {{height:'349px',background:'red',length:'349px'}}>
        <h1 style = {{color:'red'}}>Welcome :-) {props.name}</h1>
    </div>
       )

};