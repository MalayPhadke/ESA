import React from 'react'
import '../../App.css';
import AboutUs from '../AboutUs';
import Banner from '../Banner';
import Cards from '../Cards';
import Contact from '../Contact';
import Team from '../Team';

function Home(props) {
  return (
    <>
      {props.renderTeam ? <Team setRenderTeam={props.setRenderTeam}/> :
        <>
        <Banner />
        <AboutUs />
        <Cards />
        <Contact />
        </>
      }
    </>
  )
}

export default Home