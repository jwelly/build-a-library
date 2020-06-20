class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    // We can set getters and setters when we want to access the value of a property outside of the class.
    // You can omit both these if you DON'T want anyone to access or change your properties.  
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
  // .reduce() adds up each value (rating).
  // We use an anonymous function passed in with 2 parameters.
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
      return ratingsSum / this.ratings.length;
    }
    
    // We use a method, NOT a setter, because we aren't assigning a value to the ratings property, just changing the value stored in ratings. We don't want to override the entire array.
    addRating(value) {
      this.ratings.push(value);
    }
  }
  
  // Here, extends makes Book a child of Media
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    } 
  }
  
  
  // Movie class
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  // Ex 15
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  // The following would log true, then false
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  // Ex 18. We log the current averager rating
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5); 
  console.log(historyOfEverything.getAverageRating());
  
  // Ex 20-22
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  // Ex 23-24
  speed.addRating(1);
  speed.addRating(3);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  
  