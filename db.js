var MongoClient = require('mongodb').MongoClient;

var state = {
    db: null
};

exports.connect = function(url, done) {
    if (state.db) {
        return done();
    }

    //const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
    const mongoClient = new MongoClient(url, { useNewUrlParser: true });
    mongoClient.connect(function(err, client) {
        if (err) {
            return done(err)
        }
        state.db = client.db('todo_list');
        done();
    })
}

exports.get = function() {
    return state.db;
}