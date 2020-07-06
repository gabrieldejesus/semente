import React from 'react'
import './style.css'

export default function questionname(){
    return (
        <div id='questionname'>
{/*============================================================ HEADER ============================================================*/}
            <header>
                <div class="container">
                    <div class="fechar">X</div>
                    <div class="bar"><div class="bar-progress"></div></div>
                </div>
            </header>
{/*============================================================ MAIN ============================================================*/}
            <main>
                <div class="container column">
                    <div class="headline">
                        <h2>Pergunta 1</h2>
                    </div>
                    <div class="broto"><img src="assets/questionname-broto.svg" alt="Broto: Como quer que eu te chame?" /></div>
                    <form>
                        <input type="text" placeholder="Digite seu nome..."/>
                        <div class="avatar"><img src="assets/avatar.svg" alt="Foto de perfil"/></div>
                    </form>
                    <a href="/favoritebooks">Continuar</a>
                </div>
            </main>
        </div>
    );
}