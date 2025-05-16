'use strict';

angular
    .module('chat')
    .service('ChatService', ['$interval', function ($interval) {
        var messages = [];

        this.getMessages = function () {
            return messages;
        };

        this.addMessage = function (messageText, sender) {
            if (messageText && messageText.trim()) {
                messages.push({
                    text: messageText,
                    timestamp: new Date().toISOString(),
                    sender: sender || 'me'
                });
            }
        };

        this.receiveMessage = function (messageText, sender) {
            if (messageText && messageText.trim() && sender !== 'me') {
                messages.push({
                    text: messageText,
                    timestamp: new Date().toISOString(),
                    sender: sender
                });
            }
        };

        var otherUsers = ['Alice', 'Bob'];
        $interval(function () {
            var sender = otherUsers[Math.floor(Math.random() * otherUsers.length)];
            var texts = ['Hey, how’s it going?', 'Just saw your message!', 'What’s up?'];
            var text = texts[Math.floor(Math.random() * texts.length)];
            this.receiveMessage(text, sender);
        }.bind(this), 5000);
    }]);
