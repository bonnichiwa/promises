/**
 * Define the EmailView object
 *
 * no @returns
 */
var EmailView = function() {

  this.emailService = new EmailService();

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
 * Initalize EmailView with inbox emails
 *
 * no @returns
 */
EmailView.prototype.init = function() {
  this.displayInboxEmails();
};

/** 
 * Display inbox emails 
 *
 * no @returns
 */
EmailView.prototype.displayInboxEmails = function() {
  this.emailService.loadInbox().then(function(emails) {
    // this.inbox = emails;
    this.htmlElement.emailContent.textContent = emails;
  }.bind(this));
}; 

/**
 * Display outbox emails
 *
 * no @returns
 */
EmailView.prototype.displayOutboxEmails = function() {
  this.emailService.loadOutbox().then(function(emails) {
    // this.outbox = emails;
    this.htmlElement.emailContent.textContent = emails;
  }.bind(this));
}; 

/**
 * Display spam emails 
 *
 * no @returns
 */
EmailView.prototype.displaySpamEmails = function() {
  this.emailService.loadSpam().then(function(emails) {
    // this.spam = emails;
    this.htmlElement.emailContent.textContent = emails;
  }.bind(this));
}; 

/**
 * When inbox button gets clicked
 *
 * no @returns
 */
EmailView.prototype.onClickInboxButton = function() {
  this.displayInboxEmails();
};

/**
 * When outbox button gets clicked
 *
 * no @returns
 */
EmailView.prototype.onClickOutboxButton = function() {
  this.displayOutboxEmails();
};

/**
 * When spam button gets clicked
 *
 * no @returns
 */
EmailView.prototype.onClickSpamButton = function() {
  this.displaySpamEmails();
};

/**
 * Define the list of observers
 *
 * no @returns
 */
EmailView.prototype.observers = function() {
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

// Instantiate emailComponent
  emailViewComponent = new EmailView();

  emailViewComponent.observers();
  emailViewComponent.init();
