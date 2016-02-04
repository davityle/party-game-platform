var GameBanner = React.createClass({
   render: function() {
	   var game = this.props.game;
	   return (
		   <div className="banner">
			   <GameIcon game={game} color={"white"} size="small"/>
		   </div>
	   );
   }
});

var GameLobby = React.createClass({
    render: function() {
    	var game = this.props.game;
		var title = this.props.title;
		var description = this.props.description;

		var clickCancel = function() {
			ReactDOM.render(<GameSelectMenu />, document.getElementById('pg-app'));
		};

        return (
			<BackgroundColor game={game}>
	        	<LobbyContainer game={game} color="color">
					<GameIcon size="large"  game={game} color="white"/>
					<h1>{title}</h1>
					<h2>{description}</h2>
					<LobbyButton game={game} icon={"create"} text={"create"}/>
					<LobbyButton game={game} icon={"join"} text={"join"}/>
					<LobbyButton game={game} hollow="white" text={"cancel"} handleClick={clickCancel}/>
	        	</LobbyContainer>
			</BackgroundColor>
	    );
    }
});
