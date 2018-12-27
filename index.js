// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter((driver) => {
    return driver.revenue > revenue;
  });
};

const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map((driver) => {return driver.name});  
};
