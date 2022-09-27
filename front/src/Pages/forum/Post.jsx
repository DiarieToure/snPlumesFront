import React from 'react'
import './forum.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

const Post=({post})=> {

    const [commentaires, setCommentaires] = useState(null);
    const [visible,setVisible]=useState(false);

    useEffect(() => {
      axios.get("http://localhost:8000/api/comments")
      .then( res => console.log(res.data.comments) )
    }, [])
 
  return (
    <div className="postContainer" key='key'>
        <div className="imgAndPost">
            <div className="postInfo" >
                {post.image && <img src={post.image} alt="postImage" style={{marginBottom:'1em', maxWidth: '600px', width:'25%',float:'left',clear:'both', marginRight:'10%'}} />}

                <div className="postTime">
                    <div><span>05/07/2022   |</span>  <span>Diarie Toure</span> </div>
                </div>
                <div className="postDesc">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>        
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
