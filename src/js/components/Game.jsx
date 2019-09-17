import { hot } from 'react-hot-loader/root';
import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div>Tic Tac Toe</div>
        );
    }
}

export default hot(Game);