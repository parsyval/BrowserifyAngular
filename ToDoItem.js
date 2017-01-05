class ToDoItem{
  constructor(title, description){
    this.title = title;
    this.description = description;
    this.isStriked = false;
  }

  setStrike(strike){
    this.isStriked = strike;
  }

  toggleStrike(){
    this.setStrike(!this.isStriked);
  }
}

module.exports = ToDoItem;
