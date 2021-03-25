import React , {useState} from 'react';


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


 const  incrementCount = () => { 
  // setIncrementCount(count+1);
  setIncrementCount(prevCount => prevCount+1);
}

const toggleLight = () =>{
  setIsOn(prevIsOn => !prevIsOn )
}

  return (
    <React.Fragment >
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
          background: isOn ? "yellow" :"grey",
          borderRadius:'50%'
          
      }}
      // alt="FlashLight"
      onClick={toggleLight}/>

    </React.Fragment>
  );
}

export default AppFunc;
