var app = {
 +    // Application Constructor
 +    initialize: function() {
 +        this.bindEvents();
 +    },
 +    // Bind Event Listeners
 +    //
 +    // Bind any events that are required on startup. Common events are:
 +    // `load`, `deviceready`, `offline`, and `online`.
 +    bindEvents: function() {
 +        document.addEventListener('deviceready', this.onDeviceReady, false);
 +        document.getElementById('scan').addEventListener('click', this.scan, false);
 +        document.getElementById('browse').addEventListener('click', this.browse, false);
 +    },
 +    // deviceready Event Handler
 +    //
 +    // The scope of `this` is the event. In order to call the `receivedEvent`
 +    // function, we must explicity call `app.receivedEvent(...);`
 +    onDeviceReady: function() {
 +        app.receivedEvent('deviceready');
 +    },
 +    // Update DOM on a Received Event
 +    receivedEvent: function(id) {
 +        var parentElement = document.getElementById(id);
 +        var listeningElement = parentElement.querySelector('.listening');
 +        var receivedElement = parentElement.querySelector('.received');
 +
 +        listeningElement.setAttribute('style', 'display:none;');
 +        receivedElement.setAttribute('style', 'display:block;');
 +
 +        console.log('Received Event: ' + id);
 +    },
 +    scan: function() {
 +        console.log('scanning');
 +        try {
 +        window.plugins.barcodeScanner.scan(function(args) {
 +            console.log(args);
 +        });
 +        } catch (ex) {
 +            console.log(ex.message);
 +        }
 +    },
 +    browse: function() {
 +        console.log('browsing');
 +        try {
 +            window.plugins.childBrowser.showWebPage('http://www.google.com', { showLocationBar: true });
 +        } catch (ex) {
 +            console.log(ex.message);
 +        }
 +    }
 +
 +};