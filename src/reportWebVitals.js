import { getCLS, getFID, getLCP, getTTFB } from 'web-vitals';

function reportWebVitals(reportHandler) {
  getCLS(reportHandler);
  getFID(reportHandler);
  getLCP(reportHandler);
  getTTFB(reportHandler);
};

export default reportWebVitals;
