import { Link } from 'react-router-dom';
import classes from './PlayListItem.module.css';

function PlayListItem(props) {
  return (
    <div className={classes.playlist}>
      <div>
        <img src={props.image} alt="logo"></img>
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div>
          <button className={classes.playlink} onClick={()=>props.onRemove(props.id)}>Remove</button>
          <Link className={classes.playlink} to={"watch/"+props.type+"-"+props.id}>Watch</Link>
      </div>
    </div>
  );
}

export default PlayListItem;
