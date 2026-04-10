"use strict";
// PRIMITIVE TYPES  ****
// STRING , NUMBER , BOOLEAN
var sname = "Bilal";
console.log("sname =>", sname);
var sage = 21;
console.log("sage =>", sage);
var isactive = false;
console.log("isactive =>", isactive);
// CREAT ARRAY TYPE 
// TRUPLE ARRAY 
var fruit = ["Apple", "Banana", "Mango", "Orange"];
console.log("Fruits List =>", fruit);
var student = ["Bilal", 21, 123, "Webdevelopment", true];
console.log("Student =>", student);
// var color: readonly string[] = ["Orange","Pink","Blue"];
// color.push("Puple")
// console.log(color);
// ENUM OBJECT
var obj;
(function (obj) {
    obj[obj["cname"] = 101] = "cname";
    obj[obj["cmodel"] = 102] = "cmodel";
    obj[obj["ccolor"] = 103] = "ccolor";
})(obj || (obj = {}));
console.log("obj =>", obj);
var car;
(function (car) {
    car["cname"] = "BYD SHARK 6 ";
    car[car["cmodel"] = 2026] = "cmodel";
    car["ccolor"] = "Black";
})(car || (car = {}));
console.log("obj =>", car.cname);
let studentInfo = {
    name: "Bilal",
    age: 21,
    course: "Web Development"
};
console.log(studentInfo);
let mub = {
    name: "i-Phone14",
    model: 2022,
    color: "Red"
};
console.log("Mobile =>", mub);
let lap = {
    name: "Dell",
    price: 55000,
    isactive: true
};
console.log("Laptop =>", lap);
// FUNCTION TYPESCRIPT 
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 5));
