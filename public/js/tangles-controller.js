var socket = io();

angular.module('TinCan')
    .controller('TanglesController', tangleCtrl)

function tangleCtrl($scope) {
    var tangleCtrl = this;

    tangleCtrl.tangleList = [];

    function geo_success(position) {
        tangleCtrl.position = position;
        $scope.$apply();
    }

    function geo_error() {
        console.log('error');
    }

    var geo_options = { enableHighAccuracy: true };

    window.navigator.geolocation.watchPosition( geo_success, geo_error, geo_options );

    socket.on('saveCoordinatesSuccess', function(data) {
        tangleCtrl.tangleList.push(data);
        $scope.$apply();
    });

    tangleCtrl.submitTangle = function() {
        console.log(tangleCtrl);

        socket.emit('saveCoordinates', {
            title : tangleCtrl.title,
            location : [
                tangleCtrl.position.coords.latitude,
                tangleCtrl.position.coords.longitude
            ]
        });
    }
};
