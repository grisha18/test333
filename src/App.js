import React, {useRef, useState}from 'react';

import { v4 as uuidv4 } from 'uuid';

// const vasya = new Human("vasya",1,1)

class Human{
  constructor(name, height, age=1, id) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.id = id;
  }

}





function App() {


  const nameRef = useRef(null);
  const heightRef = useRef(null);
  const ageRef = useRef(null);

  const [ourHumans, setOurHumans] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);


  const handleHeheClick = (e)=>{
    const myHuman = new Human(nameRef.current.value, heightRef.current.value, ageRef.current.value, uuidv4());

    setOurHumans([...ourHumans, myHuman]);
    

  }


  const handleChange = (e)=>{
   
    if(nameRef.current.value && heightRef.current.value && ageRef.current.value){
      console.log("OK")
      setButtonDisabled(false);
    } else{
      setButtonDisabled(true);

    }


  }

  return (
    <>
      <input onChange={handleChange} ref={nameRef} type="text" placeholder="name" id="name"/>
      <input onChange={handleChange} ref={heightRef} type="text" placeholder="height"/>
      <input onChange={handleChange} ref={ageRef} type="text" placeholder="age"/>
      <button disabled={buttonDisabled} onClick={handleHeheClick}>hehe</button>
      {ourHumans.map((e,i)=>{
        return(
          <div key={e.id} style={{position:"relative"}}>
            <div onClick={()=>{

              setOurHumans( ourHumans.filter( (elem)=>{
                return elem.id!=e.id;
              })  )

            }} style={{position: "absolute", transform: "rotate(45deg)", right: 0, top: 0, fontSize: "30px", cursor: "pointer" }}>+</div>
            <h1>This human is:</h1>
            <div style={{display:"flex", flexDirection:"column", gap: "10px", justifyContent:"center", alignItems:"center"}}>
              <div>{e.name}</div>
              <div>{e.height}</div>
              <div>{e.age}</div>
            </div>
            <hr/>
          </div>
        )
      })}
    </>
  )
}
export default App;
