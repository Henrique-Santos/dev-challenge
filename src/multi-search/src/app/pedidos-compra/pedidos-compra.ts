export interface PedidosCompra {
    PurchaseOrderID: number,
    DeliveryDate: Date,
    Supplier: string,
    MaterialID: string,
    MaterialName: string,
    Quantity: number,
    TotalCost: number
}