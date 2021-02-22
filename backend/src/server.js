const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

class App {
    async dbConnect() {
        try{
            await mongoose.connect('mongodb+srv://newuser:newpassword@cluster0.txzku.mongodb.net/omnistack?retryWrites=true&w=majority', {
                useNewUrlParser: true
            })
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
    }
}
/*mongoose.connect('mongodb+srv://newuser:newpassword@cluster0.txzku.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
})*/
server.use(express.json());
server.use(routes);

server.listen(3030);
