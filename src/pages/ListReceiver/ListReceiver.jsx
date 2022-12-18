import { useState, useEffect,useContext } from 'react'
import { AppContext } from '../../App'
import { useFetch } from '../../api/useFetch'
import { remove } from '../../api/remove'
import Loading from '../../components/Loading/Loading'
import FullPageLayout from '../../components/FullPageLayout/FullPageLayout'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import './ListReceiver.css'
const urlData = 'src/assets/data.json'
const urlFireBase =
  'https://energy-consumption-2224c-default-rtdb.europe-west1.firebasedatabase.app/'

function ListReceiver() {
  const {kwh, setKwh} =  useContext(AppContext)
  const { data, pending, error } = useFetch(`${urlFireBase}.json`)
//https://energy-consumption-2224c-default-rtdb.europe-west1.firebasedatabase.app/0
  return (
    <div className='list-receiver'>
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
            <th>Akcja</th>
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
                  <td>
                    <button
                     className='dumpster'
                     onClick={()=>remove(`${urlFireBase}${dt.id}/.json`)}
                     >
                      🗑️
                      </button>
                  </td>
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
export default ListReceiver