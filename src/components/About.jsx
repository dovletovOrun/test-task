import React from 'react'
import img from '../img/about.png'

const About = () => {
  return (
    <section className='about'>
        <div className='about-main'>
            <div className="about-coloum">
                <div className="about-image">
                    <span><img src={img} alt="about" /></span>
                </div>
                <div className="about-text">
                    <h3>It's a pleasure to meet you!</h3>
                    <p>Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet Lorem ipsum doller amet </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About