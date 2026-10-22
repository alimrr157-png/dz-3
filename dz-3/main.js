


console.log("--- Числа от 1 до 20 ---");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
console.log("--- Числа от 20 до 1 ---");
for (let i = 20; i >= 1; i--) {
    console.log(i);
}


console.log("--- Чётные числа от 1 до 50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let sum100 = 0;
for (let i = 1; i <= 100; i++) {
    sum100 += i;
}
console.log("Сумма чисел от 1 до 100:", sum100);


console.log("--- Квадраты чисел от 1 до 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`Квадрат ${i} - ${i * i}`);
}


console.log("--- Таблица умножения на 5 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}


let sumEven50 = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sumEven50 += i;
    }
}
console.log("Сумма чётных чисел от 1 до 50:", sumEven50);


console.log("--- Числа от 0 до 100 с шагом 5 ---");
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}


let countDiv7 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        countDiv7++;
    }
}
console.log("Количество чисел от 1 до 100, делящихся на 7:", countDiv7);





let user = {
    name: "Алим",
    age: 16,
    city: "Бишкек"
};
console.log("Исходный объект user:", user);


user.age = 17;


user.phone = "+996555123456";

// Удалить свойство city.
delete user.city;


console.log("Есть ли email в user?", "email" in user);


console.log("--- Ключи объекта ---");
for (let key in user) {
    console.log(key);

console.log("--- Значения объекта ---");
for (let key in user) {
    console.log(user[key]);
}

let propertyCount = 0;
for (let key in user) {
    propertyCount++;
}
console.log("Количество свойств объекта:", propertyCount);



let numbers = [10, -5, 7, 10, 3];
console.log("--- Элементы массива ---");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


let arraySum = 0;
for (let i = 0; i < numbers.length; i++) {
    arraySum += numbers[i];
}
console.log("Сумма элементов массива:", arraySum);

let maxEl = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxEl) {
        maxEl = numbers[i];
    }
}
console.log("Максимальный элемент:", maxEl);

let minEl = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minEl) {
        minEl = numbers[i];
    }
}
console.log("Минимальный элемент:", minEl);

 
console.log("Количество элементов массива:", numbers.length);


let evenSum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
    }
}
console.log("Сумма чётных элементов:", evenSum);


let negativeCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negativeCount++;
    }
}
console.log("Количество отрицательных чисел:", negativeCount);


let product = 1;
for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}
console.log("Произведение элементов массива:", product);

let maxIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIndex]) {
        maxIndex = i;
    }
}
console.log("Индекс максимального элемента:", maxIndex);


let minIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
        minIndex = i;
    }
}
console.log("Индекс минимального элемента:", minIndex);


let hasTen = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        hasTen = true;
        break;
    }
}
console.log("Есть ли число 10 в массиве?", hasTen);


let countSeven = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        countSeven++;
    }
}
console.log("Сколько раз встречается число 7:", countSeven);


let lastPositive = null;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        lastPositive = numbers[i];
    }
}
console.log("Последнее положительное число:", lastPositive);


let arithmeticMean = arraySum / numbers.length;
console.log("Среднее арифметическое элементов массива:", arithmeticMean);