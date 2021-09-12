import React from 'react';
import './Forma.css';
import Putovanje from './IndividualnoPutovanje';
import {useForm} from 'react-hook-form';

function Forma(props) {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <>
    <div class="forma-container">
    <form class="form" onSubmit={handleSubmit(onSubmit)}>
    <div class="title">Dobro dosli</div>
    <div class="subtitle">Prijavite se</div>
    <div class="input-container ic1">
    <input id="firstname" class="input" type="text" placeholder=" "{...register("ime",{required: true})} />
      {errors.ime &&  <div class="upozorenje"><span>Obavezno polje!</span></div>}
      <div class="cut"></div>
      <label for="firstname" class="placeholder">Ime</label>
      </div>
      <div class="input-container ic2">
        <input id="prezime" class="input" type="text" placeholder=" " {...register("prezime", { required: true })} />
      {errors.prezime && <div class="upozorenje"><span>Obavezno polje!</span></div>}
        <div class="cut"></div>
        <label for="prezime" class="placeholder">Prezime</label>
      </div>
      
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " {...register("prezime", { required: true })} />
      {errors.prezime && <div class="upozorenje"><span>Obavezno polje!</span></div>}
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button type="text" class="submit">Posaljite prijavu</button>
      
    </form>
    </div>
 </>
  );
}

export default Forma;