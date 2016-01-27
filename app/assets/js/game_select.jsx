var GameIcon = React.createClass({
    render: function () {
        var game = this.props.game;
        return (
            <img src={"/assets/svg/" + game + "_icon_color.svg"}/>
        );
    }
});

var GameTitle = React.createClass({
    render: function () {
        var game = this.props.game;
        var title = this.props.title;
        return (
            <span>{title}</span>
        );
    }
});

var GameChoice = React.createClass({
    handleClick: function (e) {
        //TODO: Replace currently rendering div with <GameLobby /> found in game_lobby.jsx
        //      In node, you would export the module from game_lobby.jsx and include it here
        //      As we are not using node, we'll need to discover an alternative way of doing
        //      this so that we can break up our jsx across multiple files 
        ReactDOM.render(<GameLobby />, document.getElementById('pg-app'));
    },
    render: function () {
        var game = this.props.game;
        var title = this.props.title;
        return (
            <div className={"game-choice-" + game} onClick={this.handleClick}>
                <div className={"game-icon-container"}>
                    <GameIcon game={game}/>
                    <div className="center-span">
                        <h1><GameTitle game={game} title={title}/></h1>
                    </div>
                </div>
            </div>
        );
    }
});

var api = new Rest("localhost", 9000);

var GameSelectMenu = React.createClass({
    getInitialState: function () {
        var me = this;
        // TODO this should probably be passed in through props
        api.all("game_definition").get(function(games) {
            me.setState({"games":games});
        });
        return {"games": []};
    },
    render: function () {
        return (
            <div>
                {
                    this.state.games.map(function (game) {
                        return <GameChoice game={game.id} title={game.title}/>
                    })
                }
            </div>
        );
    }

});

ReactDOM.render(
    <GameSelectMenu />,
    document.getElementById('pg-app')
);