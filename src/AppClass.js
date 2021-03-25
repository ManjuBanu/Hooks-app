import React from 'react';

class AppClass extends React.Component{

    state ={
        count :0 //init
    }

    incrementCount = () =>{
        this.setState({
            count:this.state.count +1
        })
    }

    render(){
        return(
            <React.Fragment>
            <h1>Class!</h1>
            <button onClick={this.incrementCount}>
            I was clicked {this.state.count} times!!
            </button>
            </React.Fragment>
        )
    }
}

export default AppClass;