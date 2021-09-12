let newR = document.getElementById("newR");
let oldR = document.getElementById("oldR");
let newB = document.getElementById("newB");
let select = document.getElementById("select");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let insertLib = document.getElementById("insertLib");
let insertLibButton = document.getElementById("insertLibButton");
let insertLibForm = document.getElementById("insertLibForm");
let searchResult = document.getElementById("searchResult");
let bookName = document.getElementById("bookName");
let auterName = document.getElementById("auterName");
let bookClass = document.getElementById("bookClass");
let rowNumber = document.getElementById("rowNumber");
let bookSection = document.getElementById("bookSection");
let submitAddBook = document.getElementById("submitAddBook");
let insertBook = document.getElementById("insertBook");
let selectI = document.getElementById("selectI");
let searchLibForm = document.getElementById("searchLibForm");

insertLibForm.onsubmit = (form) => {
    form.preventDefault();
    let insertLibFormData = new FormData(insertLibForm);
    fetch("add-lib.php", {
        method: "POST",
        body: insertLibFormData,

    }).then(response => response.text()).then(data => {
        console.log(data);
        searchResult.innerHTML = data;
        insertLib.value = "";

    })
    // location.reload();
};

insertBook.onsubmit = (form) => {
    form.preventDefault();
    let insertBookFormData = new FormData(insertBook);
    fetch("add-item.php", {
        method: "POST",
        body: insertBookFormData,
    }).then(response => response.text()).then(data => {
        searchResult.innerHTML = data;
        bookName.value = "";
        auterName.value = "";
        bookClass.value = "";
        rowNumber.value = "";
        bookSection.value = "";
    })
};

let url = "http://aladdin-products.eb2a.com/liberary/read-selects.php";
fetch(url).then(response => response.json()).then(data => {
    // console.log(data);
    data.forEach(element => {
        // console.log(element['Tables_in_liberary_db']);
        select.innerHTML += "<option>" + element['Tables_in_eb2a_29357997_liberary_db'] + "</option>";
        selectI.innerHTML += "<option>" + element['Tables_in_eb2a_29357997_liberary_db'] + "</option>";
    });
})
searchLibForm.onsubmit = (formS) => {
    formS.preventDefault();
    let searchBookFormData = new FormData(searchLibForm);
    searchResult.innerHTML = "";
    // searchInput.value = "";

    // let urlSearch = "http://192.168.1.107/myphp/study/advanced/api-with-php-js/7/read-items.php";
    fetch("read-items.php", {
        method: "POST",
        body: searchBookFormData,
    }).then(response => response.json()).then(data => {

        console.log(data);
        let searchValue = document.getElementById("searchInput").value;
        // console.log(searchValue);
        data.forEach(element => {
            // console.log(element.BookName);
            if (searchValue.length >= 3) {
                if (element.BookName.toLowerCase().search(searchValue.toLowerCase()) != -1 || element.BookAutor.toLowerCase().search(searchValue.toLowerCase()) != -1 || element.BookClass.toLowerCase().search(searchValue.toLowerCase()) != -1) {
                    searchResult.innerHTML += '<div class="container card-header shadow p-3 mb-5 bg-white rounded"><h2> اسم الكتاب: <br>' + element.BookName + '</h2> <h3 style="color:darkred;"> اسم المؤلف: <br>' +
                        element.BookAutor + '</h3><p style="color:blue;">كلمات مفتاحية:<br>' + element.BookClass +
                        '</p><h2>الكتاب في الصف: ' + element.BookRow + '</h2><h2>الكتاب في القطاع: ' + element.BookSection + '</h2></div>';
                    // searchResult.innerHTML += '<h3>اسم المؤلف:<br>' + element.BookAutor + '</h3>' + element.BookSection + '</h2><hr></div>';
                    //  searchResult.innerHTML += '<p style="color:blue;">كلمات مفتاحية:<br>' + element.BookClass + '</p>';
                    //  searchResult.innerHTML += '<h2>الكتاب في الصف: ' + element.BookRow + '</h2>';
                    //  searchResult.innerHTML += '<h2>الكتاب في القطاع: ' + element.BookSection + '</h2><hr></div>';
                    // console.log(element);
                }

            }
        });
    })
};

function disable() {

    if (newR.checked == true) {
        select.disabled = true;
        searchInput.disabled = true;
        searchButton.disabled = true;
        insertLib.disabled = false;
        insertLibButton.disabled = false;

        bookName.disabled = true;
        auterName.disabled = true;
        bookClass.disabled = true;
        rowNumber.disabled = true;
        bookSection.disabled = true;
        submitAddBook.disabled = true;
        selectI.disabled = true;
    } else if (newB.checked == true) {
        select.disabled = true;
        searchInput.disabled = true;
        searchButton.disabled = true;
        insertLib.disabled = true;
        insertLibButton.disabled = true;

        bookName.disabled = false;
        auterName.disabled = false;
        bookClass.disabled = false;
        rowNumber.disabled = false;
        bookSection.disabled = false;
        submitAddBook.disabled = false;
        selectI.disabled = false;
    } else if (oldR.checked == true) {
        select.disabled = false;
        searchInput.disabled = false;
        searchButton.disabled = false;
        insertLib.disabled = true;
        insertLibButton.disabled = true;

        bookName.disabled = true;
        auterName.disabled = true;
        bookClass.disabled = true;
        rowNumber.disabled = true;
        bookSection.disabled = true;
        submitAddBook.disabled = true;
        selectI.disabled = true;
    }

}

function disable2() {

    if (newR.checked == true) {
        let pass = prompt("أدخل كلمة المرور لإنشاء قاعدة بيانات جديدة");
        if (pass == 23581321) {
            select.disabled = true;
            searchInput.disabled = true;
            searchButton.disabled = true;
            insertLib.disabled = false;
            insertLibButton.disabled = false;

            bookName.disabled = true;
            auterName.disabled = true;
            bookClass.disabled = true;
            rowNumber.disabled = true;
            bookSection.disabled = true;
            submitAddBook.disabled = true;
            selectI.disabled = true;
        } else {

            alert("كلمة مرور غير صحيحة");
            oldR.checked = true;
            select.disabled = false;
            searchInput.disabled = false;
            searchButton.disabled = false;
            insertLib.disabled = true;
            insertLibButton.disabled = true;

            bookName.disabled = true;
            auterName.disabled = true;
            bookClass.disabled = true;
            rowNumber.disabled = true;
            bookSection.disabled = true;
            submitAddBook.disabled = true;
            selectI.disabled = true;
        }

    } else if (newB.checked == true) {
        let pass = prompt("أدخل كلمة المرور لإدراج  كتاب جديد");
        if (pass == 23581321) {
            select.disabled = true;
            searchInput.disabled = true;
            searchButton.disabled = true;
            insertLib.disabled = true;
            insertLibButton.disabled = true;

            bookName.disabled = false;
            auterName.disabled = false;
            bookClass.disabled = false;
            rowNumber.disabled = false;
            bookSection.disabled = false;
            submitAddBook.disabled = false;
            selectI.disabled = false;
        } else {
            alert("كلمة مرور غير صحيحة");
            oldR.checked = true;
            select.disabled = false;
            searchInput.disabled = false;
            searchButton.disabled = false;
            insertLib.disabled = true;
            insertLibButton.disabled = true;

            bookName.disabled = true;
            auterName.disabled = true;
            bookClass.disabled = true;
            rowNumber.disabled = true;
            bookSection.disabled = true;
            submitAddBook.disabled = true;
            selectI.disabled = true;
        }

    } else if (oldR.checked == true) {
        select.disabled = false;
        searchInput.disabled = false;
        searchButton.disabled = false;
        insertLib.disabled = true;
        insertLibButton.disabled = true;

        bookName.disabled = true;
        auterName.disabled = true;
        bookClass.disabled = true;
        rowNumber.disabled = true;
        bookSection.disabled = true;
        submitAddBook.disabled = true;
        selectI.disabled = true;
    }

}