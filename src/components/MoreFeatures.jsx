import React from 'react'
import img from '../img/check.svg'
import imgTwo from '../img/moreFeaturesImg.png'

const MoreFeatures = () => {
  return (
    <section className='moreFeatures'>
        <div className='moreFeatures-main'>
            <div className='moreFeatures-coloum'>
                <div className="moreFeatures-text">
                    <h2>What you will learn?</h2>
                    <p>lorem ipsum lorem ipsum</p>
                    <ul>
                        <li><span><img src={img} alt="check-icon" /></span>UX/UI</li>
                        <li><span><img src={img} alt="check-icon" /></span>Front end</li>
                        <li><span><img src={img} alt="check-icon" /></span>Back end</li>
                    </ul>
                </div>
                <div className="moreFeatures-image">
                    <div className='moreFeatures-image-item'>
                        <img src={imgTwo} alt="computer-img" />
                    </div>
                </div>
            </div>

        </div>
    </section>
    
  )
}

export default MoreFeatures