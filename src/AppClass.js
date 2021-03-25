import React from 'react';


let mounted = true;
class AppClass extends React.Component{

    state ={
        count :0, //init
        isOn:false,
        x:null,
        y:null,
        status:navigator.onLine,
        lat:null,
        long:null,
        speed:null
    }

    //after [render]
    componentDidMount(){
        document.title = `Class clicked ${this.state.count} times`;
        window.addEventListener('mousemove',this.handleMouseMove);
        window.addEventListener('online',this.handleOnline);
    window.addEventListener('offline',this.handleOffline);
    navigator.geolocation.getCurrentPosition(this.handleGeoLocation);
    const watchId=  navigator.geolocation.watchPosition(this.handleGeoLocation);
    }

    //after [every updates]
    componentDidUpdate(){
        document.title = `Class clicked ${this.state.count} times`;
    }

    componentWillUnmount(){
        window.removeEventListener("mousemove",this.handleMouseMove);
        window.removeEventListener('online',this.handleOnline);
    window.removeEventListener('offline',this.handleOffline);
    const watchId=  navigator.geolocation.watchPosition(this.handleGeoLocation);
    navigator.geolocation.clearWatch(watchId);
    mounted = false;
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


 handleOnline = () =>{
    this.setState({
        status:true
    });
  }
   handleOffline = () =>{
    this.setState({
        status:false
    });
  }

   handleGeoLocation = event => {
    if(mounted){
        this.setState({
        lat:event.coords.latitude,
        long:event.coords.longitude,
        speed:event.coords.speed
      })
    } 
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

                    <h3>Network Status!</h3>
      <p>You are <strong>{this.state.status ? "online": "offline"}</strong></p>


      <h3>Geo Location!</h3>
      <p>Latitude is :: {this.state.lat}</p>
      <p>Longitude is :: {this.state.long}</p>
      <p>Your speed is :: {this.state.speed ? this.state.speed : "0"}</p>
      
            </div>
        )
    }
}

export default AppClass;