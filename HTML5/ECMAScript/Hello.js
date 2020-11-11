let HelloWorld = "Hello World"
//alert(HelloWorld)

const PI = 3.1415
//alert(PI)

function sum(a,b){
    return( a + b )
}

//sum(1,2)

function Hello(username){
    alert("Hello, "+username)
}

let retValue = sum("Chloe ","Gan")
alert(retValue)


Hello("Chloe")

function MyName(){
    //without var is 全局变量
    //can be access everywhere
    name = "Chai Juan Zhe"
}

MyName()
alert("Name : " + name)


function sum2(a,b){
    if(typeof a == "number" && typeof b == "number"){
        return a + b
    }
    alert(a +" , "+ b +"must be a number.")
}

function sum3(x,y){
    if(isNaN(x) || isNaN(y)){
        alert("Please enter only number.")
        return
    }
    return x+y
}

sum3(213,"d")

alert(parseInt("35.54655"))
alert(parseInt("Chloe"))

alert(parseFloat("3.213") + 1)

let ceil = Math.ceil(234.1)
console.log("Math ceil = "+ceil)

console.log("HI")

let username = "Chloe Gan"

function user(){
    if(!username){
        console.log("Username cannot be null")
    }else{
        console.log("Hi there, "+ username)
    }
}

user()

function ForTest(){
    for(let i = 1 ; i < 11; i ++){
        console.log(" i = "+ i )
    }
}

ForTest()

let x = "abc"
console.log(typeof(x))

let y = new String("def")
console.log(typeof(y))


//重要：substr vs substring 有什么分别？

//substr(startIndex,length)
console.log("abcdefg".substr(2,4))//cdef

//substring(startIndex,endIndex) 注意：不包括 endIndex
console.log("abcdefg".substring(2,4))//cd


Emp = function(name,sal){
    this.name = name
    this.sal = sal
}

e1 = new Emp("Chloe","100000")
console.log(e1["name"]+" "+e1.sal)

Product = function(ProductName,ProductPrice){
    this.ProductName = ProductName
    this.ProductPrice = ProductPrice
}

Product.prototype.getProductName = function(){
    return this.ProductName
}

Product.prototype.getProductPrice = function(){
    return this.ProductPrice
}

let p1 = new Product("Watermelon")
console.log(p1.ProductName)

let p2 = new Product("Watermelon", 10)
console.log(p2.ProductName + " "+ p2.ProductPrice)

//== vs ===
console.log(1 == "1")
console.log(1 === "1")

function doSome(){
    alert("Hello")
}

var buttonObj = document.getElementById("myButton")
buttonObj.onclick = doSome

let myButton2 = document.getElementById("myButton2")
myButton2.onclick = function(){
    alert("myButton2 is running")
}

document.getElementById("myButton3").onclick = function(){
    alert("My button 3 is running.")
}

let list = [12,"d",42,6,57,6564342,6,875,6453,675,44,545,574,653,"x","kdnck",23.1]

for (const key in list) {
    console.log("list = "+list[key])
}

User = function(username,password){
    this.username = username
    this.password = password
}

let u1 = new User("Chloe","2134sdfd")

with (u1){
    console.log(username + " " + password)
}