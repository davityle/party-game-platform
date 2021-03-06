
var GameCreator = React.createClass({
    render: function() {
    	var game = this.props.game;
		var title = this.props.title;
		var description = this.props.description;

		var clickCancel = function() {
			ReactDOM.render(<GameLobby game={game} title={title} description={description} />, document.getElementById('pg-app'));
		};

        var clickCreate = function() {
            Api.createGame(game, function(data) {
                ReactDOM.render(<GameCreatedSuccess game={game} title={title} gameCode={data.game_instance_id} />, document.getElementById('pg-app'));
            });
        };


        return (
	        <div>
				<GameBanner game={game} />
				<LobbyContainer game={game} color="color">
					<div className="container">
						<h1 className="create-game">create game</h1>
						<LobbyForm game={game} instructions="enter your name"/>
						<h3 className="create-game">select your color</h3>
						<LobbyButton game={game} text={"create"} handleClick={clickCreate} />
						<LobbyButton game={game} hollow="color" text={"cancel"} handleClick={clickCancel} />
					</div>
				</LobbyContainer>
	        </div>
	    );
    }
});

var GameCreatedSuccess = React.createClass({
	render: function() {
		var game = this.props.game;
		var title = this.props.title;
		var description = this.props.description;
		var gameCode = this.props.gameCode;

		var clickCancel = function() {
			ReactDOM.render(<GameLobby game={game} title={title} description={description} />, document.getElementById('pg-app'));
		};

		return (
			<div>
				<GameBanner game={game} />
				<LobbyContainer game={game} color="color">
					<div className="container">
						<h1 className="success">success!</h1>
						<h3 className="success">{"Your " + title + " game was successfully created.  Give friends access with the following code:"}</h3>
						<h1 className="game-code">{gameCode}</h1>
					</div>
				</LobbyContainer>
			</div>
		);
	},
	componentDidMount: function() {
		$("#lobby-banner").css('animation','enterBanner .4s ease-out');
        $('#pg-app').css('animation','enterLeft .2s ease-in');

		window.setTimeout(function(){

			window.location.href = "/game";

		}, 3000);
	}
});