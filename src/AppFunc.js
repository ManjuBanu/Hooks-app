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


 const  incrementCount = () => { 
  setIncrementCount(count+1);
}

  return (
    <div >
      <h1>Function & Hooks!</h1>
      <button onClick={incrementCount}> I was clicked {count} times</button>
    </div>
  );
}

export default AppFunc;
