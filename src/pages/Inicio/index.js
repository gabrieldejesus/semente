import React from 'react'
import './style.css'

export default function Initial(){
    return (
        <div id='initial'>
{/*============================================================ HEADER ============================================================*/}
            <header>
                <div class="container">
                    <div class="logo"><a href="/"><img src="/assets/logomarca.svg" alt="Logomarca"/></a></div>
                </div>
            </header>
{/*============================================================ BANNER ============================================================*/}
            <main>
                <section class="banner column">
                    <div class="sliders">
                        <div class="slide">
                            <div class="slidearea column">
                                <img src="/assets/milhares.svg" alt="Milhares de Livros"/>
                                <h3>Milhares de Livros</h3>
                                <p>Livros de Ficção? Romance? Matemática? Temos tudo isso e muito mais pra você</p>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="slidearea column">
                                <img src="/assets/recomendacoes.svg" alt="Recomendações Personalizadas"/>
                                <h3>Recomendações Personalizadas</h3>
                                <p>Baseado no seu gosto, recomendaremos livros que tem a sua cara</p>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="slidearea column">
                                <img src="/assets/audio.svg" alt="Audiolivros"/>
                                <h3>Audiolivros</h3>
                                <p>Quando estiver sem tempo ouça seus livros favoritos.</p>
                            </div>
                        </div>
                    </div>
                    <div class="sliders-pointers">
                        <div class="pointer selected"></div>
                        <div class="pointer"></div>
                        <div class="pointer"></div>
                    </div>
                </section>
            </main>
{/*============================================================ LOGIN AND REGISTER ============================================================*/}
            <section id="start">
                <div class="container">
                    <div class="start-area">
                        <a href="#"><div class="start-area--register">Inscrever-se</div></a>
                        <a href="/login"><div class="start-area--login">Entrar</div></a>
                    </div>
                </div>
            </section>
        </div>
    );
}