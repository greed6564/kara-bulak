const list = [
    {
        Image: 'img/Group219.png',
    },
    {
        Image: 'img/Group219.png',
    },
    {
        Image: 'img/Group219.png',
    },
]
const listBig = [...list, ...list, ...list,];
const listBiggest = [...listBig, ...listBig, ...listBig, ...listBig];

document.addEventListener('DOMContentLoaded', function(){
    const itemsPerPage = 9; // Количество элементов на страницу
    let currentPage = 1;

    function renderItems(){
        const content = document.getElementById('content');
        content.innerHTML = '';


        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = listBiggest.slice(start, end);

        paginatedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';

            const NewLink = document.createElement('a');
            NewLink.href = '/images/images.html';
            itemElement.appendChild(NewLink);

            const newImg = document.createElement('img');
            newImg.src = item.Image;
            NewLink.appendChild(newImg);

            content.appendChild(itemElement);
        });
    };

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
        };
    };

    renderItems();
    renderPagination();
})