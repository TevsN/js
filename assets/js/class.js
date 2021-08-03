// // class Worker {
// //     constructor(name, lastName, numberDay, payMent,premium, age){
// // //         if(payMent < 0){
// //             throw new RangeError('Error(228)')
// //         }

// //         if(numberDay < 0){
// //             throw new RangeError('Error(1337)')
// //         }

// //     this.name = name;
// //     this.lastName = lastName;
// //     this.numberDay = numberDay;
// //     this.payment = payMent;
// //     this.premium = premium;
// //     this._age = age;
// //     }

// //     get age(){
// //         return this._age
// //     }

// //     set age(newAge){
// //         if(isNaN(newAge) || typeof newAge !== 'number'){
// //             throw new TypeError('Age mus be number');
// //         }
// //         if(newAge < 0){
// //             throw new RangeError('Age must be pensil')
// //         }
// //         this._age = newAge;
// //     }

// //     getSalary(){
// //         if(this.premium){
// //             return this.numberDay * this.payment * 1.25 ;
// //         }
// //         return this.numberDay * this.payment;

// //     }

// //     getFullName(){
// //         return `${this.name} ${this.lastName}`;
// //     }
// // }

// // const human1 = new Worker ('Arnold','Шварцлогер', 10, 100, true, -40);
// // const human2 = new Worker ('Arnold','Шварцлогер', 10, 25, false, 40);

// ==========================================================================================

// class Auto {
//   constructor(model, bodyWeight, maxSpeed, currentSpeed) {
//     this.model = model;
//     this.bodyWeight = bodyWeight;
//     this.maxSpeed = maxSpeed;
//     this.currentSpeed = currentSpeed;
//   }
//   set currentSpeed(speed) {
//     if (isNaN(speed) || typeof speed !== "number") {
//       throw new TypeError("Auto is not defined");
//     }
//     if (speed < 0) {
//       throw new RangeError("З глузду зйiхав?");
//     }
//     this._currentSpeed = speed;
//   }

//   get currentSpeed() {
//     return this._currentSpeed;
//   }

//   set bodyWeight(Weight) {
//     if (isNaN(Weight) || typeof Weight !== "number") {
//       throw new TypeError("Я в минус не уйду");
//     }
//     if (Weight < 0) {
//       throw new RangeError("Я в минус не уйду");
//     }
//     this._bodyWeight = Weight;
//   }

//   get bodyWeight() {
//     return this._bodyWeight;
//   }

//   set model (names) {
//     if (typeof names !== "string") {
//       throw new TypeError("Invalid ты");
//     }

//     if (names.trim() === '') {
//       throw Error("Я реально не понял ты дарушка?");
//     }
//     this._model = names;
//   }

//   get model() {
//     return this._model;
//   }
// }

// const Model1 = new Auto("Toyota Supra (A80)", 1340, 300, 90);
// ====================================================================================

const monkey = [];

class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.isBanned = false;
  }

  getFullName () {
    return `${this.name} ${this.lastName}`;
  }

  creatMassage (massage) {
    monkey.push(massage);
    return massage;
  }
}

class Moderator extends User {
  constructor(name, lastName, age, permission){
    super(name, lastName, age);
    this.permission = permission;
  }
  deketeMasage (massageId){
    monkey.pop();
  }

}

class Admin extends Moderator {
constructor(name, lastName, age, permission, email){
super(name, lastName, age, permission);
this.email = email;
}

ban (user) {
  user.isBanned = true;
}

}

const user1 = new User ('Abibus','Kalilotikuvs', 47);
const moder1 = new Moderator ('Anonimus', 'Kokolosov', 34);
const admin1 = new Admin ('Popoliz', 'Akakievich', 14, {} ,'popoliz228@gmail.com');