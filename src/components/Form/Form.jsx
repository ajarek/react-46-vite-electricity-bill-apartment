import { useForm } from 'react-hook-form'
import { React, useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../../App'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Label } from '../../components/Label/Label'

export const Form = () => {
  
  const schema = yup.object().shape({
    name: yup.string().required('Nazwa jest wymagana!'),
    select: yup.string().required('Wybór jest wymagany'),
    annualUsage: yup.number().required('Zużycie jest wymagane!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
    
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
          {...register("select")}
          onChange={(e) => doSomething(e.target.value)}
        >
          <option value="czajnik.png">Czajnik</option>
          <option value="hue.png">Hue</option>
          <option value="kombiwar.png">Kombiwar</option>
          <option value="konwerter.png">Konwerter</option>
          <option value="kuchenka.png">Kuchenka</option>
          <option value="lampa.png">Lampa</option>
          <option value="laptop.png">Laptop</option>
          <option value="lodówka.png">lodówka</option>
          <option value="microfala.png">Mikrofala</option>
          <option value="pralka.png">Pralka</option>
          <option value="tv.png">TV</option>
          <option value="zasilacz.png">Zasilacz</option>
          <option value="zmywarka.png">Zmywarka</option>

        </select>
        <p>{errors.select?.message}</p>
        <Label label={'Zużycie kWh/rok'} />
        <input
          type='number'
          placeholder='np. 255'
          {...register('annualUsage')}
        />
        <p>{errors.annualUsage?.message}</p>

        <input
          type='submit'
          value='Submit'
        />
      </form>
    </>
  )
}