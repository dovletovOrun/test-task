import { useState } from "react"
import React from 'react'

const Faq = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <section className='FAQ'>
        <div className='FAQ-main'>
            <div className='Faq-accordion'>
                <div className="accordion-title">
                    <h1>Frequently Asked Questions</h1>
                    <p>Get answers to common questions about our developing course`</p>
                </div>
                <div className='accordion-element'>
                    {
                        data.map((item, i) => (
                            <div className='accordion-item'>
                                <div className='accordion-title-item' >
                                    <h2>{item.question}</h2>
                                    <span onClick={() => toggle(i)}>{selected === i ? '-' : '+'}</span>
                                </div>
                                <div className={ selected === i ? 'accordion-content show' : 'accordion-content'}>{item.answer}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
    
  )
}

const data = [
    {
        question: "Is this course suitable for beginners?",
        answer: "Yes, our course is suitable for developers of all levels. We have lessons ranging from beginner to advanced, so no matter what your current level of proficiency is, you'll be able to find lessons that are tailored to your needs."
    },
    {
        question: "How long does the course take to complete?",
        answer: "Yes, our course is suitable for developers of all levels. We have lessons ranging from beginner to advanced, so no matter what your current level of proficiency is, you'll be able to find lessons that are tailored to your needs."
    },
    {
        question: "Will I have access to the course materials after I complete the course?",
        answer: "Yes, our course is suitable for developers of all levels. We have lessons ranging from beginner to advanced, so no matter what your current level of proficiency is, you'll be able to find lessons that are tailored to your needs."
    },
    {
        question: "Can I ask questions and get support from the instructors?",
        answer: "Yes, our course is suitable for developers of all levels. We have lessons ranging from beginner to advanced, so no matter what your current level of proficiency is, you'll be able to find lessons that are tailored to your needs."
    },
    {
        question: "Do I need any special equipment to take the course?",
        answer: "Yes, our course is suitable for developers of all levels. We have lessons ranging from beginner to advanced, so no matter what your current level of proficiency is, you'll be able to find lessons that are tailored to your needs."
    }  
]

export default Faq