var LobbyLoadingSpinnerDemo = React.createClass({
    render: function() {
	    return (
	    	<div>
	    		<div className={"pg-styleguide-lobby-loading_spinner-container"}>
		    		<div className={"pg-styleguide-subhead"}>lobby loading spinner</div>
		    		<LobbyLoadingSpinner game={"fibbage"}/>
	    		</div>
	        </div>
	    );
    }
});

ReactDOM.render(
    <LobbyLoadingSpinnerDemo />,
    document.getElementById('pg-styleguide-lobby-loading_spinner')
);


var LobbyColorPickerDemo = React.createClass({
    render: function() {
	    return (
	    	<div className={"pg-styleguide-color-picker"}>
	    		<div className={"pg-styleguide-color-picker-container"}>
		    		<div className={"pg-styleguide-subhead"}>lobby color picker</div>
		    		<ColorPicker game={"pirate"} color="color"/>
	    		</div>
	        </div>
	    );
    }
});

ReactDOM.render(
    <LobbyColorPickerDemo />,
    document.getElementById('pg-styleguide-lobby-color_picker')
);


var LobbyCountdownDemo = React.createClass({
    render: function() {
	    return (
	    	<div>
	    		<div className={"pg-styleguide-subhead"}>lobby countdown timer</div>
	    		<br/>
	    		<br/>
	        	<LobbyCountdownTimer game={"pirate"}/>
	        </div>
	    );
    }
});

ReactDOM.render(
    <LobbyCountdownDemo />,
    document.getElementById('pg-styleguide-lobby-countdown')
);




var LobbyButtonsStyleDemo = React.createClass({
    render: function() {
	    return (
	        <div>

	        	{/* Usage for lobby icon buttons */}
	        	<div className={"pg-styleguide-subhead"}>lobby icon buttons</div>

	        	<div className={"pg-styleguide-icon-buttons"}>
		        	<LobbyButton game={"pirate"} icon={"create"} text={"create"}/>
		        	<br/>
		        	<br/>
		        	<LobbyButton game={"pirate"} icon={"join"} text={"join"}/>
	        	</div>
	       
	        	{/* Usage for lobby solid buttons */}
	        	<div className={"pg-styleguide-subhead"}>lobby solid buttons</div>
	        	<div className={"pg-styleguide-solid-buttons"}>
		        	<LobbyButton game={"pirate"} text={"create"}/>
		        	<br/>
		        	<br/>
		        	<LobbyButton game={"pirate"} text={"join"}/>
	        	</div>

	        	{/* Usage for lobby hollow buttons */}
	        	<div className={"pg-styleguide-subhead"}>lobby hollow buttons</div>
	        	<div className={"pg-styleguide-hollow-button-color"}>
					<LobbyButton game={"pirate"} hollow={"color"} text={"create"}/>
				</div>
				<div className={"pg-styleguide-hollow-button-white"}>
					<LobbyButton game={"pirate"} hollow={"white"} text={"create"}/>
				</div>
	        
	        </div>

	    );
    }
});

ReactDOM.render(
    <LobbyButtonsStyleDemo />,
    document.getElementById('pg-styleguide-lobby-buttons')
);





var LobbyFormsStyleDemo = React.createClass({
    render: function() {
	    return (
	        <div>
	        	<div className={"pg-styleguide-subhead"}>lobby forms</div>
	        	<div className={"pg-styleguide-forms"}>
	        		<LobbyForm game={"pirate"} instructions={"enter styleguide text"}/>
	        	</div>
	        </div>

	    );
    }
});

ReactDOM.render(
    <LobbyFormsStyleDemo />,
    document.getElementById('pg-styleguide-lobby-forms')
);

