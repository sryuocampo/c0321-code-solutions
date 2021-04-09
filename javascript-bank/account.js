/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdraw = new Transaction('withdrawal', amount);
    this.transactions.push(withdraw);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var totalSum = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i];
    if (transaction.type === 'deposit') {
      totalSum += transaction.amount;
    } else {
      totalSum -= transaction.amount;
    }
  }
  return totalSum;
};
