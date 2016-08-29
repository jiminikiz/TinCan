// var Coordinates = require('./coordinates');
var Tangle = require('../models/tangles');

module.exports = function (socketServer) {
    return (socket) => {
        socket.on('saveCoordinates', (data) => {
            console.log('Data:', data);

            var newTangle = new Tangle(data);

            newTangle.save( (err, data) => {
                if(err) {
                    console.error('Error!'.red.bold, ' Could not save coordinates :(', err);
                    socket.emit('saveCoordinatesError', { message: 'Fuck!', err: err });
                } else {
                    console.info('Saving coordinates was successful');
                    socket.emit('saveCoordinatesSuccess', { message: 'Oh boy! (Mickey)', data: data });
                }
            });
        });
    }
}
