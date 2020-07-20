import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import './form.css';
import axios from 'axios';

function Form() { 
   const {register, handleSubmit, errors } = useForm();

   const onSubmit = form => {

       console.log(form);

       axios.post("/api/email", form)
        .then(res => { 
           console.log(res);
           console.log(res.data);
        })
        .catch(error => { 
            console.log(error)
        });
   }

   return (
    <form onSubmit={handleSubmit(onSubmit)} data-aos="fade-up" autoComplete='off'>
        <div className="row">
            <input type="text" name="nome" id="nome" ref={register({ required: true, maxLength: 50 })} placeholder="Seu nome"/>
            {errors.nome && errors.nome.type === "required" && <div style={{color: '#ff4f40', bottom: '0', fontSize: '.85rem'}}>Este campo é necessário</div>}
            {errors.nome && errors.nome.type === "maxLength" && <div style={{color: '#ff4f40', bottom: '0', fontSize: '.85rem'}}>Tamanho máximo do campo excedido (max: 50 caracteres)</div>}
        </div>
        <div className="row">
            <input type="email" name="email" id="email" ref={register({ required: true, maxLength: 50 })}  placeholder="Seu email" autoComplete='off'/>
            {errors.email && errors.email.type === "required" && <div style={{color: '#ff4f40', bottom: '0', fontSize: '.85rem'}}>Este campo é necessário</div>}
            {errors.email && errors.email.type === "maxLength" && <div style={{color: '#ff4f40', bottom: '0', fontSize:  '.85rem'}}>Tamanho máximo do campo excedido (max: 50 caracteres)</div>}
        </div>
        <div className="row">
            <input type="text" name="empresa" id="empresa" ref={register({ maxLength: 50 })} placeholder="Sua empresa (opcional)"/>
            {errors.empresa && errors.empresa.type === "maxLength" && <div style={{color: '#ff4f40', bottom: '0', fontSize:  '.85rem'}}>Tamanho máximo do campo excedido (max: 50 caracteres)</div>}
        </div>
        <div className="row">
            <InputMask mask="(99) 99999-9999" type="text" name="telefone" id="telefone" ref={register({ required: true, minLength: 15, maxLength: 15})} placeholder="Telefone"/>
            {errors.Telefone && errors.Telefone.type === "required" && <div style={{color: '#ff4f40', bottom: '0', fontSize: '.85rem'}}>Este campo é necessário</div>}
            {errors.Telefone && (errors.Telefone.type === "minLength" || errors.Telefone.type === "maxLength") && <div style={{color: '#ff4f40', bottom: '0', fontSize:  '.85rem'}}>Contato inválido</div>}
        </div>
        <div className="row">
            <input type="text" name="assunto" id="assunto" ref={register({ required: true, maxLength: 50 })} placeholder="Assunto"/>
            {errors.assunto && errors.assunto.type === "required" && <div style={{color: '#ff4f40', bottom: '0', fontSize: '.85rem'}}>Este campo é necessário</div>}
            {errors.assunto && errors.assunto.type === "maxLength" && <div style={{color: '#ff4f40', bottom: '0', fontSize:  '.85rem'}}>Tamanho máximo do campo excedido (max: 50 caracteres)</div>}
        </div>
        <div className="row">
            <textarea name="mensagem" id="mensagem" ref={register({ required: true, maxLength: 1000 })} placeholder="mensagem"></textarea>
            {errors.assunto && errors.assunto.type === "required" && <div style={{color: '#ff4f40', bottom: '0', fontSize: '.85rem'}}>Este campo é necessário</div>}
            {errors.assunto && errors.assunto.type === "maxLength" && <div style={{color: '#ff4f40', bottom: '0', fontSize:  '.85rem'}}>Tamanho máximo do campo excedido (max: 1000 caracteres)</div>}
        </div>
        <div className="row" style={{marginTop: '5vh'}}>
            <input type="submit" value="Enviar"/>
        </div> 
        
        
    </form>
  );
}

export default Form; 