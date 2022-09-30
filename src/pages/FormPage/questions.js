export const questions = [
    {
    question: 'С какими группами отходов Вы работаете?',
    type: "checkbox",
    options: [{
        value: 'Полимеры',
        id: 'polymers'
    },{
        value: 'Картон',
        id: 'carton'
    },{
        value: 'Металл',
        id: 'metal'
    },{
        value: 'Стекло',
        id: 'glass'
    },{
        value: 'Другое',
        id: 'other'
    }]
},{
        question: 'Какой профиль Вашей деятельности?*',
        type: "checkbox",
        options: [{
            value: 'Торговая сеть',
            id: 'trade',
            name: 'profile'
        },{
            value: 'Сборка, транспортировака, сортировка отходов',
            id: 'sorting',
            name: 'profile'
        },{
            value: 'Переработка, утилизация',
            id: 'recycling',
            name: 'profile'
        },{
            value: 'Продажа, монтаж, сервисное обслуживание оборудования',
            id: 'sales',
            name: 'profile'
        },{
            value: 'Производство напитков, продуктов питания, упаковки',
            id: 'production',
            name: 'profile'
        },{
            value: 'Социальный активист, агент',
            id: 'agent',
            name: 'profile'
        },{
            value: 'Другое',
            id: 'other',
            name: 'profile'
        }]
    },
    {
        question: 'Ваши контактные данные?',
        type: "personalData",
        data: {
        surname: {
            type:'text',
            placeholder:"Фамилия*",
        },
        name: {
            type:'text',
            placeholder:"Имя*",
        },
        middle: {
            type:'text',
            placeholder:"Отчество",
        },
        company: {
            type:'text',
            placeholder:"Название организации*",
        },
        telephone: {
            type:'tel',
            placeholder:"Контактный номер телефона*",
        },
       email:{
            type:'email',
            placeholder:"Ваш E-mail",
        }}
    },
    {
        question: 'Пожалуйста, сообщите нам каким способом Вам удобнее получить дальнейшую информацию?',
        type: "radio",
        options: [{
            value: 'SMS',
            id: 'sms',
            name: 'contact',
            checked: true
        },{
            value: 'E-mail',
            id: 'email',
            name: 'contact',
            checked: false
        }]
    }
]
