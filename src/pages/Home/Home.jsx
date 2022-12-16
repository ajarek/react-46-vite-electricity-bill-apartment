import { useState, useEffect } from 'react'
import { useFetch } from '../../api/useFetch'
import Loading from '../../components/Loading/Loading'
import FullPageLayout from '../../components/FullPageLayout/FullPageLayout'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import './Home.css'
const urlData = 'src/assets/data.json'
const urlFireBase =
  'https://energy-consumption-2224c-default-rtdb.europe-west1.firebasedatabase.app/.json'

function Home() {
  const [kwh, setKwh] = useState(1.11)
  const { data, pending, error } = useFetch(urlFireBase)

  return (
    <div className='App'>
      {error ? (
        <FullPageLayout>
          <ErrorMessage>{error}</ErrorMessage>
        </FullPageLayout>
      ) : null}
      {pending ? (
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
      ) : null}
      <table>
        <thead>
          <tr>
            <th>Ikona</th>
            <th>Nazwa</th>
            <th>Zużycie kWh/rok</th>
            <th>Opłata za rok w PLN</th>
            <th>Opłata za 2 m-ce w PLN</th>
          </tr>
        </thead>
        <tbody>
          {data
            ?.sort((a, b) => b.annualUsage - a.annualUsage)
            .map((dt) => {
              return (
                <tr
                  className='wrapper'
                  key={dt.id}
                >
                  <td>
                    <img
                      src={dt.icon}
                      alt=''
                    />
                  </td>
                  <td>{dt.name}</td>
                  <td>{dt.annualUsage}</td>
                  <td>{(dt.annualUsage * kwh).toFixed(2)}</td>
                  <td>{((dt.annualUsage * kwh) / 6).toFixed(2)}</td>
                </tr>
              )
            })}
        </tbody>
      </table>

      <h1>
        Roczne zużycie:{' '}
        {data &&
          data.reduce((acc, item) => acc + item.annualUsage, 0).toFixed(2)}{' '}
        kWh
      </h1>
      <h1>
        Dwumiesięczne zużycie:{' '}
        {data &&
          data
            ?.reduce((acc, item) => acc + item.annualUsage / 6, 0)
            .toFixed(2)}{' '}
        kWh
      </h1>
      <h1>
        Dwumiesięczna opłata:{' '}
        {data &&
          data
            ?.reduce((acc, item) => acc + (item.annualUsage * kwh) / 6, 0)
            .toFixed(2)}{' '}
        PLN
      </h1>
    </div>
  )
}
export default Home