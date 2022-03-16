import React from 'react'
import {info,colors} from '../Info/info'
import ClassNames from 'classnames'
import Style from './About.module.scss'


export default function About() {
  const iconClass="fa fa-circle";
  let hobbies = info.hobbies;
  function createList(){
    let results=[];
    for(let i=0;i<hobbies.length;i++){
      let value = hobbies[i];
      results.push(
      <li><span aria-label="emoji" role="img" className={Style.emoji}>{value[0]}</span>{value[1]}</li> )
    }
    return results
  }
  return (
    <div className={Style.about}>
    <div className={ClassNames(Style.terminal, Style.shadowed)}>
      <div className={ClassNames(Style.topRow)}>
        <i className={ClassNames(iconClass, Style.red)}/>
        <i className={ClassNames(iconClass, Style.amber)}/>
        <i className={ClassNames(iconClass, Style.green)}/>
      </div>
      <div className={Style.window}>
      <p><span style={{color:colors[1]}}>$</span> cat about {info.firstName.toLocaleLowerCase()} </p>
      <p><span style={{color:colors[1]}}>about {info.firstName.toLocaleLowerCase()} <span className={Style.green}>(master)</span>  $ </span> 
      {info.bio}</p> 
    </div>
    </div>
    

    <div id='bot' className ={ClassNames(Style.terminal, Style.shadowed)}>
      <div className={Style.topRow}>
      <i className={ClassNames(iconClass, Style.red)}/>
        <i className={ClassNames(iconClass, Style.amber)}/>
        <i className={ClassNames(iconClass, Style.green)}/>
      
      </div>
      <div className={Style.window}>
      <p><span style={{color:colors[1]}}> $</span> cd For companies </p>
      <p><span style={{color:colors[1]}}>Companies <span className={Style.green}> looking for </span> $ </span> ls </p> 
      <ul>
        {createList()}
      </ul>
      </div>
    </div>
      
    </div>

    
  )
}
