const config = {
  appId: 'com.kwiklist.app',
  appName: 'KwikList',
  webDir: 'dist',
  server: {
    // Producción (VPS + DuckDNS). Para desarrollo local, comenta `url` y usa `npm run dev` o ngrok.
    url: 'https://kwiklist.duckdns.org',
    androidScheme: 'https',
  },
};

export default config;
