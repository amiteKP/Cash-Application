// import logo from './logo.svg';
// import './App.css';
// import MyGrid from './components/MyGrid';


  import { useEffect, useState } from "react";
  import { getData } from "./services/data";
  
  function App(){
    const[data,setData]=useState([]);
  
    useEffect(async () =>{
      setData(await getData())
    }, []);

    return(
      <div>
          <table>
              <thead>
                  <tr>
                      <th>Job Id</th>
                      <th>Job Datatype Id</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map(job =>(
                      <tr>
                          <td>{job.job_id}</td>
                          <td>{job.datatype_id}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </div>
    )
}
export default App;


   


