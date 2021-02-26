// 1. Напишіть функцію, що повертає куб числа.
    let a = +prompt(`Введіть число!`);
    let b = 3;
    function cube(a, b){
        let result = Math.pow(a, b);
        return result;
    }
    if(a < 1){
        alert(`Введіть натуральне число!`);
    } else{
        alert(`Куб числа ${a} = ${cube(a, b)}.`);
    }

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.
    let mathCalc = (first, second, third) => ((first + second)/third);
    console.log(mathCalc(2, 6, 3));

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
    let userInput = +prompt(`Вкажіть день тижня у числовому форматі (від 1 до 7)!`);
    function dayOfTheWeek(userInput){
        let day;
        switch (userInput){
            case 1:
                day = "Понеділок";
                break;
            case 2:
                day = "Вівторок";
                break;
            case 3:
                day = "Середа";
                break;
            case 4:
                day = "Четвер";
                break;  
            case 5:
                day = "П'ятниця";
                break;
            case 6:
                day = "Субота";
                break;
            case 7:
                day = "Неділя";
                break;
            default:
                day = "Помилка! Введіть число від 1 до 7!";      
        }
        return day;
    }
    alert(dayOfTheWeek(userInput));

// 4. Реалізуйте функцію знаходження факторіала.
    function factorial(n){
        if(n === 0 || n === 1){
            return 1;
        } else {
            return n * factorial(n-1);
        }
    }
    let userNumb = +prompt(`Введіть натуральне число або нуль!`);
    alert(`Факторіал даного числа: ${factorial(userNumb)}.`);

// 5. Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.
    let getTime = (hours, minutes, seconds) => hours * 3600 + minutes * 60 + seconds;
    console.log(`${getTime(15, 34, 47)} сек.`);

// 6. Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». 
// якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 
    let timestamp = +prompt(`Задайте час у секундах!`);
    let getSeconds = () => {
        const H = Math.floor(timestamp / 60 / 60);
        const M = Math.floor((timestamp / 60) - (H * 60));
        const S = timestamp % 60;
        
        if(H <= 23 && M <= 59 && S <= 59){
            return `${H}:${M}:${S}`;
        } else {
            return 'Більше однієї доби!';
        }
    }
    alert(getSeconds(timestamp));

// 7. 4 відмінності ерров фанкшина від звичайної функції.
/**
 * I. Arguments objects are not available in arrow functions, but are available in regular functions.
 * II. Arrow functions cannot be called with "new".
 * III. Неявний return у arrow function.
 * IV. No duplicate named parameters.
 */