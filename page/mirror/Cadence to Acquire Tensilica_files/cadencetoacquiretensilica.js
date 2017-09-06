
requirejs.config({  
  baseUrl: "/etc/clientlibs/cadence-www/clientlibs_base/js",
  waitSeconds:0,
  paths: {
    
    "cadence": "./cadence",
    "cadence.slick.carousel": "./components/cadence.slick.carousel",
    "cadence.slick.quote.carousel" : "./components/cadence.slick.quote.carousel",
    "cadence.forms": "./components/cadence.forms",
    "cadence.utils": "./components/cadence.utils",
    "cadence.modals": "./components/cadence.modals",
    "cadence.marketo": "./components/cadence.marketo",
    "cadence.carousel": "./components/cadence.carousel",
    "cadence.megamenu": "./components/cadence.megamenu",
    "cadence.mobilemenu": "./components/cadence.mobilemenu",
    "cadence.homepageHero": "./components/cadence.homepageHero",
    "cadence.owl.carousel": "./components/cadence.owl.carousel",
    "cadence.fastSearchResults": "./components/cadence.fastSearchResults",
    "cadence.searchTypeahead": "./components/cadence.searchTypeahead",
    "cadence.expandingFeaturedContent":"./components/cadence.expandingFeaturedContent",
    "bootstrap": "./lib/bootstrap.min",
    "bootstrap-select": "./lib/bootstrap-select.min",
    "bootstrap3-typeahead": "./lib/bootstrap3-typeahead.min",
    "idangerous.swiper": "./lib/idangerous.swiper.min",
    "owl.carousel": "./lib/owl.carousel.min",
    "jquery": "./lib/jquery-1.11.1.min",
    "jquery.ui": "./lib/jquery-ui.min",
    "jquery.cookie": "./lib/jquery.cookie.min",
    "jquery.placeholder": "./lib/jquery.placeholder.min",
    "jquery.scrollTo": "./lib/jquery.scrollTo",
    "jquery.history": "./lib/jquery.history",
    "jquery.ez-pinned-footer": "./lib/jquery.ez-pinned-footer.min",
    "jquery.waitforimages": "./lib/jquery.waitforimages.min", 
    "slick": "./lib/slick.min",
    "bootstrap-hover-dropdown": "./lib/bootstrap-hover-dropdown",
    "sortable": "./lib/sortable.min",
    "modernizr": "./lib/modernizr.min",
    "requirejs": "./lib/require"
  },
  shim: {
    "jquery.placeholder": ["jquery"],
    "jquery.cookie": ["jquery"],
    "jquery.scrollTo": ["jquery"],
    "jquery.waitforimages": ["jquery"],
    "bootstrap": ["jquery"],
    "jquery.ui": ["jquery"],
    "bootstrap-select": ["jquery"],
    "bootstrap3-typeahead": ["bootstrap"],
    "bootstrap-hover-dropdown" : ["jquery","bootstrap"],
    'slick': {
            deps: ['jquery'],
            exports: 'jQuery.fn.slick'
        },
    "sortable": {
      "exports": 'Sortable'
    },
    "modernizr": {
      "exports": 'Modernizr'
    }
  }  
});
require(['cadence'], function(cadence) {
    console.log("LOADED from jsp");
});
