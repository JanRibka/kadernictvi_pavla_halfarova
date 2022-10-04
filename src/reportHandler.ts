import { ga } from 'react-ga';
import { Metric } from 'web-vitals';

// event values can only contain integers
const getEventValueFromMetric = (metric: Metric) => {
  if (metric.name === "CLS") {
    return Math.round(metric.value * 1000);
  }
  return Math.round(metric.value);
};

const reportHandler = (metric: Metric) => {
  debugger;
  //   console.log(metric);
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: metric.name,
    eventValue: getEventValueFromMetric(metric), // values must be integers
    eventLabel: metric.id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
};

export default reportHandler;
