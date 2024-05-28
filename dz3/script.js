const array = 

[
       { name: "Alice", age: 10, grade: 90 },
       { name: "Bob", age: 22, grade: 85 },
       { name: "Charlie", age: 21, grade: 88 },
       { name: "Alice", age: 30, grade: 90 },
       { name: "Bob", age: 11, grade: 85 },
       { name: "Charlie", age: 15, grade: 88 },
       { name: "Alice", age: 18, grade: 90 },
       { name: "Bob", age: 12, grade: 85 },
       { name: "Charlie", age: 41, grade: 88 }
   ];
const array2 =  []

for (let i = 0; i <= array.length; i++) {
    const element = array[i];
    if (element.age >= 18) {
        console.log(array[i]);
    }
}

