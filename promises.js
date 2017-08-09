/**
 * Define the EmailAccount object
 *
 * no @returns
 */
var EmailAccount = function() {
  this.inbox = [];
  this.outbox = [];
  this.spam = [];

  /**
   * @type {Object}
   */
  this.htmlElement = {
    emailContent: document.getElementById('email-content'),
    inboxButton: document.getElementById('inbox-button'),
    outboxButton: document.getElementById('outbox-button'),
    spamButton: document.getElementById('spam-button')
};

/**
 * Initalize EmailAccount
 *
 * no @returns
 */
EmailAccount.prototype.init = function() {
  this.loadInbox().then(function(emails) {
    this.inbox = emails;
    console.log(this.inbox);
  }.bind(this));
};

/**
 * EmailAccount's call to API simulation to load emails
 *
 * @returns {Array} 
 */
EmailAccount.prototype.loadInbox = function() {
    return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(["Email about dogs", "Email about cats", "Emails about fishes"]);
    }, 5000);
  });
};

/**
 * EmailAccount's call to API simulation to load emails
 *
 * no @returns
 */
EmailAccount.prototype.loadOutbox = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(["Sending an email about the weather", "Sending an email about the colour of the sky", "Sending an email about how cold it is in Dubai"]);
    }, 5000);
  });
};

/**
 * EmailAccount's call to API simulation to load emails
 *
 * no @returns
 */
EmailAccount.prototype.loadSpam = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(["Uninteresting email about things you don't care about", "Uninteresting email about things you used to care about", "Uninteresting email about things you never heard of"]);
    }, 5000);
  });
};

/**
 *
 *
 */
EmailAccount.prototype.observers = function() {
  //When Inbox button has been clicked
  this.htmlElement.inboxButton.addEventListener('click', this.onButtonClick(inbox));
  //When Outbox button has been clicked
  this.htmlElement.outboxButton.addEventListener('click', this.onButtonClick.bind(outbox));
  //When Spam button has been clicked
  this.htmlElement.spamButton.addEventListener('click', this.onButtonClick.bind(spam));
}; 

/**
 *
 *
 */
EmailAccount.prototype.onButtonClick = function(type) {
  if (type === inbox) {
    this.loadInbox();
  } else if (type === outbox) {
    this.loadOutbox();
  } else if (type === spam) {
    this.loadSpam();
  }
};