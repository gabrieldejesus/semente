import React from 'react'
import './style.css'

export default function Screening(){
    return (
        <div id='screening'>
{/*============================================================ BANNER ============================================================*/}
            <main>
                <div class="container column">
                    <div class="headline">
                        <h2>Agora o <strong>BROTO</strong> guiará sua jornada por aqui!</h2>
                    </div>
                    <div class="broto"><img src="assets/welcome-broto.svg" alt="Broto: Quero te conhecer para te ajudar a escolher um ótimo livro." /></div>
                    <h3>Responda umas perguntas e conheça novos mundos!</h3>
                    <p>Leva 2 minutos e no final te recomendaremos um livro que é a sua cara!</p>
                    <a href="/questionname">Começar</a>
                </div>
            </main>
        </div>
    );
}