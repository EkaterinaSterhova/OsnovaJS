temp=parseInt(prompt("Введите температуру в градусах Цельсия"));
 alert(`Температура в градусах Цельсия = ${temp} , Температура в Фарингейтах = ${(Math.round(temp =(9 / 5) * temp + 32))}`);
