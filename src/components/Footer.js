import React from 'react'
import Style from './footer.module.scss'
import classNames from 'classnames'

export default function Footer() {
  return (
    <footer className={classNames(Style.footer)}>
              <p><a target="_blank" href='https://www.linkedin.com/in/dieudonne-developer/' rel="noopener noreferrer">Template made with &hearts; by Dodos</a></p>
              <p>&copy; 2022</p>
          </footer>
  )
}
