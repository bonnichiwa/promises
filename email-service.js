/**
 * Define the EmailService object
 *
 * no @returns
 */
var EmailService = function() {
  this.inbox = null;
  this.outbox = null;
  this.spam = null;
};

/**
 * EmailService's call to API simulation to load inbox emails
 *
 * @returns {Promise} 
 */
EmailService.prototype.loadInbox = function() {
  return new Promise(function(resolve, reject) {
    if (this.inbox) {
      return this.inbox;
    } else {
      setTimeout(function(){
        resolve(["Email about dogs", "Email about cats", "Emails about fishes"]);
      }, 1000);
    }
  });
};

/**
 * EmailService's call to API simulation to load outbox emails
 *
 * @returns {Promise}
 */
EmailService.prototype.loadOutbox = function() {
  return new Promise(function(resolve, reject) {
    if (this.outbox) {
      return this.outbox;
    } else {
      setTimeout(function(){
        resolve(["Sending an email about the weather", "Sending an email about the colour of the sky", "Sending an email about how cold it is in Dubai"]);
      }, 1000);
    }
  });
};

/**
 * EmailService's call to API simulation to load spam emails
 *
 * @returns {Promise}
 */
EmailService.prototype.loadSpam = function() {
  return new Promise(function(resolve, reject) {
    if (this.spam) {
      return this.spam;
    } else {
      setTimeout(function(){
        resolve(["Uninteresting email about things you don't care about", "Uninteresting email about things you used to care about", "Uninteresting email about things you never heard of"]);
      }, 1000);
    }
  });
};