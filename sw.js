
// On install - the application shell cached
self.addEventListener('Install', function(event) {
   event.waitUntil(
     caches.open('sw-cache').then(function(cache) {
       // Stattic files that make up the application shell are cached
       return cache.add('index.html');
              cache.add('https://fonts.gstatic.com');
              cache.add('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
              cache.add('vendor/bootstrap/css/bootstrap.min.css');
              cache.add('assets/css/fontawesome.css');
              cache.add('assets/css/templatemo-space-dynamic.css');
              cache.add('assets/css/animated.css');
              cache.add('assets/css/owl.css');
              cache.add('vendor/jquery/jquery.min.js');
              cache.add('vendor/bootstrap/js/bootstrap.bundle.min.js');
              cache.add('assets/js/owl-carousel.js');
              cache.add('assets/js/animation.js');       
              cache.add('assets/js/imagesloaded.js');      
              cache.add('assets/js/templatemo-custom.js');
     })
   );
});

// with request network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the Cache
    caches.match(event.request).then(fucntion(response) {
    // return it if there is a response, or else fetch again
      return response || fetch(event.request);
    })
  );
});
                                    
      
