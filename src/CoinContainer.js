import React, { Component } from 'react';
import {choice} from './helpers';
import Coin from './Coin';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
        {side: "head", imgSrc:"https://www.picclickimg.com/d/w1600/pict/372281016400_/Coin-Magic-Trick-Double-Sided-Quarter.jpg"},
        {side: "tails", imgSrc:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dc61c80b-e2ae-4da0-801e-4c84d7cf91b7/dc7egby-23b23f3b-db59-4e3e-b57f-8b1ada105126.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjNjFjODBiLWUyYWUtNGRhMC04MDFlLTRjODRkN2NmOTFiN1wvZGM3ZWdieS0yM2IyM2YzYi1kYjU5LTRlM2UtYjU3Zi04YjFhZGExMDUxMjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QemscS80d_Q7Ir-sDQ26ZAiiTHIJHbRAzTgpW1tDvsw"}
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "head" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
            }
        })
    }

    handleClick(e){
        this.flipCoin();
    }

    render(){
        return (
            <div className="CoinContainer">
            <h2>Let's flip a coin!</h2>
            {this.state.currCoin && <Coin info={this.state.currCoin}/>}
            <button onClick={this.handleClick}>Flip Me!</button>
            <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads 
            and {this.state.nTails} tails  </p>
        </div>
        );
    }
}
export default CoinContainer;