const { Schema, model } = require('mongoose'); // { } desestruturação 
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type:String,
        required: true,
    },
    like: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],

}, {
    timestamps: true, // createdAt => Armazenarde forma automatica a data de criaçaõ , updateAt => Armazenar a data da ultima alteraçã
});

module.exports = model('Dev', DevSchema);