import React from 'react'
import './forum.css'
import { useState } from 'react';
import List from './List';

const Post=({list})=> {

   
    const [visible,setVisible]=useState(false);
 
  return (
    <div className="postContainer" key='key'>
        <div className="imgAndPost">

            <div className="postInfo" >
                <img src="../../images/poule3.jpg" alt="postImage" style={{marginBottom:'1em',width:'25%',float:'left',clear:'both', marginRight:'10%'}} />

                <div className="postTime">
                    <div><span>05/07/2022   |</span>  <span>Diarie Toure</span> </div>
                </div>
                <div className="postDesc">
                    <h3>test</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun</p>
                
                                    
                    </div>
            </div>
        
        </div>
        <div className="postComment" id='comnts' >

            <div className='commentaire' >
                <span><img src="../../images/logo.png" alt="postComment" style={{width:'20px'}} /></span>
                <span className="comment" style={{cursor:'pointer'}} 
                onClick={(event)=>{event.preventDefault(); setVisible(!visible)}} >Commentaires</span>

                {visible && <div className="commentContainer" >
                    <div className="responseComment">
                        <div className="commentTime">
                            <div>
                                <span>05/07/2022   |</span>  <span style={{color:'black'}}>Diarie Toure  </span> <span>#categorie: plumage</span>
                            </div>
                        </div>
                        <div className="commentDesc">
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun
                                Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>

                        <div className="commentInput">
                            <form method='POST'>
                                <div>
                                    <div>
                                        <textarea name="postComment" id="commenting" placeholder='Votre commentaire'></textarea>
                                        <label htmlFor="image"  ></label>
                                        <input type="file" name='inputimage' alt='inputImage' placeholder='choisir image' id='fileImage' />
                                    </div>
                                    <div>
                                        <button type="submit" >Commenter</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>}
            </div>

        </div>
    </div>

  )
}
export default Post;
