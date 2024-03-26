const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const initialBatteriesValue = 0;

const totalBatteries = batteryBatches.reduce(
    (accum, currentValue) => accum + currentValue,
    initialBatteriesValue,
);

console.log(`Battery Amount: ${totalBatteries}`);
