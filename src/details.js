import React from 'react';
import botBattlr from "./media/bot-battlr.mp4";
import fitnessFrenzy from "./media/fitness- frenzy .mp4"
import bankTransactions from"./media/bank-transactions.mp4"
import electroports$pins from "./media/electroports$pins.mp4"
import librarysystem from "./media/librarysystem.mp4"
import pizzarestaurant from "./media/pizzarestaurant.mp4"








export const details={
    firstname:"Joyce",
    lastname:"Mwangi",
    navList:["Home","About","Skills","Work","Contact"],
    scrollPosition:[0,545,1070,1730,3400],
    className:["introDiv","aboutContainer","skillContainer","workDiv","contactDiv"],
    linkedInLink:"https://www.linkedin.com/in/joyce-mwangi-470019235/",
    githubLink:"https://github.com/JOYCEmwangi8880",
    // instagramLink:("@joyleemyles"),
    mailLink:"joycewanguim2020@gmail.com",
    techStack:[
            {
                name:"HTML",
                img:"https://img.icons8.com/color/512/html-5--v1.png"
            },
            {
                name:"CSS",
                img:"https://img.icons8.com/fluency/512/css3.png"
            },
            {
                name:"JavaScript",
                img:"https://img.icons8.com/color/512/javascript.png"
            },
            
            {
                name:"React",
                img:"https://img.icons8.com/office/512/react.png"
            },
            {
                name:"Material UI",
                img:"https://img.icons8.com/color/512/material-ui.png"
            },
           
            {
                name:"Node JS",
                img:"https://img.icons8.com/fluency/512/node-js.png"
            },
            {
                name:"BootStrap",
                img:"https://img.icons8.com/color/512/bootstrap.png",

            },
            {
                name:"Github",
                img:"https://img.icons8.com/glyph-neue/512/github.png"
            },
            {
                "name": "Flask",
                "img": "https://img.icons8.com/ios/452/flask-filled.png"
            },
            {
                "name": "Django",
                "img": "https://img.icons8.com/ios/452/django-filled.png"
            }
            
            
            
           

    ],
    projects:[

        {
            name:"Bot-Battlr",
            github:"https://github.com/JOYCEmwangi8880/Bot-Battlr-code-challenge",
            live:"https://bot-battlr-code-challenge-six.vercel.app/",
            tech:["React","Node JS","REST API","CSS"],
            img:botBattlr,
            description:" An application that allows users to assemble their armies of robots, engage in battles, and manage their robot collection. "
        }, 
        {
            name:"Fitness-Frenzy",
            github:"https://github.com/JOYCEmwangi8880/fitness-frenzy-gym-app-project",
            live:"https://fitness-frenzy-gym-app-project.vercel.app/",
            tech:["React","Node JS","REST API","CSS"],
            img:fitnessFrenzy,
            description:" An application designed to empower individuals of all ages and fitness levels to achieve their health and wellness goals."
        }, 
        {
            name:"Bank of Flatiron",
            github:"https://github.com/JOYCEmwangi8880/react-codechallenge-bank-of-flatiron",
            live:"https://react-codechallenge-bank-of-flatiron.vercel.app/",
            tech:["React","Node JS","Npm","CSS"],
            img:bankTransactions,
            description:" An application that allows users to view, add, and delete transactions."
        }, 
        {
            name:"Elecroports $ Pins",
            github:"https://github.com/Markswell-crypto/ElectroPorts-And-Pins-Front-End",
            live:"https://electroportsandpins.netlify.app/",
            tech:["React","Flask","PostgreSql","CSS", "Boostrap"],
            img:electroports$pins,
            description:" Electroports & Pins is an e-commerce platform that specializes in selling electronic devices, gadgets, and accessories."
        }, 
        {
            name:"library system",
            github:"https://github.com/JOYCEmwangi8880/Library-Management-Web-Application",
            live:"https://dancing-cannoli-cf6533.netlify.app/",
            tech:["React","Flask","PostgreSql","CSS", "Boostrap"],
            img:librarysystem,
            description:" This system is designed to manage books, members, and transactions within a library, it allows a librarian to track books fees and their quantity, books issued to members."
        },
        {
            name:"pizza restaurant",
            github:"https://github.com/JOYCEmwangi8880/Pizza-Restaurants",
            live:"https://pizza-restaurants-tau.vercel.app/",
            tech:["React","Flask","PostgreSql","CSS", "Boostrap"],
            img:pizzarestaurant,
            description:" Allows clients to choose their favourite pizzas from different restaurants"
        },


    ]

}