const Categoria = require('./categoriaModel');
const Producto = require('./productoModel');
const Compra = require('./compraModel');
const Role = require('./rolModel');
const Detalle = require('./detalleVentaModel');
const Egreso = require('./egresoModel');
const Ingreso = require('./ingresoModel');
const Proveedor = require('./proveedorModel');
const Usuario = require('./usuarioModel');
const Venta = require('./ventaModel');
const DetalleCompra = require('./DetalleCompra');
const Inventario = require('./inventarioModel');
const Caja = require('./cajaModel');
const ContraCaja = require('./contraCajaModel')
module.exports = {
    Compra,
    Role,
    Producto,
    Detalle,
    Egreso,
    Ingreso,
    Proveedor,
    Usuario,
    Venta,
    DetalleCompra,
    Inventario,
    Caja,
    ContraCaja,
    Categoria
}