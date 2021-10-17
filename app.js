

/// Question 1 callback
function sum(a, b, cb) {
  setTimeout(() => {
    let sum=a + b;
    cb(sum);
     
  }, 1000);
}

sum(2,3,function(result){
console.log(result);
});

// function doHomeWork(subject, callback){
//     setTimeout(callback,500);
//     console.log("doing my homework:", subject)
// }

// doHomeWork("Maths", function(){
//     console.log("finished my homework");
// });


// Question 2 promise
// const isAvailable = true;
// const myPromise = new  Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isAvailable) {
//       resolve("Success");
//     } else {
//       reject("Fail");
//     }
//   }, 1000);
// });
// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  // question 3 Async and wait
  // const isAvailable = true;

  // async function myPromises(){
  //   await setTimeout(() => {
  //       if (isAvailable) {
  //         console.log("Success");
  //       } else {
  //         console.log("Fail");
  //       }
  //     }, 1000);

  // }
  // try {
  //   myPromises();
      
  // } catch (error) {
  //     console.log(error.message);
      
  // }

  
//Assingment 4
// Question 1
//  
// Question 2
// i installed all packages 

// Question 3
const {add,subtr} =require("./calculator");
// it comes from calculator module
// let AddResult =add(20,10)
// let SubResult =subtr(40,10)
// console.log(AddResult);
// console.log(SubResult);

// assingment 4
// Question 1

// function test(a,b){
//   if(a==b){
//     return true;

//   }else{
//     throw new Error("not equal to a and b");
//   }

// }
// try {
//   const rescult= test(1,1);
//   console.log(rescult);
  
// } catch (error) {
//   console.log(error.message);
  
// }

// Question 2

const { parse, basename, dirname, extname , join  } = require('path')
// console.log('filename parsed:', parse(__filename));
// console.log('filename parsed:', parse(__filename));

// Question 3
// file extention
// console.log('filename basename:', basename(__filename));
// base file
// console.log('filename extname:', extname(__filename))



// Question 4
// reading a file
// const { readFileSync,writeFileSync } = require('fs');
// const contents = readFileSync(__filename,{encoding: 'utf8'});
// console.log(contents);

// writing file
// writeFileSync(join(__dirname, 'out.txt'), 
// contents.toLocaleLowerCase());

//  Question 5
// console.log('Process ID', process.pid);
// console.log('Process uptime', process.uptime());
// console.log('the opearting system platform', process.platform);
const os = require('os')

// console.log('freemem', os.freemem());
// console.log('totalmem', os.totalmem())


