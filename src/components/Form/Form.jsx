import { useForm } from 'react-hook-form'
import { React, useContext, useEffect } from 'react'
import {useNavigate, Navigate } from 'react-router-dom'
import { AppContext } from '../../App'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Label } from '../../components/Label/Label'
import './Form.css'
import post from '../../api/post'

export const Form = () => {
  const navigate = useNavigate();

  const urlPost =
    'https://energy-consumption-2224c-default-rtdb.europe-west1.firebasedatabase.app/.json'
  const schema = yup.object().shape({
    name: yup.string().required('Nazwa jest wymagana!'),
    icon: yup.string().required('Wybór jest wymagany'),
    annualUsage: yup.string().required('Zużycie jest wymagane!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {  
    post(urlPost, data)
    navigate("/listreceiver");
    setTimeout(()=>{location.reload()},300) 
  }
 
  return (
    <div className='form-wrapper'>
      <h2>Dodaj odbiornik</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label label={'Name'} />
        <input
          type='text'
          placeholder='np. Pralka'
          {...register('name')}
        />
        <p>{errors?.name?.message}</p>
        <Label label={'Wybierz ikonę'} />
        <select
          {...register('icon')}
          className='select'
        >
          <option value='/icons/czajnik.png'>Czajnik</option>
          <option value='/icons/hue.png'>Hue</option>
          <option value='/icons/kombiwar.png'>Kombiwar</option>
          <option value='/icons/konwerter.png'>Konwerter</option>
          <option value='/icons/kuchenka.png'>Kuchenka</option>
          <option value='/icons/lampa.png'>Lampa</option>
          <option value='/icons/laptop.png'>Laptop</option>
          <option value='/icons/lodówka.png'>Lodówka</option>
          <option value='/icons/microfala.png'>Mikrofala</option>
          <option value='/icons/pralka.png'>Pralka</option>
          <option value='/icons/tv.png'>TV</option>
          <option value='/icons/zasilacz.png'>Zasilacz</option>
          <option value='/icons/zmywarka.png'>Zmywarka</option>
        </select>
        <p>{errors.select?.message}</p>
        <Label label={'Zużycie kWh/rok'} />
        <input
          type='number'
          placeholder='np. 255'
          {...register('annualUsage')}
        />
        <p>{errors?.annualUsage?.message}</p>

        <input
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  )
}
