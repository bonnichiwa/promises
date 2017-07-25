/**
 * Define the EmailAccount object
 *
 * no @returns
 */
var EmailAccount = function() {
  this.inbox = [];
  this.outbox = [];
  this.spam = [];
};

/**
 * Initalize EmailAccount
 *
 * no @returns
 */
EmailAccount.prototype.init = function() {
  this.loadEmails.then(function(emails) {
    this.inbox = emails;
    console.log(this.inbox);
  }.bind(this));
};

/**
 * EmailAccount's call to API simulation to load emails
 *
 * no @returns
 */
EmailAccount.prototype.loadEmails = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(["Email about dogs", "Email about cats", "Emails about fishes"]);
  }, 10000);
});

