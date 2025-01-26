function drochimBika() {
   const element = document.evaluate(
       '/html/body/div[1]/div[2]/main/div[2]/div/div/div[1]/div[2]/div/div/canvas',
       document,
       null,
       XPathResult.FIRST_ORDERED_NODE_TYPE,
       null
   ).singleNodeValue;
   
   if (element) {
       element.click();
       console.log('Тапнули бычка');
   } else {
       console.log('Элемент не найден');
   }
   
   // Генерим случайную задержку между кликами между 500 и 2000 мс, значения можно под себя скорректировать
   const randomDelay = Math.floor(Math.random() * 1500) + 500;
   setTimeout(drochimBika, randomDelay);
}

// Запускаем дрочку быка
drochimBika();

// Если нужно остановить скрипт либо релоад страницы вручную либо строчку ниже ебашим в консоль:
// location.reload();
