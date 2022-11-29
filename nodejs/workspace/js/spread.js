const obj1 = {
    a:10,
    b:20,
    c:30,
    d:12,
    e:6
}
console.log(obj1);

let {...c}=obj1;
console.log(c);
const {obj2}={c};
console.log(obj2);