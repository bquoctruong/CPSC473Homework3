(function (window){
  "use strict";
  var App = window.App || {};

  function DataStore(){
    this.data = {}; //Constructor
  }

  //Give DataStore an add property
  DataStore.prototype.add = function(key, val){
    this.data[key] = val;
  };

  //Get method

  DataStore.prototype.get = function(key) {
    return this.data[key];
  };

  //Get all method
  DataStore.prototype.getAll = function(){
    return this.data;
  };

  DataStore.prototype.remove = function(key){
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
