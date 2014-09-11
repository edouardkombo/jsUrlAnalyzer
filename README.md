Js Url Analyzer
===============

Simple javascript object to analyze url content and get all url parameters and content.
It has been written in full Javascript, no needs of jQuery.


1) How to use it?
-----------------

    //Create the object
    var ua = new urlAnalyzer();
    
    //Initialize it
    urlAnalyzer.init();

    //Get url parameters
    urlAnalyzer.parameters.language   //For http://xxx.com?language=fr
    urlAnalyzer.parameters.username   //For http://xxx.com?username=edouard

    //Get All other url content
    urlAnalyzer.url
    urlAnalyzer.hostname
    urlAnalyzer.protocol
    urlAnalyzer.pathname


Contributing
-------------

If you do contribute, please make sure it conforms to the PSR coding standard. The easiest way to contribute is to work on a checkout of the repository, or your own fork, rather than an installed version.

Issues
------

Bug reports and feature requests can be submitted on the [Github issues tracker](https://github.com/edouardkombo/jsUrlAnalyzer/issues).

For further informations, contact me directly at edouard.kombo@gmail.com.