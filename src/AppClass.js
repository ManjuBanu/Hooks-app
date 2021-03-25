import React from 'react';

class AppClass extends React.Component{

    state ={
        count :0, //init
        isOn:false
    }

    incrementCount = () =>{
        this.setState(prevState => ({
            count:prevState.count +1
        }));
    }

    toggleLight = () =>{
        this.setState(prevState =>({
            isOn: !prevState.isOn
        }))
    }

    

    render(){
        return(
            <React.Fragment>
                <h1>Class!</h1>
                <h3>Counter</h3>
                    <button onClick={this.incrementCount}>
                         I was clicked {this.state.count} times!!
                    </button>
                
                    <h3>Toggle Light!!</h3>
                    <div
                    style={{
                        height:'50px',
                        width:'50px',
                        background: this.state.isOn ? "yellow" :"grey",
                        borderRadius:'50%'
                    }}
                    onClick={this.toggleLight}>
                    </div>

            </React.Fragment>
        )
    }
}

export default AppClass;