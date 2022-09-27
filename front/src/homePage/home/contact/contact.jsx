import React from 'react'
import './contact.css'
 
export default function Contact() {
  return (
    <div className='contactPage'>
        <h2>Envoyez-nous un message</h2>
        <div style={{display:'block',justifyItems:'center',border:'solid rgba(255, 173, 0, 0.15) 1em',width:'90%',margin:'auto',paddingTop:"5em",paddingBottom:'3em'}}>
        <div className="ContactContainer" >
            <div className="personalInfoForm" >
                <div>
                    <input type="text"  placeholder='Nom'/>
                </div>
                <div>
                    <input type="text"  placeholder='Prenom'/>
                </div>
                <div>
                    <input type="email"  placeholder='Email'/>
                </div>
            </div>
            <div className="messageForm">
                <textarea name="Message" id="" placeholder='Message'></textarea>
            </div>
            

        </div>
        <button type="submit" >Envoyer</button>
        </div>
    </div>
  )
}
