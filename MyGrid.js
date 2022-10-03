import { useEffect, useState } from "react";
import { getData } from "../services/data";

function MyGrid(){
    const[data,setData]=useState([]);
    const update =async () => await setData(getData());
    useEffect(update, []);
    return<>
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
                        <td>job.job_id</td>
                        <td>job.datatype_id</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>
}
export default MyGrid;