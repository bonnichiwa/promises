/**
 * Define the sample object
 *
 * @param {String} data
 * no @returns
 */
var sampleObject = function(data) {
  this.data = data;
}

/**
 * The sample object has a function to get data
 *
 * no @returns
 */
sampleObject.prototype.getData = function() {
  //If the data exists
  if (this.data) {
    console.log(this.data);
  }
  //If the data cannot be found 
  else {
    setTimeout(function() {
      this.data = "Hello";
      console.log(this.data);
    }, 2000);
  }
}