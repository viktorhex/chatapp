'use strict';

angular
  .module('chat')
  .component('chat', {
    templateUrl: 'components/chat/chat.template.html',
    controller: ['$location', 'ChatService',
      function ChatController($location, ChatService) {
        this.messages = ChatService.getMessages();

        this.onKeyPress = function (event) {
          if (event.keyCode === 13) {
            ChatService.addMessage(this.newMessage);
            this.newMessage = '';
          }
        };
      }
    ]
  });