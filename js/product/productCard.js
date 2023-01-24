let productCard = [
    {
        id: 1,//ID*
        number: 50,//Количество товара
        'Selling price': 200,//Цена Продажи
        category: {//Категория товара*
            ru: 'Пенка',
            en: 'Penka',
        },
        name: 'Пенка',//Имя товара*
        brand: 'Pyunkang Yul',//Бренд*
        for: 'Для умывания',//для чего кратко
        volume: '200 мл',//вес*
        foto: {// *
            foto_1: '',
            foto_2: '',
            foto_3: '',
        },
        description: 'для чего, кому, как и т.д.',//Описание
        favorites: false,//Добавить в избранное
        compare: false,//Сравнить
        reviews: {
            reating: 0,//рейтинг
            review: {//Коментарии
                com_1:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
                com_2:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
                com_3:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
            },//комент
            number: 3,//количество отзывов   
        },
        'Product information': 'information.txt', //Описание продукта
        //Акция
        promotion: {
             on: false,
             name: 'Скидка',
             number: 15,//Количество товара под Акцию, (если false не ограничено)-надо запомнить!!!
             discount: 40, // Скидка в процентах
             'Date start': '22.06.23', 
             'Date end': '22.06.23',
             brieflyterms: 'Краткое условие Акции',
             terms:'Полное описаание Акции/Скидки',
            },
            //Новый продукт
        'New product':{
            on: false,
        },
        //Подарок к товару
        gift:{
            on:false,
            'Name gift':'Шампунь', //Имя подарка
            'Id gift': 55,// Id Подарка
             number: 15,//Количество товара под Акцию, (если false не ограничено)-надо запомнить!!!
            'Date start': '22.06.23', 
            'Date end': '22.06.23',
            brieflyterms: 'Краткое условие Акции',
            terms:'Полное описаание Акции/Скидки',
        },   
    },

    {
        id: 2,
        number: 44,//Количество товара
        'Selling price': 240,//Цена Продажи
        category: {
            ru: 'Крем',
            en: 'Cream',
        },
        name: 'Крем',
        brand: 'Pyunkang Yul',
        for: 'Для лица',//
        volume: '100 мл',
        foto: {
            foto_1: '',
            foto_2: '',
            foto_3: '',
        },
        description: 'для чего, кому, как и т.д.',//Описание
        favorites: false,//Добавить в избранное
        compare: false,//Сравнить
        reviews: {
            reating: 4.5,//рейтинг
            review: {
                com_1:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
                com_2:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
                com_3:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
            },//комент
            number: 35,//количество отзывов   
        },
        'Product information': 'information.txt', //Описание продукта
        //Акция
        promotion: {
             on: false,
             name: 'Скидка',
             number: 15,//Количество товара под Акцию, (если false не ограничено)-надо запомнить!!!
             discount: 40, // Скидка в процентах
             'Date start': '22.06.23', 
             'Date end': '22.06.23',
             brieflyterms: 'Краткое условие Акции',
             terms:'Полное описаание Акции/Скидки',
            },
            //Новый продукт
        'New product':{
            on: false,
        },
        //Подарок к товару
        gift:{
            on:false,
            'Name gift':'Шампунь', //Имя подарка
            'Id gift': 55,// Id Подарка
             number: 15,//Количество товара под Акцию, (если false не ограничено)-надо запомнить!!!
            'Date start': '22.06.23', 
            'Date end': '22.06.23',
            brieflyterms: 'Краткое условие Акции',
            terms:'Полное описаание Акции/Скидки',
        },   
    },

    {
        id: 3,
        number: 11,//Количество товара
        'Selling price': 310,//Цена Продажи
        category: {
            ru: 'Шампунь',
            en: 'Shampoo',
        },
        name: 'Шампунь',
        brand: 'Pyunkang Yul',
        for: 'Для волос',//
        volume: '400 мл',
        foto: {
            foto_1: '',
            foto_2: '',
            foto_3: '',
        },
        description: 'для чего, кому, как и т.д.',//Описание
        favorites: false,//Добавить в избранное
        compare: false,//Сравнить
        reviews: {
            reating: 4.5,//рейтинг
            review: {
                com_1:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
                com_2:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
                com_3:'бла-бла-бла бла-блаб бла бла-бла бла-бла-бла',
            },//комент
            number: 35,//количество отзывов   
        },
        'Product information': 'information.txt', //Описание продукта
        //Акция
        promotion: {
             on: false,
             name: 'Скидка',
             number: 15,//Количество товара под Акцию, (если false не ограничено)-надо запомнить!!!
             discount: 40, // Скидка в процентах
             'Date start': '22.06.23', 
             'Date end': '22.06.23',
             brieflyterms: 'Краткое условие Акции',
             terms:'Полное описаание Акции/Скидки',
            },
            //Новый продукт
        'New product':{
            on: false,
        },
        //Подарок к товару
        gift:{
            on:false,
            'Name gift':'Шампунь', //Имя подарка
            'Id gift': 55,// Id Подарка
             number: 15,//Количество товара под Акцию, (если false не ограничено)-надо запомнить!!!
            'Date start': '22.06.23', 
            'Date end': '22.06.23',
            brieflyterms: 'Краткое условие Акции',
            terms:'Полное описаание Акции/Скидки',
        },   
    },
    
]

let json = JSON.parse(JSON.stringify(productCard));
console.log(json);
console.log(productCard );


export{productCard}