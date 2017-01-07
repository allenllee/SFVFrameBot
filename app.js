var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "SFVFrameBot",
		password: "oauth:3tw6nmha6doltbq89qbxsa6qecifuw"
	},
	channels: ["SupaAyshun"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
	client.action("SupaAyshun", "Hi, I am SFVFrameBot.");
});

client.on('chat', function(channel, userstate, message, self) {
	if (self) return;

	if(message === "!character") {
		client.action("SupaAyshun", "What character?");
	}
});