// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter((driver) => {
    return driver.revenue > revenue;
  });
};
