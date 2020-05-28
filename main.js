var MODULE = (function () {
    var app = {};
    window.addEventListener("load", function () {
      // initialize username
      setName('');

      // update username according to the input
      var input = document.getElementById("name-input");
      input.focus();
      input.addEventListener('input', function(){
          setName(input.value);
      })
    });
    function setName(n) {
      // l10n.js has a list of public API
      // you can pass data to the .properties file 
      navigator.mozL10n.localize(
          document.getElementById("greet"),
          'greet',
          {username: n}
      );
    }
    return app;
}());