import React from "react";
import self from '../img/self2.jpg';

// Hi, this is information am going to use in this portfolio project. Happy codding!

export let colors = ['rgba(243, 181, 156, 0.2)' , 'rgb(243, 191, 156)'];


// info section 

export const info = {
    firstName: 'Dieudonne',
    lastName: ' Hagenimana',
    initials:'hd',
    position:'FullStack Developer',
    selfPortrait: self,
    gradient:`linear-gradient(135deg, ${colors})`,
    miniBio:[
        ['🍺', 'Fueled with Coffee'],
        ['RW',' based in Rwanda'],
        ['💼', 'junior web developer'],
        ['📧', 'dhagenimana498@gmail.com'],
    ],
    socials:[
        ["https://web.facebook.com/profile.php?id=100006387137613", facebookIcon()],
        ["https://www.instagram.com/", instagramIcon()],
        ["https://www.linkedin.com/in/dieudonne-developer/", linkedInIcon()],
        ["https://github.com/Dieudonnee", githubIcon()]

    ],
    bio:"Hello! I'm Dieudonne. I believe digital presence can change things. I'am a good Web developer, Web designer and web content creator.    You should hire me! ",
    hobbies:[
        ['💼', 'Junior web Developer in Mern-Stack'],
        ['📚', 'highly motivated and fast leaner'],
        ['🤝', 'Good collaboration'],
        ['📩', 'I here for you!']
    ],
    portfolio:[
        {
            title: "project 1",
            liveLink:'https://paytonjewell.dev',
            sourceLink:"https://paytonjewell.dev",
        },
        {
            title: "project 2",
            liveLink:'https://paytonjewell.dev',
            sourceLink:"https://paytonjewell.dev",
        
        },
        {
            title: "project 3",
            liveLink:'https://paytonjewell.dev',
            sourceLink:"https://paytonjewell.dev",
        
        },
        {
            title: "project 4",
            liveLink:'https://paytonjewell.dev',
            sourceLink:"https://paytonjewell.dev",
        
        }
    ]
}

// social links

function facebookIcon(){
    return <i className="fa fa-facebook" aria-hidden ="true"/>
};
function instagramIcon(){
    return <i className="fa fa-instagram" aria-hidden ="true"/>
};
function linkedInIcon(){
    return <i className="fa fa-linkedin" aria-hidden ="true"/>
};
function githubIcon(){
    return <i className="fa fa-github" aria-hidden ="true"/>
};