import React, { useEffect, useState } from 'react';
import './../Styles/comment.css'
const Comment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subscribe, setSubscribe] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Créer un nouvel objet commentaire avec les données du formulaire
        const newComment = {
            author: name,
            content: message,
            date: new Date().toLocaleDateString(),
            imageUrl: 'https://i.imgur.com/CFpa3nK.jpg', // Par défaut, à remplacer par un système de gestion d'image si nécessaire
        };

        
        comments.push(newComment);

       
        setName('');
        setEmail('');
        setMessage('');
        
    };
    const initialComments = [
        
    ];
    
    const [comments, setComments] = useState(initialComments);
    console.log(comments);

    useEffect(()=>{

        


        return ()=>{}
    },[])
    return (
        <div className="container">
            <section>
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-12 pb-4">
                        <h1>Comments</h1>
                        {/* Affichage des commentaires existants */}
                        {comments.map((comment, index) => (
                            <div key={index} className="comment mt-4 text-justify">
                                <div className='comment-block'>
                                    <img src={comment.imageUrl} alt={comment.author} className="rounded-circle" width="40" height="40" />
                                    <h5>{comment.author}</h5>
                                </div>
                                <span>- {comment.date}</span>
                                <br />
                                <p>{comment.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                        
                        <form className='form-comment' onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <h4>Leave a comment</h4>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="5"
                                    className="form-control"
                                    style={{ backgroundColor: 'white' }}
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <button type="submit" className="btn commenter  mt-3">Post Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Comment;
