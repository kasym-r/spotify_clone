import React, { useLayoutEffect } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

//Hooks
import { useTitle } from '../Hooks/useTitle'

//Styles
import './layout.scss'

const MainLayout = ({ children, title}) => {
  const { rename } = useTitle()

  useLayoutEffect(() => {
    if (title) {
      rename(title)
    }
  }, [title])

  return (
    <div className='layout'>
      <div className="layout__sidebar">
        <SideBar />
      </div>
      <div className="layout__content">
        <div className="layout__content__header">
          <Header />  
        </div>

        {children}
      </div>
    </div>
  )
}

export default MainLayout