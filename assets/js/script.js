// // // // 'use strict';

// // // // // function Phone(model, company, price, color, inStock) {
// // // // //   this.model = model;
// // // // //   this.company = company;
// // // // //   this.price = price;
// // // // //   this.color = color;
// // // // //   this.coments = [];
// // // // //   this.inStock = inStock;
// // // // // }

// // // // // function getRandomInt(min, max) {
// // // // //   min = Math.ceil(min);
// // // // //   max = Math.floor(max);
// // // // //   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// // // // // }

// // // // // function getPhones(amount) {
// // // // //   const newPhones = [];

// // // // //   for (let i = 0; i < amount; i++) {
// // // // //     newPhones.push(
// // // // //       new Phone(
// // // // //         `Model ${i}`,
// // // // //         "Panasonic",
// // // // //         getRandomInt(5000, 50000),
// // // // //         "black",
// // // // //         Math.random() >= 0.5
// // // // //       )
// // // // //     );
// // // // //   }

// // // // //   return newPhones;
// // // // // }

// // // // // const phones = getPhones(50);

// // // // // function getStock(phones) {
// // // // //   let stock = 0;
// // // // //   phones.forEach(function (phone) {
// // // // //     // console.log(phone.inStock)
// // // // //     if (phone.inStock === true) {
// // // // //       stock++;
// // // // //     }
// // // // // });
// // // // // return stock;
// // // // // }

// // // // // // console.table(phones);

// // // // // /*
// // // // //   1. Посчитать количество моделей телефонов в 
// // // // //       наличии и вывести в консоль 
// // // // //   1.1* Вывести в консоль для каждого элемента массива 
// // // // //   строку следующего вида:
// // // // //   '<Производитель> <Модель> со стоимостью <цена> сейчас <в наличии / нет в наличии>'
// // // // //   2. Получить массив тех телефонов, которые есть в наличии
// // // // //   3. Получить массив телефонов для праздничной распродажи (черная пятница и т.д) 
// // // // //       Всем телефонам которые стоят больше 30000 снизить цену на 30%. 
      
  
// // // // // // advanced
// // // // // 1. Отсортировать массив телефонов по цене (от дорогих к дешевым)
// // // // // 2. Создать массивы с строками - именами производителей и массив с возможными цветами телефонов. Переделать логику генерируемых телефонов чтобы они получали случайного производителя и цвет из списков
// // // // // */
// // // // function test(){
// // // //     return this;
// // // // }

// // // // const thisFunc = test();




// // // const newspoop = {
// // //     title: 'NewFucking news',
// // //     articles: [
// // //         'Glova Nova',
// // //         'Gorgo',
// // //         'give me your money',
// // //         'koko',
// // //     ],
    
// // //     showArticles() {
// // //         this.articles.forEach((article, index, array, ) => {
// // //             console.log(`Newspaper - ${this.title} | Стаття№ : ${index + 1} ${article}`)
// // //         });
// // //     }
// // // }
// // // const arrowSum = (1,23123,54,12,3123,124,1245,1245,212,36,457,867,2345);
// // function sum(){
// //     let numbers = 0;
// //     for(let i = 0;i < arguments.length; i++){
// //         numbers = numbers + arguments[i];
// //     }
// //     return numbers;
// // }

// const arrowSum = (...rest) => rest.reduce((alibaba, kukas) => alibaba + kukas, 0)
// console.log(arrowSum(...[1,2,3,5,6] , ...[2,5,7,2,1]))