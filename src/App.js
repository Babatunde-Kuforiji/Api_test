
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const[universities,setUniversities]=useState([]);

    useEffect(()=>{
      axios
      .get('http://universities.hipolabs.com/search?country=united+States')
      .then((Response)=>{
        setUniversities(Response.data);
      }
      )
      .catch((error)=>{
        console.log(error)
      });
   
    },[])


    return (
      <div>
        <h1>fetching of data</h1>
        <h2>universities in the united states</h2>

        <ul>
          {universities.map((university,index)=>(
            <li key={index}>{university.name}</li>
              
          )
          )}
        </ul>
      
    </div>
  );
          }

export default App;
