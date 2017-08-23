/**
 * Define the EmailAccount object
 *
 * no @returns
 */
var EmailAccount = function() {
  this.inbox = null;
  this.outbox = null;
  this.spam = null;

  /**
   * @type {Object}
   */
  this.htmlElement = {
    emailContent: document.getElementById('email-content'),
    inboxButton: document.getElementById('inbox-button'),
    outboxButton: document.getElementById('outbox-button'),
    spamButton: document.getElementById('spam-button')
  };
};

/**
 * Initalize EmailAccount with inbox emails
 *
 * no @returns
 */
EmailAccount.prototype.init = function() {
  this.displayInboxEmails();
};

/**
 * EmailAccount's call to API simulation to load inbox emails
 *
 * @returns {Promise} 
 */
EmailAccount.prototype.loadInbox = function() {
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
 * EmailAccount's call to API simulation to load outbox emails
 *
 * @returns {Promise}
 */
EmailAccount.prototype.loadOutbox = function() {
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
 * EmailAccount's call to API simulation to load spam emails
 *
 * @returns {Promise}
 */
EmailAccount.prototype.loadSpam = function() {
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

/** 
 * Display inbox emails 
 *
 * no @returns
 */
EmailAccount.prototype.displayInboxEmails = function() {
  this.loadInbox().then(function(emails) {
    this.inbox = emails;
    this.htmlElement.emailContent.textContent = this.inbox;
  }.bind(this));
}; 

/**
 * Display outbox emails
 *
 * no @returns
 */
EmailAccount.prototype.displayOutboxEmails = function() {
  this.loadOutbox().then(function(emails) {
    this.outbox = emails;
    this.htmlElement.emailContent.textContent = this.outbox;
  }.bind(this));
}; 

/**
 * Display spam emails 
 *
 * no @returns
 */
EmailAccount.prototype.displaySpamEmails = function() {
  this.loadSpam().then(function(emails) {
    this.spam = emails;
    this.htmlElement.emailContent.textContent = this.spam;
  }.bind(this));
}; 

/**
 * When inbox button gets clicked
 *
 * no @returns
 */
EmailAccount.prototype.onClickInboxButton = function() {
  this.displayInboxEmails();
};

/**
 * When outbox button gets clicked
 *
 * no @returns
 */
EmailAccount.prototype.onClickOutboxButton = function() {
  this.displayOutboxEmails();
};

/**
 * When spam button gets clicked
 *
 * no @returns
 */
EmailAccount.prototype.onClickSpamButton = function() {
  this.displaySpamEmails();
};

/**
 * Define the list of observers
 *
 * no @returns
 */
EmailAccount.prototype.observers = function() {
  // When Inbox button has been clicked
  if (this.htmlElement.inboxButton) {
    this.htmlElement.inboxButton.addEventListener('click', this.onClickInboxButton.bind(this));
  }

  // When Outbox button has been clicked
  if (this.htmlElement.outboxButton) {
    this.htmlElement.outboxButton.addEventListener('click', this.onClickOutboxButton.bind(this));
  }

  // When Spam button has been clicked
  if (this.htmlElement.spamButton) {
    this.htmlElement.spamButton.addEventListener('click', this.onClickSpamButton.bind(this));
  }
}; 

// Instantiate emailAccountComponent
  window.emailAccountComponent = new EmailAccount();

  emailAccountComponent.observers();
  emailAccountComponent.init();