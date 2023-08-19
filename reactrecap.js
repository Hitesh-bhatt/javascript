// function nameex()
// {

// var pi=3.14
// console.log(pi)
// }
// nameex();
// console.log(pi)

// console.log(x)
// var x=10
// console.log(x)

// function input()
// {
//     const x=10;
//     if(true){
//         const y=20
//     }
//     console.log(x)
//     console.log(y)
// }
// input();
// console.log(x)
//     console.log(y)

// const data = [
//   {
//     title: 'BMWX3',
//     img: " ",
//     description: image1,
//   },
//   {
//     title: 'AUDIA5',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'MERCEDESBENZ',
//     imgsrc: " ",
//     description: image,
//   },

//   {
//     title: 'WAGONAR',
//     imgsrcs: " ",
//     description: image1,
//   },

//   {
//     title: 'LAMBORGHINI',
//     imgsrc: " ",
//     description: image1,
//   },
//   {
//     title: 'PORCHE',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'MUSTANG',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'THAR',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'NEXON',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'INNOVA',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'F1',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'BUGATI',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'FORTUNER',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'SWIFT',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'ALTO',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'SKODA',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 'RANGEROVER',
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 5,
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 5,
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 5,
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 5,
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 5,
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 5,
//     imgsrc: " ",
//     description: image1,
//   },

//   {
//     title: 5,
//     imgsrc: " ",
//     description: image1,
//   },
// ];

//FUNCTIONS

// function fname(a,b)
// {
//      return a+b;
// }
// fname(a,b);

// anonymous function
// const x=function(a,b)
// {
//     return a+b;
// }
// x(a,b);

// let x=10;
// let y=20;
// const f1=function(x,y,callback)
// {

// return callback(x,y)
// }
// function add(x,y)
// {
//     return x+y
// }
// function sub(x,y)
// {
//     return x-y
// }
// let res1=f1(x,y,add)
// console.log(res1)
// let res2=f1(x,y,sub)
// console.log(res2)

// const placeorder= (callback) =>
// {
//     setTimeout(() => {
//         console.log("order placed")
//         callback();
//     }, 2000);
// }
// const startproduction= (callback) =>
// {
//     setTimeout(() => {
//         console.log("production started ")
//         callback();
//     }, 5000);
// }

// const printid= (callback) =>
// {
//     setTimeout(() => {
//         console.log("id printed")
//         callback();
//     }, 5000);
// }

// const productname= (callback) =>
// {
//     setTimeout(() => {
//         console.log("name printed")
//         callback();
//     }, 5000);
// }
// const productdesc= (callback) =>
// {
//     setTimeout(() => {
//         console.log("description printed")
//     }, 5000);
// }
// console.log("Order");
// placeorder(()=>{
//     console.log("In Production")
//     startproduction(()=>{
//         console.log("Printing items")
//         printid(()=>{
//             productname(()=>{
//                 productdesc();
//                 console.log("day ended")
//             })
//         })
//     })
// })

const placeorder=(callback)=>
{
    setTimeout(() => {
        console.log("Ticket booking")
        callback();
    }, 2000);
}
const atairport=(callback)=>
{
    setTimeout(() => {
        console.log("airport reached")
        callback();
    }, 1000);
}

const boardingpass=(callback)=>
{
    setTimeout(() => {
        console.log("boarding pass done")
        callback();
    }, 1000);
}

const securitycheck=(callback)=>
{
    setTimeout(() => {
        console.log("security done ")
        callback();
    }, 2000);
}
const selfcheck=(callback)=>
{
    setTimeout(() => {
        console.log("self check done")
        callback();
    }, 3000);
}
const navigationpanel=(callback)=>
{
    setTimeout(() => {
        console.log("navigation done")
        callback();
    }, 1000);
}
const bus=(callback)=>
{
    setTimeout(() => {
        console.log("bus arrived")
        callback();
    }, 2000);
}
const airplane=(callback)=>
{
    setTimeout(() => {
        console.log("in aeroplane")
        callback();
    }, 3000);
}
const fly=(callback)=>
{
    setTimeout(() => {
        console.log("flying")
        callback();
    }, 1000);
}
const destination=(callback)=>
{
    setTimeout(() => {
        console.log("arrived at destination")
        
    }, 2000);
}



placeorder(() => {
  console.log("ticket booked");
  atairport(() => {
    boardingpass(() => {
      securitycheck(() => {
        selfcheck(() => {
          navigationpanel(()=>{
            bus(()=>{
                airplane(()=>{
                    fly(()=>{
                        destination(()=>{
                            console.log("reached at destination")
                        })
                    })
                })
            })
          })
        });
      });
    });
  });
});
