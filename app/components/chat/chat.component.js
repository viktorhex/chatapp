'use strict';

angular
  .module('chat')
  .component('chat', {
    templateUrl: 'components/chat/chat.template.html',
    controller: ['$location', '$scope', '$timeout',
      function ChatController($location, $scope, $timeout) {
        this.messages = [];

        this.addMessage = function(messageText) {
          if (messageText && messageText.trim()) {
            this.messages.push({
              text: messageText,
              timestamp: new Date().toLocaleTimeString()
            });
            this.newMessage = '';
            $timeout(function() {
              const chatMessages = document.querySelector('.chat-messages');
              chatMessages.scrollTop = chatMessages.scrollHeight;
            });
          }
        };

        this.onKeyPress = function(event) {
          if (event.keyCode === 13) {
            this.addMessage(this.newMessage);
          }
        };
      }
    ]
  });
  