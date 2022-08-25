import { Link } from 'react-router-dom';
import classes from './MovieItem.module.css';
import { useState,useEffect } from 'react';
import URLs from '../resources/URLs.json';
const URL = URLs.URL;
function MovieItem(props){
    function addToPlayListHandler(){
        fetch(URL+"users/"+localStorage.getItem("userKey")+".json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var flag = true;
        for (const key in data) {
          if (data[key]["id"] === props.id && data[key]["type"] === props.type) {
            flag = false;
          }
        }
        if(flag){
            fetch(
                URL+"users/"+localStorage.getItem("userKey")+".json",
                {
                  method: "POST",
                  body: JSON.stringify({
                    id:props.id,
                    title:props.title,
                    image:props.image,
                    description:props.description.substring(0,100),
                    type:props.type
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              ).then(() => {
    
                  alert("added successfully");
              });
        }
        else alert("Already in playlist");
    });
        
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("isLoggedIn")==="1")
        setIsLoggedIn(true);
      },[]);
    return <div className={classes.card}>
        <img src={props.image} alt="preview" />
        <h2>{props.title}</h2>
        <p>{props.description.substring(0,100)}</p>
        <p>Rating: {props.rating===0?"N/A":props.rating+"/10"}</p>
        {isLoggedIn && (<div className={classes.itembutton}><button onClick={addToPlayListHandler} className={classes.link}>Add to Playlist</button><Link className={classes.link} to={"watch/"+props.type+"-"+props.id}>Watch Now</Link></div>)}
    </div>;
}

export default MovieItem;