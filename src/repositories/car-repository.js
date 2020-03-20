const mongoose = require('mongoose');
const Car = mongoose.model('Car');

exports.get = async() => await Car.find({}, 'model color price').populate('brand', 'name country');

exports.getById = async(id) => await Car.findById(id, 'model color price').populate('brand', 'name country');

exports.create = async(data) => {
    var car = new Car(data);
    await car.save();
}

exports.update = async(id, data) => await Car.findByIdAndUpdate(id, data);

exports.delete = async(id) => await Car.findOneAndRemove(id);