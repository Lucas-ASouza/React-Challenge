import React, { useState } from "react";

export default props => {

   

   /* let [name, setName] = useState('')
    let [password, setPassword] = useState('')
    let [email, setEmail] = useState('')*/

   /* function whenChange(e) {
        setName(e.target.value)
        setPassword(e.target.value)
        setEmail(e.target.value)
        
    }

    
    function whenChangeP(e){
        
    }

    function whenChangeE(e){
        

    }*/

     /*Objetivo:
      Armazenar o que é digitado nos 3 inputs e ao clicar em salvar, dar um alert com esses dados */

    /*Inicialmente eu tentei fazer uma função para setar o state para cada um dos inputs, e eu
    tinha um problema em que qualquer alteração nos inputs já chamava a função do Display(responsável
        pelo alert) mesmo que a chamada da função fosse no submit(basicamente dava um alert a cada
            caracter que digitava)
            
            
            Agora tentei salvar os 3 dados em um objeto, e trata-lo como um estado único, porém
            ao digitar alguma coisa em qualquer input, aparentemente ele se torna undefined e state para
            de atualizar*/
    const [user, setUser] = useState({ username: '', password: '', email: ''});
    
    function whenChange(e){

        setUser(e.target.value)

    }

    function Display(user){

        return console.log(user)
    }


    return(
        <div id="root">
          
            <form id="desafio"> 

                <input  placeholder="Insira o nome"  value={user.username}  required type="text" onInput={whenChange} />
                <input  placeholder="Insira a senha" value={user.password}  required type="password" onInput={whenChange} />
                <input  placeholder="Insira o e-mail" value={user.email}  required type="email" onInput={whenChange} />
                
                <button onClick={Display(user)} form="desafio">salvar</button>
            </form>
  
        </div>
    )
}