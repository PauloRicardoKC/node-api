const mongoose = require('mongoose');
const Brand = mongoose.model('Brand');

exports.get = async() => await Brand.find({}, 'name country')

exports.getById = async(id) => await Brand.findById(id, 'name country')

exports.create = async(data) => {
    var brand = new Brand(data);
    await brand.save();
}

exports.update = async(id, data) => await Brand.findByIdAndUpdate(id, data);

exports.delete = async(id) => await Brand.findOneAndRemove(id);