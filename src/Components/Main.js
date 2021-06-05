import React from 'react'; 
import '../Scss/Main.scss';
import logo from '../Assets/logo.png';
import playicon from '../Assets/playIcon.png';
import playIconForButton from '../Assets/playIcon.svg';
import { Link } from 'react-router-dom';

const Main = (props) => {

  const Header = () => {
    return ( 
      <header>
        <Link to='/'>
          <img 
            src={logo}
          />
        </Link>
        <h3>MENU</h3>
      </header>
    )
  }

  const Footer = () => {
    return ( 
      <footer>
        <div id='programs'>
          <div id='programTitle'>
            <span>Matthew 18:20</span>
            <p>
            ...For where two or three gather in my name, there am I with them."
            </p>
          </div>
          <div id='programButton'>
            <Link to='programs' id='programLink'>
              <img src={playicon} />
              <p>See Our Programs</p>
            </Link>
          </div>
        </div>

        <div id='newsletter'>
          <div id='heading'>
            <h2>
              can i write you a letter?
            </h2>
            <p>
            every week, I want to send you a letter from my heart. Something you can read in less than 20mins but will stay with you for longer
            </p>
          </div>

          <form>
            <div>
              <input placeholder='YOUR EMAIL'/>
              <div id='sendButton'>
                <img src={playIconForButton} />
              </div>
            </div>
            <p>*your email is safe with me.</p>
          </form>
        </div>

        <div id='mainFooter'>
          <div id='footerImg'>
          </div>
          <div id='footerBoxes'>
            <div id='footerLogo'>

            </div>

            <div className='footerBox'>
              <h3>contact</h3>
              <a href='https://hey.com'>- Send us an email</a>
              <a href='https://hey.com'>- Give us a call</a>
            </div>

            <div className='footerBox'>
              <h3>our offerings</h3>
              <a href='https://hey.com'>- for parent carers</a>
              <a href='https://hey.com'>- for churches</a>

              <a href='https://hey.com'>- training and resources</a>
            </div>

            <div className='footerBox'>
              <h3>about OAK</h3>
              <a href='https://hey.com'>- our story</a>
              <a href='https://hey.com'>- abigail's story</a>
              <a href='https://hey.com'>- make a donation</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return ( 
    <div id='mainpage'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Main;