'use strict';

angular
    .module('chat')
    .directive('scrollOnNewMessage', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var hasScrolledUp = false;

                element.on('scroll', function () {
                    var el = element[0];
                    var distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
                    hasScrolledUp = distanceFromBottom > 50;
                });

                scope.$watchCollection(attrs.scrollOnNewMessage, function (newVal) {
                    if (newVal && newVal.length) {
                        $timeout(function () {
                            var el = element[0];
                            var isScrollable = el.scrollHeight > el.clientHeight;
                            if (isScrollable && !hasScrolledUp) {
                                el.scrollTop = el.scrollHeight;
                            }
                            hasScrolledUp = false;
                        });
                    }
                });
            }
        };
    }]);