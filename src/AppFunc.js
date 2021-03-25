import React , {useState, useEffect} from 'react';


/** [default create-react-app] */
// function AppFunc() {
//   return (
//     <div >
//       <h1>hello world!!</h1>
//     </div>
//   );
// }

const  AppFunc = ()  => {

  //pass init state [0] to useState() it will treturn [1.current state (count)& 2.another funtion (setIncrementCount) to update this value]
  const [count, setIncrementCount] = useState(0); //0 => init

  const [isOn , setIsOn] = useState(false);

  const [mousePosition, setMousePosition] = useState({x:null, y:null})

  useEffect(() => {
    document.title = `Function clicked ${count} times`;
    window.addEventListener('mousemove',handleMouseMove);

    //before the useEffect runs
    return() =>{
      window.removeEventListener('mousemove',handleMouseMove);
    }
  },[count]);

 const  incrementCount = () => { 
  // setIncrementCount(count+1);
  setIncrementCount(prevCount => prevCount+1);
}

const toggleLight = () =>{
  setIsOn(prevIsOn => !prevIsOn )
}

const handleMouseMove = event =>{
  setMousePosition({
    x:event.pageX,
    y:event.pageY
  })
}


  return (
    <div   style={{
      // height:'500px',
      width:'500px',
      background: "greenYellow",
      textAlign:'center',
      margin:'20px auto',
      padding:'20px',
 
  }} >
      <h1>Function & Hooks!</h1>
      <h3>Counter</h3>
      <button onClick={incrementCount}> I was clicked {count} times</button>


      <h3>Toggle Light!!</h3>
     
      <div
    //   src={
    //     isOn 
    //     ? 
    //     'src/images/torch.png'
    //   :
    //   'src/images/flashlight.png'
    // }
      style={{
          height:'50px',
          width:'50px',
          background: isOn ? "red" :"grey",
          borderRadius:'50%',
          margin:'auto'
      }}
      // alt="FlashLight"
      onClick={toggleLight}/>

      <h3>Mouse Position!</h3>
      {JSON.stringify( mousePosition , null, 2)}
      <br/>


    </div>

  );
}

export default AppFunc;
