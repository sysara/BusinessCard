 import React from "react"
 
 export default function Body(){
     return (
         <div className="main" >
             <img src="./components/cat-suit.jpg" className="profile-img"/>
                    <h1 className="name">Sara Hany</h1>
                    <h4>Frontend Developer</h4>
                    <a href="" rel=""className="ownwebsite" >Sarahany.website</a>
                        <div className="buttons" >
                            <a href=""><button className="button1" >Email</button></a>
                            <a href=""><button className="button2" >LinkedIn</button></a>
                        </div>
            <div className="about" >            
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h1>Intersts</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div className="Footer" >
                <a href=""><img src="./components/twitter.png"/></a>
                <a href=""><img src="./components/facebook-30.png"/></a>
                <a href=""><img src="./components/instagram.png"/></a>
                <a href=""><img src="./components/github.png"/></a>
            </div>
         </div>
     )
 }