import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

import info from '../public/img/image-03.svg';
import mobileimg from '../public/img/MicrosoftTeams-image.png';
import infodog from '../public/img/Robin_poppetje_eind.png';
import banner from '../public/img/banner-signup.jpg';
import blobs from '../public/img/home-content-header-image.svg';
import outline from '../public/img/image-07.png';
import walking from '../public/img/DailyRoutines-Blue.svg';
import laptop from '../public/img/Dashboard-Blue.svg';
import independence from '../public/img/Independence-Blue.svg';
import autizam from '../public/img/autizam.png';
import foxiko from '../public/img/foxiko.png';
import bb from '../public/img/bb.png';
import trademark from '../public/img/trademark.png';
import ma from '../public/img/mediacollege.png';

import '../public/scss/Home.scss';

function Home() {
  return (
    <>
      <Header />
      <section
        style={{ backgroundImage: 'url(' + blobs + ')' }}
        className='home-content-header'
      >
        <Container>
          <div class='jumbotron medium-text bg-transparent'>
            <p class='lead'>ROBIN ASSISTANT</p>
            <h1 class='display-4'>Assistive software service solution</h1>
            <p>
              For people with special needs and their carers <br></br>performing
              everyday activities.
            </p>
          </div>
        </Container>
      </section>
      <section className='home-content-cards'>
        <Container>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Download the app</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div class='button-group'>
                <Link className='btn btn-outline-primary' to='/signup'>
                  Download
                </Link>
              </div>
            </Card>
          </CardDeck>
        </Container>
      </section>
      <section className='home-content-robin-service'>
        <Container>
          <div class='jumbotron small-text bg-transparent'>
            <div class='service-text'>
              <h1 class='display-4'>What is Robin Service?</h1>
              <p>
                Robin is an assistive software solution that allows carers to
                set up and plan daily activities for the ones they are taking
                care of. <br></br>Robin will then assist the individual in
                performing these activities by providing step-by-step guidance,
                using images, text and audio instructions.
              </p>
            </div>
            <img src={infodog} alt='Information' />
          </div>
        </Container>
      </section>
      <section className='home-content-robin-card-deck'>
        <Container>
        <h1 class='display-6'>Benefits</h1>
          <CardDeck>
            <Card>
              <Card.Img variant='top' src={laptop} />
              <Card.Body>
                <Card.Title>Independence</Card.Title>
                <Card.Text>
                  With the app, people in need of help have more independence
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant='top' src={walking} />
              <Card.Body>
                <Card.Title>Daily routines</Card.Title>
                <Card.Text>
                  Robin has several benefits to make your daily life as comfortable as possible
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant='top' src={laptop} />
              <Card.Body>
                <Card.Title>Dashboard management</Card.Title>
                <Card.Text>
                  With the dashboard, carers can program the person's daily tasks.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </section>
      <section className='home-content-robin-info-card'>
        <Container>
          <Card
            style={{
              backgroundColor: 'black',
              backgroundImage: 'url(' + banner + ')',
            }}
          >
            <Card.Body>
              <Card.Text>
                Did we already convince you? Get Robin Assistant today and start
                helping others.
              </Card.Text>
            </Card.Body>
            <div class='button-group'>
              <Link className='btn btn-primary' to='/signup'>
                Sign up
              </Link>
            </div>
          </Card>
        </Container>
      </section>
      <section className='home-content-robin-service'>
        <Container>
          <div class='jumbotron small-text bg-transparent'>
            <div class='service-text'>
              <h1 class='display-4'>How does it work?</h1>
              <p>
                The service consists of two parts: the online dashboard
                for the carers and the mobile app for the person that
                requires special care.
              </p>
            </div>
            <img src={info} alt='Information' />
          </div>
        </Container>
      </section>
      <section className='home-content-robin-service'>
        <Container>
          <div class='jumbotron small-text bg-transparent'>
            <div class='service-text'>
              <h1 class='display-4'>Online dashboard</h1>
              <p>
                The carer can access Robin through the website www.robinassists.me
                from a computer or any other internet enabled device and log in
                on their personal Dashboard. <br></br>They can program the person's
                tasks for the day, week, or even the entire month, with the option
                to modify them at any time. Also they can configure the order of
                the activities and the duration of each step for one or more persons, for instance.
                <br></br>
                Moreover, they can establish an action for the "panic" button. This action can be calling,
                texting, or sending an email message to a dedicated person (the carer or a relative of the individual)
                directly from the Robin app.
              </p>
            </div>
            <img src={info} alt='Information' />
          </div>
        </Container>
      </section>
      <section className='home-content-robin-service'>
        <Container>
          <div class='jumbotron small-text bg-transparent'>
            <div class='service-text'>
              <h1 class='display-4'>Mobile app</h1>
              <p>
              The activities programmed by the carer in the online dashboard are sent
              to the individual's Robin mobile application. When it is time to perform an activity, the app 
              will notify the individual through an alert or notification. <br></br>This will prompt them to open
              the scheduled activity in the Robin mobile app, which will automatically show every step to follow
              to complete the activity.
              </p>
            </div>
            <img src={mobileimg} alt='Information' />
          </div>
        </Container>
      </section>
      <section className='home-content-robin-partners'>
        <Container>
          <div class='service-text small-text'>
            <h1 class='display-4'>Partners</h1>
          </div>
          <CardDeck>
            <Card>
              <Card.Img variant='top' src={autizam} />
            </Card>
            <Card>
              <Card.Img variant='top' src={foxiko} />
            </Card>
            <Card>
              <Card.Img variant='top' src={bb} />
            </Card>
            <Card>
              <Card.Img variant='top' src={trademark} />
            </Card>
            <Card>
              <Card.Img variant='top' src={ma} />
            </Card>
          </CardDeck>
        </Container>
      </section>
      <section className='home-content-robin-footer'>
        <Container>
          <div class='service-text small-text'>
            <hr></hr>
          </div>
          <Card>
            <Card.Body>
              <Card.Title>Bemika software</Card.Title>
              <Card.Link>
                <div style={{ marginLeft:`3em` }} class='button-group left'>
                  <Link className='' to='/signup'>
                    Terms of service
                  </Link>
                </div>
              </Card.Link>
              <Card.Link>
                <div class='button-group'>
                  <Link className='' to='/signup'>
                    Privacy Policy
                  </Link>
                </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
}

export default Home;
