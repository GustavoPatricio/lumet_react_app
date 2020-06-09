import React from 'react';
import { useForm } from 'react-hook-form';

function Form() { 
   const {register, handleSubmit, errors } = useForm();

   const onSubmit = data => { 
       console.log(data);
   }

   return (
    <form onSubmit={handleSubmit(onSubmit)} data-aos="fade-up" autoComplete="off">
        <div className="row">
            <input type="text" name="nome" id="nome" ref={register({ required: true, maxLength: 50 })} placeholder="Seu nome"/>
            {errors.nome && errors.nome.type === "required" && <span style={{color: 'white !important'}}>teste</span>}
        </div>
        <div className="row">
            <input type="email" name="Email" id="Email"  placeholder="Seu email" required/>
        </div>
        <div className="row">
            <input type="text" name="Empresa" id="Empresa"  placeholder="Sua empresa (opcional)"/>
        </div>
        <div className="row">
            <input type="tel" name="Telefone" id="Telefone"  placeholder="Telefone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
        </div>
        <div className="row">
            <input type="text" name="Assunto" id="Assunto"  placeholder="Assunto" required/>
        </div>
        <div className="row">
            <textarea name="Mensagem" id="Mensagem" placeholder="Mensagem"></textarea>
        </div>
        <div className="row" style={{marginTop: '5vh'}}>
            <input type="submit" value="Enviar"/>
        </div> 
        
    </form>
  );
}

export default Form; 