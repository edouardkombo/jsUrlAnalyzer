/**
 * Object: jsUrlAnalyzer
 * Version: 0.0.0
 * Author: Edouard Kombo
 * Twitter: @EdouardKombo
 * Github: Edouard Kombo
 * Url: https://github.com/edouardkombo/jsUrlAnalyzer
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * Analyze url content in Javascript 
 */

var urlAnalyzer = function(){};

urlAnalyzer.prototype = {
    url: window.location.href,
    hostname: window.location.hostname,
    protocol: window.location.protocol,
    pathname: window.location.pathname,
    parameters: window.location.search,

    init: function (){
        var query_string = {};
        var query = this.parameters.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
              // If first entry with this name
          if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
              // If second entry with this name
          } else if (typeof query_string[pair[0]] === "string") {
            var arr = [ query_string[pair[0]], pair[1] ];
            query_string[pair[0]] = arr;
              // If third or later entry with this name
          } else {
            query_string[pair[0]].push(pair[1]);
          }
        }
        
        return this.parameters = query_string;
    }  
};

