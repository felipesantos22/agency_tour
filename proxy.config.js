// const proxy = [
//   {
//     context: ["/api"],
//     target: "https://agency-tour-backend-a10abe72bb88.herokuapp.com",
//     changeOrigin: true,
//     pathRewrite: { "^/": "" },
//   },
// ];
// module.exports = proxy;

const HttpsProxyAgent = require('https-proxy-agent');
const proxyConfig = [{
  context: '/api',
  target: 'https://agency-tour-backend-a10abe72bb88.herokuapp.com',
  secure: false
}];

function setupForCorporateProxy(proxyConfig) {
  const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    const agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);