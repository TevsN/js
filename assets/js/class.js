class Worker {
    constructor(name, lastName, numberDay, payMent,premium){
        if(payMent < 0){
            throw new RangeError('Error(228)')
        }

        if(numberDay < 0){
            throw new RangeError('Error(1337)') 
        }
        
    this.name = name;
    this.lastName = lastName;
    this.numberDay = numberDay;
    this.payment = payMent;
    this.premium = premium;
    }


    getSalary(){
        if(this.premium){
            return this.numberDay * this.payment * 1.25 ; 
        }
        return this.numberDay * this.payment;
    
    }

    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
}

const human1 = new Worker ('Arnold','Шварцлогер', 10, 100, true);
const human2 = new Worker ('Arnold','Шварцлогер', 10, 25, false);