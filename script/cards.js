$(function () {
    let cards = {
        data: [
            {
                productName: 'Бульдозерно-рыхлительный агрегат гусеничный ДЭТ-400',
                category: 'Бульдозергусеничный ЧТЗ',
                image: '/img/image9.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'Гусеничный экскаватор UMG E160C',
                category: 'Экскаваторы UMGСДМ',
                image: '/img/image10.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'Станок буровой шарошечный СБШ-250/270-60КП',
                category: 'Буровыеустановки УГМКРудгормаш-Воронеж',
                image: '/img/image13.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'Автогрейдер ДЗ-98 новый 2021 г/в',
                category: 'Автогрейдер УРАЛМАШ',
                image: '/img/image14.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'ФронтальныЙ погрузчик Четра ПК12',
                category: 'Фронтальныепогрузчики ОАОПромтрактор',
                image: '/img/image14.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'Бульдозерно-рыхлительный агрегат гусеничный ДЭТ-400',
                category: 'Бульдозергусеничный ЧТЗ',
                image: '/img/image9.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'Гусеничный экскаватор UMG E160C',
                category: 'Экскаваторы UMGСДМ',
                image: '/img/image10.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'Станок буровой шарошечный СБШ-250/270-60КП',
                category: 'Буровыеустановки УГМКРудгормаш-Воронеж',
                image: '/img/image13.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'Автогрейдер ДЗ-98 новый 2021 г/в',
                category: 'Автогрейдер УРАЛМАШ',
                image: '/img/image14.png',
                caption: 'sfklfdkfdklfdkl',
            },
            {
                productName: 'ФронтальныЙ погрузчик Четра ПК12',
                category: 'Фронтальныепогрузчики ОАОПромтрактор',
                image: '/img/image14.png',
                caption: 'sfklfdkfdklfdkl',
            },  
        ],
    };
    for (let i of cards.data) {
        let add_data = `<div class="card ${i.category}"><img src=${i.image} alt="" class="card-image"><h2 class="card-title">${i.productName}</h2></div>`;
        $('.cards').append(add_data);
    }

    $('select').on('change', function () {
        $('select').not(this).val('--');
        
        let cat1 = $(this).val();
        if (cat1 === $('select').not(this).val()) {
            $('.card').show();
        } else {
            $('.card').hide();
            $('.' + cat1).show();
        }
    });

    $('.checkbox').click(function () {
        
        let varid = $(this).attr('id');
        if (!$('.checkbox').is(':checked')) {
            $('.card').show();
        } else {
            $('.card').hide();
            $('.' + varid).show();
        }
    });

    
});
