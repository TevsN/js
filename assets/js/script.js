const cat1 = {
  name: "Arnold",
  breed: "nigster",
  age: 2,
  color: "blue",
  isMale: true,
  eating: function () {
    return "AM-NIMA-NIAM";
  },
};

const cat2 = {
  name: "Nastia",
  breed: "siamskii",
  age: 5,
  color: "black",
  isMale: true,
  eating: function () {
    return "AM-NIMA-NIAM";
  },
};

const cat3 = {
  name: "Bodia",
  breed: "aligator",
  age: 10,
  color: "white",
  isMale: true,
  eating: function () {
    return "AM-NIMA-NIAM";
  },
};

const cat4 = {
  name: "Pusik",
  breed: "veslo",
  age: 4,
  color: "red",
  isMale: true,
  eating: function () {
    return "AM-NIMA-NIAM";
  },
};

function Cat(name, breed, isMale, color,age ) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.color = color;
  this.isMale = isMale;

  this.eating = function () {
    return "AM-NIMA-NIAM";
  };
}

const constractedCat = new Cat("Алберт", "куни-мейн", true, "красный", 4);
