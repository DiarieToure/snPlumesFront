import React from 'react'
import './contact.css'
 
export default function Contact() {
  return (
    <div>
        <h2>Envoyez-nous un message</h2>
        <div style={{display:'block',justifyItems:'center',border:'solid rgba(255, 173, 0, 0.15) 1em',width:'87%',margin:'auto',paddingTop:"5em",paddingBottom:'3em'}}>
        <div className="ContactContainer" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'75%',margin:'auto'}}>
            <div className="personalInfoForm" style={{display:'block'}}>
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
        <button type="submit" style={{width:'10em',marginLeft:'40%',marginTop:'15px'}}>Envoyer</button>
        </div>
    </div>
  )
}
