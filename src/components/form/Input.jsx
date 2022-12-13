import React, { useState } from "react";

export default props => {

   

    let [name, setName] = useState('')
    let [password, setPassword] = useState('')
    let [email, setEmail] = useState('')

    function whenChange(e) {
        setName(e.target.value)
        
    }

    
    function whenChangeP(e){

        setPassword(e.target.value)
        
    }

    function whenChangeE(e){
        
        setEmail(e.target.value)
    }

     /*Objetivo:
      Armazenar o que é digitado nos 3 inputs e ao clicar em salvar, dar um alert com esses dados */

    /*const [user, setUser] = useState({ username: '', password: '', email: ''});
    
    function whenChange(e){

        setUser(e.target.value)

    }*/

    function Display(){


        return alert(name, password, email)
    }


    return(
        <div id="root">
          
            <form id="desafio"> 
                <input  placeholder="Insira o nome"  value={name}  required type="text" onChange={whenChange}/>
                <input  placeholder="Insira a senha" value={password}  required type="password" onChange={whenChangeP}/>
                <input  placeholder="Insira o e-mail" value={email}  required type="email" onChange={whenChangeE}/>
              
            </form>
            <button onClick={Display()}>salvar</button>
        </div>
    )
}