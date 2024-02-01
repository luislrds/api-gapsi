
// Priciple Interface Segregation Principle (ISP)
export interface IResponse<T>{
    data: T;
    limit?: number;
    offset?: number;
    length?: number;
}