import { useState, useEffect } from "react"


function App() {
  const [data, setData] = useState([])
  const [kwh, setKwh] = useState(0.77)
  useEffect(() => {
    const dataFetch = async () => {
      const res = await (
        await fetch(
          "src/assets/data.json"
        )
      ).json();

      // set state when the data received
      setData(res);
    };

    dataFetch();
  },[])
  
  return (
    <div className="App">
      <table>
    <thead>
        <tr>
            <th>Nazwa</th>
            <th>Moc w kW</th>
            <th>Czas w h</th>
            <th>Opłata za 24h</th>
        </tr>
    </thead>
    <tbody>
      
      {data?.map((dt)=>{
        return (
          <tr className="wrapper" key={dt.id}>
          <td>{dt.name}</td>
          <td>{dt.power}</td>
          <td>{dt.workingTime}</td>
          <td>{dt.power*dt.workingTime*kwh}</td>
          </tr>
        )
      })}
     
      </tbody>
      </table>
    </div>
  )
}

export default App
