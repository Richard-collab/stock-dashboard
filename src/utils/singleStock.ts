import StockSDK from "stock-sdk";

export class singleStock {
    stockCode:Array<string>;
    client: StockSDK;

    constructor(stockCode:string) {
        this.stockCode = [stockCode];
        this.client = new StockSDK();
    }

    async getTodayTrend () {
        console.log(this.stockCode[0]);
        if (this.stockCode[0].includes('sh')) {
            return await this.client.getSimpleQuotes(this.stockCode);
        }
    }

}

