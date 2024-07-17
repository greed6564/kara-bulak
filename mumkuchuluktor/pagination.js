const list = [
    {
        Image: 'img/Group106.png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(1).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(2).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(3).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(4).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(5).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(6).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(7).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(8).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(9).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(10).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
    {
        Image: './img/Rectangle169(11).png',
        Data: '14 ОКТЯБРЯ',
        textIsfana: 'В городе Исфана прошли соревнования по мини-футболу. Фото',
        Button: 'Подробнее',
    },
]
const listBig = [...list,...list,...list,...list];

document.addEventListener('DOMContentLoaded', function(){
    const itemsPerPage = 12; // Количество элементов на страницу
    let currentPage = 1;

    function renderItems(){
        const content = document.getElementById('content');
        content.innerHTML = '';


        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = listBig.slice(start, end);

        paginatedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.item = 'item';

            const newImage = document.createElement('img');
            newImage.src = item.Image;
            itemElement.appendChild(newImage);

            const newData = document.createElement('h3');
            newData.textContent = item.Data;
            newData.className = 'data';
            itemElement.appendChild(newData);

            const newTextIsfana = document.createElement('h3');
            newTextIsfana.textContent = item.textIsfana;
            newTextIsfana.className = 'text_isf';
            itemElement.appendChild(newTextIsfana);

            const NewBtn = document.createElement('a')
            NewBtn.href = '#';
            NewBtn.textContent = item.Button;
            NewBtn.className = 'link';
            itemElement.appendChild(NewBtn);

            content.appendChild(itemElement);
        });
    };

    function renderPagination() {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const totalPages = Math.ceil(listBig.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.className = i === currentPage ? 'link1-1' : 'link1';
            button.addEventListener('click', function () {
                currentPage = i;
                renderItems();
                renderPagination();
            });
            pagination.appendChild(button);
        }
    }

    renderItems();
    renderPagination();
})