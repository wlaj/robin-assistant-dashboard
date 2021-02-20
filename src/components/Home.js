import React from 'react';
import Header from './Header';

import Container from 'react-bootstrap/Container'

function Home() {
  return (
    <>
      <Header />
      <Container>
      <div class='jumbotron bg-white'>
        <h1 class='display-4'>Hello, we're Robin Assistant</h1>
        <p class='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class='my-4'></hr>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class='lead'>
          <a class='btn btn-primary btn-lg' href='#' role='button'>
            Learn more
          </a>
        </p>
      </div>
      </Container>
    </>
  );
}

export default Home;
