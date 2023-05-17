const { model, Schema } = require('mongoose');

const inmuebleSchema = new Schema({
    piso: Number,
    letra: String,
    extension: Number,
    habitaciones: Number,
    alquilado: Boolean,
    propietario: String,
    email: String
}, { timestamps: true, versionKey: false });

module.exports = model('inmueble', inmuebleSchema);