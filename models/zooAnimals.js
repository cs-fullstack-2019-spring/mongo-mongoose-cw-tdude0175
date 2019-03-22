var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ZooAnimalSchema = new Schema
({
    animal_id:{type:Number, required:true},
    animal_type: String,
    animal_description:String
});


ZooAnimal = mongoose.model('ZooAnimal',ZooAnimalSchema);


module.exports = (ZooAnimal);