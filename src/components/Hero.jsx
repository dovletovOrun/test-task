import React from 'react'
import img from '../img/hero-img.png';
import FormInput from './FormInputs/FormInput';



const Hero = () => {
    const [openOne, setOpenOne] = React.useState(false)
    const [openTwo, setOpenTwo] = React.useState(false)

  return (
    <section className='hero'>
        <div className='hero-main'>
            <div className="hero-container">
                <div className="hero-container-text">
                    <div className="hero-title">
                        <h1>Become front end developer</h1>
                    </div>
                    <div className="hero-subtitle">
                        <span>Sign in to our comcommunity</span>
                    </div>
                    <div className="hero-btns">
                        <button onClick={() => setOpenTwo(true)} className='sign-in'>Sign-in</button>
                        <button onClick={() => setOpenOne(true)} className='sign-up'>Sign-up</button>
                    </div>
                </div>
                <div className={`signInModal active ${openTwo ? 'show' : ''}`}>
                    <div className="signIn-modal-item">
                        <div className='sign-in-text'>
                            To verify you account first Sign-up
                        </div>
                        <button className='formBtnSignIn' onClick={() => setOpenTwo(false)}>Start</button>
                    </div>
                </div>
                <div className={`signUpModal active ${openOne ? 'show' : ''}`}>
                    <div className="signUp-modal-item">
                        <FormInput setOpenOne={setOpenOne}/>
                        <button className='formBtn' onClick={() => setOpenOne(false)}>Submit</button>
                    </div>
                </div>

                <div className="hero-container-img">
                    <img src={img} alt="hero" />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Hero