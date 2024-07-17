const surname = document.getElementById('surname');
const lastName = document.getElementById('lastName');
const tel = document.getElementById('tel');
const input = document.getElementById('form');
const btn = document.getElementById('submit');

let surnameValue = '';
let lastNameValue = '';
let telValue = '';
let fileList;

surname.addEventListener('change', function(e){
    surnameValue = e.target.value;
});
lastName.addEventListener('change', function(e){
    lastNameValue = e.target.value;
});
tel.addEventListener('change', function(e){
    telValue = e.target.value;
});
input.addEventListener("change", function(e){
    if(e.target.files.length > 0){
        fileList = e.target.files[0];
    }
});

btn.addEventListener('click', function(){
    const formData = new FormData();
    formData.append('surname', surnameValue);
    formData.append('lastName', lastNameValue);
    formData.append('tel', telValue);
    if (fileList) {
        formData.append('file', fileList);
    }

    console.log(formData)

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: formData
    }).then((response) => response.json()).then((data) => {
        console.log(data);
    });
});
