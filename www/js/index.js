var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
    routes: [
      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/page2/',
        url: 'pages/page2.html',
      },
      {
        path: '/page3/',
        url: 'pages/page3.html',
      },
      {
        path: '/page4/',
        url: 'pages/page4.html',
      },
      {
        path: '/page5/',
        url: 'pages/page5.html',
      }
    ],
  });
var mainView = app.views.create('.view-main')