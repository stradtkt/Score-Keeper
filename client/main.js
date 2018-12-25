import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';

const renderPlayers = (playersList) => {
    return playersList.map((player) => {
       return <Player key={player._id} player={player}/>;
    });
};

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = "Score Keeper";
        let subtitle = "Created By Kevin Stradtman"
        let jsx = (
            <div>
                <TitleBar title={title} subtitle={subtitle}/>
                {renderPlayers(players)}
               <AddPlayer/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});