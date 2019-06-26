import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Images */
import up from './images/up.svg';
import upClicked from './images/up-clicked.svg';
import down from './images/down.svg';
import downClicked from './images/down-clicked.svg';

const App = () => {
    const [ups, setUps] = useState({ votes: 0, status: false });
    const [downs, setDowns] = useState({ votes: 0, status: false });

    /* change colors */
    const resetUp = () => {
        setUps({ votes: ups.votes - 1, status: false })
        document.querySelector('#upIcon').setAttribute('src', up);
        document.querySelector('#upText').style.color = "#000000";
    }

    const activateUp = () => {
        setUps({ votes: ups.votes + 1, status: true });
        document.querySelector('#upIcon').setAttribute('src', upClicked);
        document.querySelector('#upText').style.color = "#00FF85";
    }

    const resetDown = () => {
        setDowns({ votes: downs.votes - 1, status: false });
        document.querySelector('#downIcon').setAttribute('src', down);
        document.querySelector('#downText').style.color = "#000000";
    }

    const activateDown = () => {
        setDowns({ votes: downs.votes + 1, status: true });
        document.querySelector('#downIcon').setAttribute('src', downClicked);
        document.querySelector('#downText').style.color = "#FF007A";
    }

    const handleUpvote = () => {
        if(downs.status === true) {
            resetDown();
        }

        if(ups.status === false) {
            activateUp();
        } else if (ups.status === true) {
            resetUp();
        }
    }

    const handleDownvote = () => {
        if(ups.status === true) {
            resetUp();
        }

        if(downs.status === false) {
            activateDown();
        } else if (downs.status === true) {
            resetDown();
        }
    }

    return (
        <div className="main-container">
            <h1>Duimpjestest</h1>
            <div className="thumb-container">
                <img id="upIcon" src={up} onClick={() => handleUpvote()}/>
                <p id="upText">{ups.votes}</p>
                <img id="downIcon" src={down} onClick={() => handleDownvote()}/>
                <p id="downText">{downs.votes}</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
