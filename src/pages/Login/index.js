import React from 'react'
import './style.css'

export default function Login(){
    return (
        <div id='login'>
{/*============================================================ HEADER ============================================================*/}
            <header>
                <div class="container">
                    <div class="voltar"><a href="/"><img src="/assets/back.svg" alt="Voltar para a página inicial"/></a></div>
                </div>
            </header>
{/*============================================================ MAIN ============================================================*/}
            <main>
                <div class="container column">
                    <h1>Entrar</h1>
                    <form class="column">
                        <div class="form-item column">
                            <label>E-mail</label>
                            <input type="email" placeholder="Digite seu email..."></input>
                        </div>
                        <div class="form-item column">
                            <label>Senha</label>
                            <input type="password" placeholder="Digite sua senha..."></input>
                        </div>
                        <a href="/screening">Entrar</a>
                    </form>
                    <div class="form-item--options">
                        <div class="form-item--option"><a href="#"><img src="/assets/button-facebook.svg" alt="Entrar com o Facebook"/></a></div>
                        <div class="form-item--option"><a href="#"><img src="/assets/button-google.svg" alt="Entrar com o Google"/></a></div>
                    </div>
                    <div class="form-item--others column">
                        <a href="#">Recuperar a senha</a>
                        <a href="/inicio">Criar uma conta</a>
                    </div>
                </div>
            </main>
        </div>
    );
}