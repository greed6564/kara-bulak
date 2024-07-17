const list = [
    {
        VideoImg: 'img/Group228.png',
    },
    {
        VideoImg: 'img/Group228.png',
    },
]

const listBig = [...list, ...list, ...list,];
const listBiggest = [...listBig, ...listBig, ...listBig, ...listBig];

document.addEventListener('DOMContentLoaded', function(){
    const itemsPerPage = 6; // Количество элементов на страницу
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
            NewLink.href = 'https://youtu.be/xvFZjo5PgG0';
            itemElement.appendChild(NewLink);

            const newVideoImg = document.createElement('img');
            newVideoImg.src = item.VideoImg;
            NewLink.appendChild(newVideoImg);

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
});