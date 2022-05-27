(function () {

  //pega o script
  var script = document.getElementById('1WZETX722PJibpmL_script');

  if (script) {
      //pega o token
      var token = script.getAttribute("data-token");

      //seta o token como variavel global
      window.token_script = token;

      //pega todos os dados e seta em um variavel global
      window.data_script = script.dataset;

      if (!document.getElementById("_iframe1WZETX722PJibpmL_iframe")) {
          //seta o iframe - só colocar a url do widget aqui  
          var setIframe = document.createElement("iframe");
          setIframe.setAttribute("src", "http://localhost:8080?ut="+token);
          setIframe.setAttribute("id", "_iframe1WZETX722PJibpmL_iframe");
          document.getElementsByTagName("body")[0].appendChild(setIframe);
        
          //seta o espaço do iframe dentro da pagina  
          var css = '#_iframe1WZETX722PJibpmL_iframe {width: 619px;height: 101vh;border: none;padding: 0;margin: 0;position: absolute;left: -8px;top: -7px;}';
          var head = document.head || document.getElementsByTagName("head")[0];
          var style = document.createElement("style");
          head.appendChild(style);
        
          style.type = "text/css";
        
          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }
      }
  }

})();
