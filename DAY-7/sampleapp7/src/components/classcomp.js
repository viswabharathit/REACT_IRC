import React , {Component } from "react";
class ClassComp extends Component()
{
    constructor(props){
        super(props);
        console.log('1.Constructor');
    }
    componentDidMount(){
        console.log('3. Component Did Mount');
    }
    ComponentDidUpdate(prevProps,prevState){
        console.log('4.Component Did Update');
        console.log('Prev Props:',prevProps);
        console.log('Prev State:',prevState);

    }
    ComponentWillUnmount(){
        console.log('5, Component Will Unmont');
    }
    render(){
        console.log('2.Render');
        return (
            <>
            <h1>Life Cycle Component</h1>
            </>
        )
    }
};
export default ClassComp;
