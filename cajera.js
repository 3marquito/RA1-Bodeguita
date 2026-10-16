// Capa de Negocio: Algoritmos con COLA (Caja) y PILA (Historial de ventas)

// COLA (FIFO): Primer cliente en llegar, primer cliente en ser atendido en caja
class ColaCajaTambo {
    constructor() {
        this.clientes = [];
    }

    llegarFila(cliente) {
        this.clientes.push(cliente);
        console.log(`[CAJA] Cliente "${cliente}" añadido a la cola.`);
    }

    atenderCliente() {
        if (this.clientes.length === 0) {
            console.log("[CAJA] No hay clientes en espera.");
            return null;
        }
        const clienteAtendido = this.clientes.shift(); // Saca al primero de la cola
        console.log(`[CAJA] Atendiendo al cliente: ${clienteAtendido}`);
        return clienteAtendido;
    }
}

// PILA (LIFO): El último registro de venta realizado es el primero que se revisa/muestra
class PilaHistorialVentas {
    constructor() {
        this.historial = [];
    }

    registrarVenta(venta) {
        this.historial.push(venta); // Inserta arriba de la pila
        console.log(`[VENTA] Venta #${venta.id} registrada correctamente.`);
    }

    verUltimaVenta() {
        if (this.historial.length === 0) return "Sin ventas recientes.";
        return this.historial[this.historial.length - 1]; // Muestra la última venta
    }
}

module.exports = { ColaCajaTambo, PilaHistorialVentas };