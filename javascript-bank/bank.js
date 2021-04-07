/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(holder, this.nextAccountNumber);
    this.accounts.push(newAccount);
    // this.accounts.push(accountObj);
    // this.nextAccountNumber++;
    // return Account.number;
  }
  return null;
};
