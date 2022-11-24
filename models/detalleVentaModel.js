const {Schema, model} = require('mongoose');

const detalleSchema = Schema({
    
    cantidad:{
        type: Number,
        default: 1,
        require: true
    },
    precioDetalle: {
        type: Number,
        default: 0,
        require: true
    },
    producto:{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        require: true
    },
    venta:{
        type: Schema.Types.ObjectId,
        ref: 'Venta',
        require: true 
    }



});
detalleSchema.methods.toJSON = function(){
    const { __v, _id,...detalleSchema }=this.toObject();
    detalleSchema.uid = _id
    return detalleSchema;
}

module.exports = model('DetalleVenta',detalleSchema);