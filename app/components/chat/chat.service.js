'use strict';

angular
    .module('chat')
    .service('ChatService', function () {
        var messages = [];

        this.getMessages = function () {
            return messages;
        };

        this.addMessage = function (messageText) {
            if (messageText && messageText.trim()) {
                messages.push({
                    text: messageText,
                    timestamp: new Date().toLocaleTimeString()
                });
            }
        };
    });