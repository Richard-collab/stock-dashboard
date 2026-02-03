// test code
import { singleStock } from "./singleStock";

const myStock:string = 'sh518880';

const mySingleStock = new singleStock(myStock);

const result = await mySingleStock.getTodayTrend();

console.log(typeof(result));

console.log(result);

console.log(result.changePercent);
