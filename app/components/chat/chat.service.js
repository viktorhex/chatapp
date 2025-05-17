'use strict';

angular
    .module('chat')
    .service('ChatService', ['$timeout', function ($timeout) {
        var messages = [];
        var stompClient = null;

        this.getMessages = function () {
            return messages;
        };

        this.addMessage = function(messageText, sender) {
            if (messageText && messageText.trim()) {
                var senderId = sessionStorage.getItem('senderId');
                if (!senderId) {
                    senderId = 'user-' + Math.random().toString(36).substr(2, 9);
                    sessionStorage.setItem('senderId', senderId);
                }
                stompClient.send('/app/chat', {}, JSON.stringify({
                    text: messageText,
                    timestamp: new Date().toISOString(),
                    sender: senderId
                }));
            }
        };

        this.connect = function () {
            var socket = new SockJS('http://localhost:8080/websocket');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function (frame) {
                stompClient.subscribe('/topic/chat', function (message) {
                    var msg = JSON.parse(message.body);
                    var senderId = sessionStorage.getItem('senderId');
                    var isCurrentUser = msg.sender === senderId;
                    $timeout(function () {
                        messages.push({
                            text: msg.text,
                            timestamp: msg.timestamp,
                            sender: msg.sender,
                            isCurrentUser: isCurrentUser
                        });
                    }, 0);
                });
            }, function (error) {
                console.error('Connection error:', error);
            });
        };

        this.connect();
    }]);