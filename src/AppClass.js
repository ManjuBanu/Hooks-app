import React from 'react';

class AppClass extends React.Component{

    state ={
        count :0, //init
        isOn:false,
        x:null,
        y:null
    }

    //after [render]
    componentDidMount(){
        document.title = `Class clicked ${this.state.count} times`;
        window.addEventListener('mousemove',this.handleMouseMove)
    }

    //after [every updates]
    componentDidUpdate(){
        document.title = `Class clicked ${this.state.count} times`;
    }

    componentWillUnmount(){
        window.removeEventListener("mousemove",this.handleMouseMove)
    }

    handleMouseMove = event =>{
        this.setState({
            x:event.pageX,
            y:event.pageY
        })
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
            <div
            style={{
                // height:'500px',
                width:'500px',
                background: "lightgreen",
                textAlign:'center',
                margin:'auto',
                padding:'20px'
            }}>
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
                        background: this.state.isOn ? "red" :"white",
                        borderRadius:'50%',
                        margin:'auto'
                    }}
                    onClick={this.toggleLight}>
                    </div>
    

                    <h3>Mouse Position!</h3>
                    <p>X Position: {this.state.x} </p>
                    <p>Y Position: {this.state.y} </p>


            </div>
        )
    }
}

export default AppClass;