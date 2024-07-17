const list =  [
    {
        title: "В городе Исфана прошли соревнования по мини-футболу. Фото",
        image: 'img/Rectangle 207.png',
        data: "14 ОКТЯБРЯ",
        button: "Подробнее"
    },
    {
        title: "В городе Исфана прошли соревнования по мини-футболу. Фото",
        image: 'img/Rectangle 207 (1).png',
        data: "14 ОКТЯБРЯ",
        button: "Подробнее"
    },
    {
        title: "В городе Исфана прошли соревнования по мини-футболу. Фото",
        image: 'img/Rectangle 207 (2).png',
        data: "14 ОКТЯБРЯ",
        button: "Подробнее"
    },
    {
        title: "В городе Исфана прошли соревнования по мини-футболу. Фото",
        image: 'img/Rectangle 207 (3).png',
        data: "14 ОКТЯБРЯ",
        button: "Подробнее"
    },
    {
        title: "В городе Исфана прошли соревнования по мини-футболу. Фото",
        image: 'img/Rectangle 207.png',
        data: "14 ОКТЯБРЯ",
        button: "Подробнее"
    },
    {
        title: "В городе Исфана прошли соревнования по мини-футболу. Фото",
        image: 'img/Rectangle 207 (1).png',
        data: "14 ОКТЯБРЯ",
        button: "Подробнее"
    },
    {
        title: "В городе Исфана прошли соревнования по мини-футболу. Фото",
        image: 'img/Rectangle 207 (2).png',
        data: "14 ОКТЯБРЯ",
        button: "Подробнее"
    },
    {
        title: "В городе Исфана прошли соревнования по мини-футболу. Фото",
        image: 'img/Rectangle 207 (3).png',
        data: "14 ОКТЯБРЯ",
        button: "Подробнее"
    }
];

const listMany = [...list, ...list, ...list];
const listBig = [...listMany, ...listMany];

document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 12; // Количество элементов на страницу
    let currentPage = 1;

    function renderItems() {
        const content = document.getElementById('content');
        content.innerHTML = '';


        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = listBig.slice(start, end);

        paginatedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';

            const newImage = document.createElement('img');
            newImage.src = item.image;
            itemElement.appendChild(newImage);

            const newData = document.createElement('h3');
            newData.textContent = item.data;
            newData.className = 'data';
            itemElement.appendChild(newData)

            const newTitle = document.createElement('p');
            newTitle.textContent = item.title;
            newTitle.className = "text_isf"
            itemElement.appendChild(newTitle);

            const newButton = document.createElement('a');
            newButton.href = "#";
            newButton.className = 'link';
            newButton.textContent = item.button;
            itemElement.appendChild(newButton)

            content.appendChild(itemElement)
        });
    }

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
});