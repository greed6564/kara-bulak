import { first, second, createSvgImg } from './svgImage.js';


const list = [
    {
        data:"14 ОКТЯБРЯ",
        title: "Заголовок разрешения будет тут пример в две строки",
        svg: first,
        button: "Скачать JPEG"
    },
    {
        data:"14 ОКТЯБРЯ",
        title: "Заголовок разрешения будет тут пример в две строки",
        svg: second,
        button: "Скачать PDF"
    },
    {
        data:"14 ОКТЯБРЯ",
        title: "Заголовок разрешения будет тут пример в две строки",
        svg: second,
        button: "Скачать PDF"
    },
    {
        data:"14 ОКТЯБРЯ",
        title: "Заголовок разрешения будет тут пример в две строки",
        svg: first,
        button: "Скачать PDF"
    }
];
const listMany = [...list, ...list,];

const listBig = [...listMany, ...listMany,];
const listBiggest = [...listBig, ...listBig, ...listBig, ...listBig];

document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 16; // Количество элементов на страницу
    let currentPage = 1;

    function renderItems() {
        const content = document.getElementById('content');
        content.innerHTML = '';


        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = listBiggest.slice(start, end);

        paginatedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.item = 'item';

            const newConteiner1 = document.createElement('div');
            itemElement.appendChild(newConteiner1);

            const newConteiner2 = document.createElement('div');
            itemElement.appendChild(newConteiner2);
            newConteiner2.className = 'icon_div'

            const newData = document.createElement('h3');
            newData.textContent = item.data;
            newData.className = 'text';
            newConteiner1.appendChild(newData);

            const newTitle = document.createElement('p');
            newTitle.textContent = item.title;
            newTitle.className = 'title'
            newConteiner1.appendChild(newTitle);
            

            const newImage = createSvgImg(item.svg)
            newConteiner2.appendChild(newImage);
            newImage.className = 'pdf_icon'

            const newButton = document.createElement('a');
            newButton.textContent = item.button
            newButton.href = "#";
            newButton.className = 'btn';
            newConteiner2.appendChild(newButton);

            content.appendChild(itemElement)
        })

    }
    function renderPagination() {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const totalPages = Math.ceil(listBiggest.length / itemsPerPage);

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
