import React from 'react'
import './style.css'

export default function favoritebooks(){
    return (
        <div id='favoritebooks'>
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
                        <h2>Pergunta 2</h2>
                    </div>
                    <div class="broto"><img src="assets/favorite-books-broto.svg" alt="Broto: Selecione o livro com o tema que mais te interessa." /></div>
                    <form>
                        <div class="question-item">
                            <img src="/assets/book1.png" alt="Livro"/>
                        </div>
                        <div class="question-item">
                            <img src="/assets/book2.png" alt="Livro"/>
                        </div>
                        <div class="question-item">
                            <img src="/assets/book3.png" alt="Livro"/>
                        </div>
                        <div class="question-item">
                            <img src="/assets/book4.png" alt="Livro"/>
                        </div>
                    </form>
                    <a href="/screening/favoritebooks">Continuar</a>
                </div>
            </main>
        </div>
    );
}