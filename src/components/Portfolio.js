import React from 'react'
import Style from './Portfolio.module.scss'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'

import ClassNames from "classnames";




export default function Portfolio() {
  return (
  <div className={ClassNames(Style.portfolio)}>
    <div className={ClassNames(Style.card)}>
      <div className={ClassNames(Style.left)}>
      <img src={img1} alt=""/>
      <button className={ClassNames(Style.button)}>
      <a href="gql-cms-blog.vercel.app">Live Demo</a>
      </button>
      <button className={ClassNames(Style.button)}>
      <a href="https://github.com/Dieudonnee/gql_cms_blog">Source code</a>
      </button>

      </div>
      <div className={ClassNames(Style.right)}>
          <h3>CMS_Blog</h3>
          <p> First ReactJs project Typical blog application  where owner can Post article, Moderated user comments etc </p>
          <button>NextJS</button>
          <button>GraphCMS</button>
          <button>TailWindCSS</button>
      </div>
    </div>
    <div className={ClassNames(Style.card)}>
      <div className={ClassNames(Style.left)}>
      <img src={img2} alt=""/>
      <button className={ClassNames(Style.button)}>
      <a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Live Demo</a>
      </button>
      <button className={ClassNames(Style.button)}>
      <a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Source code</a>
      </button>

      </div>
      <div className={ClassNames(Style.right)}>
          <h3>Landing Page/API</h3>
          <p>A web app that consumes cryptocurrenciesAPI: coin Gecki API</p>
          <button>ReactJS</button>
          <button>React API</button>
        
      </div>
    
    </div>
    <div className={ClassNames(Style.card)}>
      <div className={ClassNames(Style.left)}>
      <img src={img3} alt=""/>
      <button className={ClassNames(Style.button)}>
      <a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Live Demo</a>
      </button>
      <button className={ClassNames(Style.button)}>
      <a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Source Code</a>
      </button>

      </div>
      <div className={ClassNames(Style.right)}>
          <h3>Budget App</h3>
          <p> Cash management web app that store data on LocalStorage </p>
          <button>ReactJs</button>
          <button>React contextAPI</button>
         
      </div>
    
    </div>
    <div className={ClassNames(Style.card)}>
      <div className={ClassNames(Style.left)}>
      <img src={img4} alt=""/>
      <button className={ClassNames(Style.button)}>
      <a href="https://budgetapp-nologin-3dpab42dg-dieudonnee.vercel.app/">Live Demo</a>
      </button>
      <button className={ClassNames(Style.button)}>
      <a href="https://github.com/Dieudonnee/Budgetappnologin">Source Code</a>
      </button>

      </div>
      <div className={ClassNames(Style.right)}>
          <h3>Landing page</h3>
          <p>A web app that a business can use to show their services or products.</p>
          <button>ReactJS</button>
          
      </div>
    
    </div>
    
    </div>
    </div>
  )
}
