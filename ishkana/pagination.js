const list = [
    {
        Image: "img/logo.png",
        Company: "Строительная компания",
        CompanyName: "AvangardСтрой",
        Title: "Компания «Авангард Cтиль» – лидер строительного рынка. Мы строим жилые многоэтажные дома, коммерческие объекты, объекты культурного и социального назначения, мосты, дороги, тоннели, делаем реконструкцию зданий и сооружений.",
        Button: "Показать всю информацию",
        ContactData: "Контактные данные",
        Name: "Иванов Иван Иванович",
        Telephone: "+996 (700) 400 500",
        Email: "inovatio@gmail.com",
        Website: "www.avangardstyle.kg"
    },
    {
        Image: "img/logo.png",
        Company: "Строительная компания",
        CompanyName: "AvangardСтрой",
        Title: "Компания «Авангард Cтиль» – лидер строительного рынка. Мы строим жилые многоэтажные дома, коммерческие объекты, объекты культурного и социального назначения, мосты, дороги, тоннели, делаем реконструкцию зданий и сооружений.",
        Button: "Показать всю информацию",
        ContactData: "Контактные данные",
        Name: "Иванов Иван Иванович",
        Telephone: "+996 (700) 400 500",
        Email: "inovatio@gmail.com",
        Website: "www.avangardstyle.kg"
    },
    {
        Image: "img/logo.png",
        Company: "Строительная компания",
        CompanyName: "AvangardСтрой",
        Title: "Компания «Авангард Cтиль» – лидер строительного рынка. Мы строим жилые многоэтажные дома, коммерческие объекты, объекты культурного и социального назначения, мосты, дороги, тоннели, делаем реконструкцию зданий и сооружений.",
        Button: "Показать всю информацию",
        ContactData: "Контактные данные",
        Name: "Иванов Иван Иванович",
        Telephone: "+996 (700) 400 500",
        Email: "inovatio@gmail.com",
        Website: "www.avangardstyle.kg"
    },
    {
        Image: "img/logo.png",
        Company: "Строительная компания",
        CompanyName: "AvangardСтрой",
        Title: "Компания «Авангард Cтиль» – лидер строительного рынка. Мы строим жилые многоэтажные дома, коммерческие объекты, объекты культурного и социального назначения, мосты, дороги, тоннели, делаем реконструкцию зданий и сооружений.",
        Button: "Показать всю информацию",
        ContactData: "Контактные данные",
        Name: "Иванов Иван Иванович",
        Telephone: "+996 (700) 400 500",
        Email: "inovatio@gmail.com",
        Website: "www.avangardstyle.kg"
    },
]
const listBig = [...list, ...list, ...list, ...list];

document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 4; // Количество элементов на страницу
    let currentPage = 1;

    function renderItems() {
        const content = document.getElementById('content');
        content.innerHTML = '';


        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = listBig.slice(start, end);

        paginatedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.item = 'item';

            const LogoContainer = document.createElement('div');
            LogoContainer.className = 'container_logo';
            itemElement.appendChild(LogoContainer);

            const newImage = document.createElement('img');
            newImage.src = item.Image;
            LogoContainer.appendChild(newImage);

            const newUl = document.createElement('ul');
            LogoContainer.appendChild(newUl);

            const newCompany = document.createElement('p');
            newCompany.textContent = item.Company;
            newCompany.className = 'stroy';
            newUl.appendChild(newCompany);

            const newCompanyName = document.createElement('h2');
            newCompanyName.textContent = item.CompanyName;
            newCompanyName.className = 'main_text';
            newUl.appendChild(newCompanyName);

            const newTitle = document.createElement('p');
            newTitle.textContent = item.Title;
            newTitle.className = 'paragraph';
            newUl.appendChild(newTitle);

            const newBtn = document.createElement('button');
            newBtn.textContent = item.Button;
            newBtn.className = 'btn';
            newUl.appendChild(newBtn);

            const newUl1 = document.createElement('ul');
            newUl1.className = 'list1'
            LogoContainer.appendChild(newUl1);

            const newContactsData = document.createElement('h2');
            newContactsData.textContent = item.ContactData;
            newContactsData.className = 'contact_data';
            newUl1.appendChild(newContactsData);

            const newName = document.createElement('h3');
            newName.textContent = item.Name;
            newName.className = 'name';
            newUl1.appendChild(newName);

            const newTelephone = document.createElement('h3');
            newName.className = 'tel1';
            newUl1.appendChild(newTelephone);

            const newTelephone1 = document.createElement('a');
            newTelephone1.textContent = item.Telephone;
            newTelephone1.href = 'tel:+996700400500';
            newTelephone1.className = 'tel';
            newTelephone.appendChild(newTelephone1);

            const newEmail = document.createElement('h3');
            newName.className = 'mail1';
            newUl1.appendChild(newEmail);
            
            const newEmail1 = document.createElement('a');
            newEmail1.textContent = item.Email;
            newEmail1.href = 'mailto:inovatio@gmail.com';
            newEmail1.className = 'mail';
            newEmail.appendChild(newEmail1);

            const newWebsite = document.createElement('h3');
            newWebsite.className = 'link11';
            newUl1.appendChild(newWebsite);

            const newWebsite1 = document.createElement('a');
            newWebsite1.textContent = item.Website;
            newWebsite1.href = 'https://www.avangardstyle.kg/';
            newWebsite1.className = 'link';
            newWebsite.appendChild(newWebsite1);

            content.appendChild(itemElement);
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