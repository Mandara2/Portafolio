import React from 'react'

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Rafael Medina
            <i src="src/assets/hand.svg" alt="" />
        </h1>
        <h3 className="home__subtitle">Fullstack Developer</h3>
        <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis</p>

        <a href="#contact" className="button button--flex">
            Say Hello
            <img src="src/assets/send.svg" alt="" className="button__icon" />
        </a>
    </div>
  )
}

export default Data;