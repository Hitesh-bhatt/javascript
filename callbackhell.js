
burger
const addveggies=(callback)=>{
  setTimeout(()=>{
    const veggies= "🥬"
    console.log("veggies prepared",veggies)
    callback(veggies)
  },1000)

}
const addtikki=(veggies,callback)=>{
setTimeout(() => {
  const tikki=veggies+ "🫓"
  console.log("tikki prepared",tikki)
  callback(tikki)
}, 2000);
}
const makeburger=(veggies,tikki,callback)=>{
  setTimeout(() => {
    const burger=veggies +tikki+" 🍔"
    console.log("burger prepared",burger)
    callback()
  }, 3000);
  }
  


console.log("buger order recieved")
addveggies((veggies)=>{
  console.log("Preparation started for tikki")
  addtikki(veggies,(tikki)=>{
    console.log("burger is cooking")
    makeburger(veggies,tikki,(burger)=>{
     console.log("burger is served")
    })
  })
})

const placeorder= () =>
{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("order placed")
        resolve();
    }, 2000);
  })
}
const startproduction= () =>
{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("production started ")
        resolve()
    }, 5000);
  })
}

const printID= () =>
{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("id printed")
        resolve();
    }, 5000);
    })
}

const productName= () =>
{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("name printed")
        resolve();
    }, 5000);
  })
}
const productDesc= () =>
{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("description printed")
        resolve()
    }, 5000);
  })
}

console.log("order is going to place")
placeorder()
.then(()=>{
  console.log("product is in production...")
  return startproduction()
})
.then(()=>{
  console.log("ID printing started")
  return printID() 
})
.then(()=>{
  console.log("Product name started printing")
  return productName() 
})
.then(()=>{
  console.log("Product description started printing")
  return productDesc() 
})
.catch((error)=>{
console.log("Error occured",error)
})

