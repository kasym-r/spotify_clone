import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

//Styles
import "./Header.scss"

const Header = () => {
  const [nextStatePath, setNextStatePath] = useState([])
  const [active, setActive] = useState({
    prev: false,
    next: false
  })

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (window.history?.state?.idx && nextStatePath?.length) {
        setActive({
            prev: true,
            next: true
        })
    } else if (window.history?.state?.idx) {
        setActive({
            prev: true,
            next: false
        })
    } else {
        setActive({
          prev: false,
          next: true
        })
    }
  }, [location.pathname])

  const handleNext = () => {
    if (active.next && nextStatePath.length) {
      navigate(nextStatePath[0])
      setNextStatePath(nextStatePath.filter((url, idx) => {
        if (idx !== 0) {
          return url
        }
        return
      }))
    }
  }

  const handlePrev = () => {
    if (active.prev) {
      setNextStatePath([...nextStatePath, location.pathname])
      navigate(-1)
    }
  }

  return (
    <div className='header'>
      <div className='header__arrows'>
        <div 
        className={
            `header__arrows__prev ${active.prev ? "active" : ""}`
        }>
            <MdOutlineArrowBackIosNew onClick={handlePrev} />
        </div>
        <div 
        className={
            `header__arrows__next ${active.next ? "active" : ""}`
        }>
            <MdOutlineArrowForwardIos onClick={handleNext} />
        </div>
      </div>
      <div className="header__btn">
        <button>Зарегистрироваться</button>
        <button>Войти</button>
      </div>
    </div>
  )
}

export default Header