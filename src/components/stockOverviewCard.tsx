import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

type StockOverviewCardType = {
    
}

export default function StockOverviewCard() {
    const max:number = 100;
    const length:number = 50;
    const stockName:string = '一只垃圾股票';
    const timeIndex:Array<number> = Array.from({ length: length }, (_, index) => index + 1);
    const todayTrend:Array<number> = Array.from({ length }, () => Math.floor(Math.random() * max));

    const chartWidth:number = 400;
    const chartHeight:number = chartWidth / 1.618;

    return (
        <>
        <Box sx={{ width: chartWidth, height: chartHeight }}>
        <LineChart
            series={[
            { data: todayTrend, label: stockName, yAxisId: 'leftAxisId' },
            ]}
            xAxis={[{ scaleType: 'point', data: timeIndex, height: 28 }]}
            yAxis={[
            { id: 'leftAxisId', width: 50 },
            ]}

            width={chartWidth}
            height={chartHeight}
        />
        </Box>

                <Box sx={{ width: chartWidth, height: chartHeight }}>
        <LineChart
            series={[
            { data: todayTrend, label: stockName, yAxisId: 'leftAxisId' },
            ]}
            xAxis={[{ scaleType: 'point', data: timeIndex, height: 28 }]}
            yAxis={[
            { id: 'leftAxisId', width: 50 },
            ]}

            width={chartWidth}
            height={chartHeight}
        />
        </Box>
        </>
    )
}