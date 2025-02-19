import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer'; // Importe o componente Footer
import './App.css'; // Importe o arquivo de estilos

function App() {
  const [activeConcept, setActiveConcept] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu sanduíche

  const concepts = [
    {
      title: 'Variáveis',
      description: 'Variáveis são usadas para armazenar dados que podem ser alterados durante a execução do programa. Em React, variáveis são frequentemente usadas para armazenar estados ou props.',
      example: 'Exemplo: `const [count, setCount] = useState(0);`',
    },
    {
      title: 'Funções',
      description: 'Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Em React, funções são usadas para criar componentes funcionais e manipular eventos.',
      example: 'Exemplo: `function handleClick() { alert("Clicado!"); }`',
    },
    {
      title: 'Condicionais',
      description: 'Condicionais permitem que você execute diferentes blocos de código com base em uma condição. Em React, condicionais são usadas para renderizar componentes ou elementos de forma dinâmica.',
      example: 'Exemplo: `{isLoggedIn ? <WelcomeMessage /> : <LoginButton />}`',
    },
    {
      title: 'Loops',
      description: 'Loops são usados para repetir uma ação várias vezes. Em React, loops são frequentemente usados para renderizar listas de elementos.',
      example: 'Exemplo: `{items.map((item) => <li key={item.id}>{item.name}</li>)}`',
    },
    {
      title: 'React (Framework)',
      description: 'React é uma biblioteca JavaScript para construir interfaces de usuário. Ele permite criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.',
      example: 'Exemplo: `ReactDOM.render(<App />, document.getElementById("root"));`',
    },
    {
      title: 'Componentes',
      description: 'Componentes são blocos de construção reutilizáveis em React. Eles podem ser funcionais ou baseados em classes e permitem dividir a interface em partes menores e gerenciáveis.',
      example: 'Exemplo: `function MyComponent() { return <div>Meu Componente</div>; }`',
    },
    {
      title: 'Estado (State)',
      description: 'Estado é um objeto que armazena dados que podem mudar ao longo do tempo e afetar a renderização do componente. Em React, o estado é gerenciado com o hook `useState`.',
      example: 'Exemplo: `const [count, setCount] = useState(0);`',
    },
    {
      title: 'Props',
      description: 'Props (propriedades) são usadas para passar dados de um componente pai para um componente filho. Elas são imutáveis e ajudam a criar componentes dinâmicos e reutilizáveis.',
      example: 'Exemplo: `<MyComponent name="João" />`',
    },
  ];

const renderPage = () => {
  switch (currentPage) {
    case 'about':
      return <About />;
    case 'contact':
      return <Contact />;
    case 'home':
    default:
      return (
        <>
          <h1>Aprendendo React</h1>
          <p>Passe o mouse sobre os conceitos para saber mais:</p>
          <ul>
            {concepts.map((concept, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveConcept(index)}
                onMouseLeave={() => setActiveConcept(null)}
              >
                <strong>{concept.title}</strong>
                {activeConcept === index && (
                  <div className="concept-details">
                    <p>{concept.description}</p>
                    <p><em>{concept.example}</em></p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      );
  }
};

return (
  <div className="App">
    {/* Menu Sanduíche */}
    <div className="menu-container">
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <ul className="menu-items">
          <li onClick={() => { setCurrentPage('home'); setMenuOpen(false); }}>
            <i className="fas fa-home"></i> Home
          </li>
          <li onClick={() => { setCurrentPage('about'); setMenuOpen(false); }}>
            <i className="fas fa-info-circle"></i> Sobre
          </li>
          <li onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }}>
            <i className="fas fa-envelope"></i> Contato
          </li>
          <li>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-book"></i> Documentação
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Conteúdo da Página */}
    <div className="content">{renderPage()}</div>
    {/* Rodapé */}
    <Footer />
  </div>
);
}

export default App;