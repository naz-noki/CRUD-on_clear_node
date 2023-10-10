import mongoose from 'mongoose';

const NamesSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    number: {
        type: Number,
        require: true,
    },
    dicription: {
        type: String,
        require: false,
    },
});

const NamesModel = mongoose.model('Name', NamesSchema); 

export default NamesModel;