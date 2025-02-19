import React from 'react';

function About() {
  return (
    <div className="about">
      <h2>Sobre o Projeto TechInclusão</h2>
      <img
        src="https://via.placeholder.com/400x200" // Substitua pela URL da sua imagem
        alt="TechInclusão"
        style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }}
      />
      <p>
        O projeto TechInclusão tem como objetivo democratizar o acesso ao conhecimento em tecnologia,
        ensinando programação e conceitos de desenvolvimento de software para pessoas de todas as idades e origens.
      </p>
      <p>
        Nosso foco é promover a inclusão digital e capacitar indivíduos para atuarem no mercado de tecnologia.
      </p>
    </div>
  );
}

export default About;