import React from 'react';
import './Forma.css';
import Putovanje from './IndividualnoPutovanje';
import {useForm} from 'react-hook-form';

function Forma(props) {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Uspesno ste se prijavili!");
  };


  return (
    <>
    <div className='video-container'>
    <video src='/videos/video-2.mp4' autoPlay loop muted />
    <div class="forma-container">
    <form class="form" onSubmit={handleSubmit(onSubmit)}>
    <div class="title">Dobro dosli</div>
    <div class="subtitle">Prijavite se</div>
    <div class="input-container ic1">
    <input id="firstname" class="input" type="text" placeholder=" "{...register("ime",{required: true,maxLength: 20})} />
      {errors.ime &&  <div class="upozorenje"><span>Obavezno polje!</span></div>}
      <div class="cut"></div>
      <label for="firstname" class="placeholder">Ime</label>
      </div>
      <div class="input-container ic1">
        <input id="prezime" class="input" type="text" placeholder=" " {...register("prezime", { required: true,maxLength: 20 })} />
      {errors.prezime && <div class="upozorenje"><span>Obavezno polje!</span></div>}
        <div class="cut"></div>
        <label for="prezime" class="placeholder">Prezime</label>
      </div>
      
      <div class="input-container ic1">
        <input id="email" class="input" type="text" placeholder=" " {...register("email", { required: true,pattern:/^\S+@\S+$/i })} />
      {errors.email && <div class="upozorenje"><span>Unesite email u formatu nesto@nesto</span></div>}
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic1">
      <select class="destinacija" id="destinacija"{...register("Destinacija", { required: true })}>
        <option >Izaberite destinaciju</option>
        <option value="Grdica">Grdica</option>
        <option value="Kraljevo">Kraljevo</option>
        <option value="Beograd">Beograd</option>
        <option value="Pancevo">Pancevo</option>
        <option value="Vrnjacka banja">Vrnjacka banja</option>
      </select>
      {errors.Destinacija && <div class="upozorenje"><span>Izaberite destinaciju</span></div>}
      </div>
      <button type="text" class="submit">Posaljite prijavu</button>
      
    </form>
    </div>
    </div>
 </>
  );
}

export default Forma;