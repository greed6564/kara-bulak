const list = [
    {
        isfan: "г.Исфан",
        manager: "Менеджер отдела продаж",
        interview: "По собеседованию",
        button: "Подробнее",
    },
    {
        isfan: "г.Исф 123 123 12 3 123ан",
        manager: "Менеджер отдела продаж",
        interview: "По собеседованию",
        button: "Подробнее",
    },
    {
        isfan: "г.Исфан",
        manager: "Менед 12 31 23 12 3жер отдела продаж",
        interview: "По собеседованию",
        button: "Подробнее",
    },
    {
        isfan: "г.Исфан",
        manager: "Менеджер отдела продаж",
        interview: "По собеседованию",
        button: "Подробнее",
    },
];

const listBig = [...list, ...list];
const listBigger = [...listBig, ...listBig, ...listBig, ...listBig];

document.addEventListener('DOMContentLoaded', function (){
    const itemsPerPage = 8; // Количество элементов на страницу
    let currentPage = 1;

    function renderItems() {
        const content = document.getElementById('content');
        content.innerHTML = '';


        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = listBigger.slice(start, end);

        paginatedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.item = 'item';
            itemElement.className = 'block1';

            const newIsfan = document.createElement('p');
            newIsfan.textContent = item.isfan;
            newIsfan.className = 'text_block1';
            itemElement.appendChild(newIsfan);

            const newManager = document.createElement('p');
            newManager.textContent = item.manager;
            newManager.className = 'text_block1';
            itemElement.appendChild(newManager);

            const newInterview = document.createElement('p');
            newInterview.textContent = item.interview;
            newInterview.className = 'text_block1';
            itemElement.appendChild(newInterview);

            const newBtn = document.createElement('a');
            newBtn.href = '/kontrol/kontrol.html';
            newBtn.textContent = item.button;
            newBtn.className = 'button1';
            itemElement.appendChild(newBtn);

            content.appendChild(itemElement);
        });

    };

    function renderPagination() {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const totalPages = Math.ceil(listBigger.length / itemsPerPage);

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
});;