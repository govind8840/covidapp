import React, { useEffect, useState } from "react";
import '../statewise/statewise.css';
// import axios from "axios";
const Statewise = () => {
  const [state, setState] = useState();

  const AllcovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData= await res.json();
    // console.log(res?.data?.statewise, "HELLO");
    console.log(actualData.statewise);
    setState(actualData.statewise);
     
  };
  console.log(state,"hero data");
 
  //  useEffect(()=>{
  //       GetCovidData();
  //  },[]);conms
  //  },[])
  useEffect(() => {
    AllcovidData();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center"> covid Data</h1>
      <div className="row">
        <div className="col-12">
          <div className="tabal-box card shadow">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">sr</th>
                  <th scope="col">State</th>
                  <th scope="col">active</th>
                  <th scope="col">Death</th>
                  <th scope="col">Statecode</th>
                </tr>
              </thead>
              <tbody>
                {state &&
                  state.map((value,key) => {
                    return (
                      <tr>
                        <th scope="row">{key}</th>
                        <td>{value.state}</td>
                        <td>{value.active}</td>
                        <td>{value.deaths}</td>
                        <td>{value.statecode}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statewise;
