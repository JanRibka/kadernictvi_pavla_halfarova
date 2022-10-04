import { Metric } from 'web-vitals';

const reportHandler = (metric: Metric) => {
  //   console.log(metric);
  const payload = JSON.stringify(metric);
  navigator.sendBeacon("/analytics", payload);
};

export default reportHandler;
