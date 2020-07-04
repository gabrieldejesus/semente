import React from 'react'
import './style.css'

export default function Home(){
    return (
        <div id='home'>
{/*============================================================ HEADER ============================================================*/}
            <header>
                <div class="container">
                    <div class="logo"><a href="#"><img src="assets/logomarca.svg" alt="logomarca"/></a></div>
                    <div class="menu">
                        <nav>
                            <ul>
                                <li><a href="#">Início</a></li>
                                <li><a href="#prepare">Prepare a sua escola</a></li>
                                <li><a href="#contact">Contato</a></li>
                                <li><div class="button"><a href="#">Quero na minha escola</a></div></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
{/*============================================================ BANNER ============================================================*/}
            <section id="banner">
                <div class="container">
                    <div class="banner-content column">
                        <h1>A melhor forma de leitura para os seus alunos começa hoje.</h1>
                        <div class="bar"></div>
                        <p>Com a Semente o incentivo à leitura começa de uma maneira intuitiva e personalizada.</p>
                        <p>Pensado para ser <strong>acessível, divertido e educacional!</strong></p>
                        <div class="banner-options">
                            <div class="banner-options--item"><img src="assets/apple.svg" alt="Baixe na Apple Store"/></div>
                            <div class="banner-options--item"><img src="assets/playstore.svg" alt="Baixe na Play Store"/></div>
                        </div>
                    </div>
                    <div class="banner-thumbnail"><img src="assets/banner-thumbnail.svg" alt="O semente está disponivel em todas as plataformas"/></div>
                </div>
                <div class="mouse"><img src="assets/mouse.svg" alt="Deslize para baixo!"/></div>
            </section>
{/*============================================================ BROTO ============================================================*/}
            <main>
                <div class="container">
                    <div class="broto-thumbnail"><img src="assets/broto-thumbnail.svg"/></div>
                    <div class="broto-content column">
                        <div class="tag">Broto!</div>
                        <div class="bar"></div>
                        <h2>Conheça a primeira metodologia inteligente de incentivo à leitura.</h2>
                        <p>
                            Pensando em uma maneira interativa de mostrar os benefícios da leitura, criamos o Broto. 
                            É ele quem guiará os primeiros passos até o crescimento e desenvolvimento de cada jovem no hábito da leitura. 
                        </p>
                        <p>
                            Com o intuito também de exercitar o senso de responsabilidade, o aluno terá suas próprias metas e será 
                            responsável pelo crescimento do Broto. As formas de incentivo ao conhecimento também podem estar além da leitura.
                        </p>
                        <div class="button"><a href="#">Conheça essa forma de inovação</a></div>
                    </div>
                </div>
            </main>
{/*============================================================ PROMOTION ============================================================*/}
            <section id="promotion">
                <div class="container column">
                    <div class="promotion-headline column">
                        <h1>A Tecnolgia em prol da leitura</h1>
                        <div class="bar"></div>
                    </div>
                    <div class="promotion-cards">
                        <div class="promotion-cards--card column">
                            <div class="promotion-cards--card--thumbnail"><img src="assets/technology.svg" alt="Tecnologia"/></div>
                            <h2>Tecnologia acessível e offline</h2>
                        </div>

                        <div class="promotion-cards--card column">
                            <div class="promotion-cards--card--thumbnail"><img src="assets/intelligent.svg" alt="Inteligente"/></div>
                            <h2>Metodologia inteligente de incentivo a leitura</h2>
                        </div>

                        <div class="promotion-cards--card column">
                            <div class="promotion-cards--card--thumbnail"><img src="assets/reading.svg" alt="Leitura"/></div>
                            <h2>Leitura de forma divertida e interativa</h2>
                        </div>
                    </div>
                </div>
            </section>
{/*============================================================ PREPARE ============================================================*/}
            <section id="prepare">
                <div class="container">
                    <div class="prepare-thumbnail"><img src="assets/prepare-thumbnail.svg"/></div>
                    <div class="prepare-content column">
                        <div class="tag">Prepare a sua escola!!</div>
                        <div class="bar"></div>
                        <h2>Com a semente você terá</h2>
                        <p><strong>+</strong> Parcerias com livrarias e sebos</p>
                        <p><strong>+</strong> Arsenal variado de livros e conteúdos</p>
                        <p><strong>+</strong> Relatórios personalizados dos seus alunos</p>
                        <p><strong>+</strong> Interatividade e acompanhamento do crescimento das turmas</p> 
                        <p>
                            Comece hoje a mudança. Fale com a equipe da Árvore Educação e obtenha essa solução na sua escola. 
                            Diminua agora as barreiras para a educação.
                        </p>
                        <div class="button"><a href="#">Quero o semente na minha escola</a></div>
                    </div>
                </div>
            </section>
{/*============================================================ CONTACT ============================================================*/}
            <section id="contact">
                <div class="container column">
                    <div class="contact-headline column">
                        <h1>Estamos a sua total disposição.</h1>
                        <div class="bar"></div>
                    </div>
                    <div class="contact-content column">
                        <div class="contact-content--info">
                            <p>Este é o seu canal direto com nossa equipe.</p>
                            <p>Você também pode enviar um e-mail para:</p>
                            <strong>suporte@semente.com.br</strong>
                        </div>
                        <div class="contact-content--form">
                            <form method="POST" action="">
                                <div class="contact-content--form--item-headline">
                                    <div class="contact-content-form--item column">
                                        <label for="name">Nome:</label>
                                        <input id="name" name="name" type="text" placeholder="Digite seu nome aqui..."/>
                                    </div>
                                    
                                    <div class="contact-content-form--item column">
                                        <label for="assunto">Assunto:</label>
                                        <select id="assunto">
                                            <option>Dúvida</option>
                                            <option>Reclamação</option>
                                            <option>Sugestão</option>
                                            <option>Pedido</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="contact-content-form--item column">
                                    <label for="name">Mensagem:</label>
                                    <textarea id="message" placeholder="Digite sua mensagem aqui..."></textarea>
                                </div>
                                
                                <div class="button"><a href="#">Enviar Mensagem</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
{/*============================================================ FOOTER ============================================================*/}
            <footer>
                <div class="container column">
                    <div class="footer-main">
                        <div class="footer-main--logomarca">
                            <img src="assets/logomarca-negative.svg" alt="Logomarca"></img>
                            <p>A melhor forma de leitura para os seus alunos começa hoje.</p>
                        </div>
                        <div class="footer-main--menu">
                            <nav>
                                <ul>
                                    <li><a href="#">Início</a></li>
                                    <li><a href="#prepare">Prepare a sua escola</a></li>
                                    <li><a href="#contact">Contato</a></li>
                                    <li><div class="button"><a href="#">Quero na minha escola</a></div></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="footer-copy">© Copyright 2020. Todos os direitos reservados.</div>
                </div>
            </footer>
        </div>
    );
}