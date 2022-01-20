import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardPequeno

          imagem="https://s.manualdousuario.net/wp-content/uploads/2018/02/Logo-do-Gmail-960x540.png"
          nome="Nome: Victor Simões Urtiga Xavier"
          email="e-mail"
          texto="vsux17@gmail.com"
        />
        <CardPequeno
        imagem="https://w7.pngwing.com/pngs/453/571/png-transparent-location-marker-logo-picture-material-creative-logo-logo-image.png"
  texto="Rua professora Maria Lianza,185, João Pessoa,Paraíba"
  />
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Sobre mim"
          descricao="Oi, eu sou Victor Simões. Sou estudante da Labenu. Sou apaixonado por tecnologia desde o primeiro dia que a descobri, conheci o mundo da programação em 2020, mas so em 2021 resolvi trazer isso para minha vida, através de um amigo que me apresentou ao mundo da programação e desde então amo esse mundo cada vez mais. "
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Minha História"
          descricao="Trabalhei 3 anos no comercio da minha cidade, como vendedor balconista,isso me ensinou muito sobre trabalho em equipe e como me comunicar com as pessoas, ganhei maturidade profissionale vi ali que gostava de resolver os problemas das pessoas, além disso ja fui cozinheiro e auxiliar contábil. Mesmo trabalhando nesses setores nunca me distanciei do mundo da tecnologia, sempre curioso com tudo que acontecia no undo da tecnollogia.   "
        />

        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eb17dfd4a07be86d2b8951e_Labenu_principal_slogan.png"
          nome="Labenu"
          descricao="Hoje tenho projetos em andamento na Labenu, onde faço meu curso de programação."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s180-rw"
          texto="WatsApp"
        />
        <ImagemButton
          imagem="https://scontent.fjpa11-1.fna.fbcdn.net/v/t39.30808-6/267422938_4880673518668256_5792791296770782057_n.png?_nc_cat=108&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IG8lWbGyo04AX9p-mMn&_nc_ht=scontent.fjpa11-1.fna&oh=00_AT_vlpcPKxX7iQO8pmWV111Dd7KpwpEbvtl-WTLKwMD-hw&oe=61E2FBE9"
          texto="Linkdin"
          
        />
      </div>
    </div>
  );
}

export default App;
