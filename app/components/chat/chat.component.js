'use strict';

angular
  .module('chat')
  .component('chat', {
    templateUrl: 'components/chat/chat.template.html',
    controller: ['$location',
      function ChatController($location) {
        this.messages = [];

        this.addMessage = function (messageText) {
          if (messageText && messageText.trim()) {
            this.messages.push({
              text: messageText,
              timestamp: new Date().toLocaleTimeString()
            });
            this.newMessage = '';
          }
        };

        this.onKeyPress = function (event) {
          if (event.keyCode === 13) {
            this.addMessage(this.newMessage);
          }
        };
      }
    ]
  });