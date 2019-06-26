import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Images */
import up from './images/up.svg';
import down from './images/down.svg';

const App = () => {
    const [upvotes, setUp] = useState(0);
    const [downvotes, setDowns] = useState(0);

    return (
        <div className="main-container">
            <h1>Duimpjestest</h1>
            <div className="thumb-container">
                <img src={up} onClick={() => setUp(upvotes + 1)}/>
                <p>{upvotes}</p>
                <img src={down} onClick={() => setDowns(downvotes + 1)}/>
                <p>{downvotes}</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
