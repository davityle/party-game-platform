var broadcastActions = [];

//specific broadcasters

///-------------------start turn stage---------------------///

var broadcastGameWinner = function(user) {
    doBroadcast(makeAction({
        actionType: "game-winner",
        data: {
            client_id: user.id
        }
    }));
};

///-----------------------------roll stage---------------------------///
var broadcastBeginRolling = function () {
    doBroadcast(makeAction({
        actionType: "prompt-roll"
    }));
};


var sendDieToClient = function (id, die) {
    sendActionToClient(id, makeAction({
        actionType: "new-die",
        data: {die: die}
    }));
};

//currently not used
var broadcastDie = function () {
    forEachUser(function (user) {
        sendDieToClient(user.id, copy(user.die));
    });
};

var reportClientRolled = function (user) {
    sendActionToClient(0, makeAction({
        actionType: "client-rolled",
        data: {
            client_id: user.id
        }
    }));
};

//this might not be needed
var broadcastAllClientsDoneRolling = function () {
    doBroadcast(makeAction({
        actionType: "rolling-finished"
    }));
};

///-----------------------------bid stage---------------------------///

var broadcastCurrentTurn = function (user) {
    doBroadcast(makeAction({
        actionType: "prompt-turn",
        data: {
            client_id: user.id
        }
    }));
};

//used on reconnect
var promptCurrentTurn = function () {
    sendActionToClient(state.users[state.currentUserIndex].id, makeAction({
        actionType: "prompt-turn"
    }));
};

var broadcastNewBid = function() {
    doBroadcast(makeAction({
        actionType: "new-bid",
        data: {
            bid: {dieCount: state.bid.dieCount, dieNumber: state.bid.dieNumber}
        }
    }));
};

///-----------------------------show die stage---------------------------///

var broadcastShowDice = function() {
    doBroadcast(makeAction({
        actionType: "reveal-dice"
    }));
};
var broadcastLostDie = function(user) {
    doBroadcast(makeAction({
        actionType: "lost-die",
        data: {
            client_id: user.id
        }
    }));
};


//general broadcasters
var doBroadcast = function (action) {
    broadcastActions.push(action);
    //noinspection JSUnresolvedFunction
    broadcastAction(JSON.stringify(action));
};

var sendActionToClient = function(id, action) {
    sendActionToClients([id], action);
};

var sendActionToClients = function(ids, action) {
    //noinspection JSUnresolvedFunction
    sendAction(JSON.stringify(ids), JSON.stringify(action));
};

