export interface PedidosVenda {
    SalesOrderID: number,
    DeliveryDate: Date,
    Customer: string,
    MaterialID: string,
    MaterialName: string,
    Quantity: number,
    TotalValue: number
}