//create curds

var siteName = document.getElementById('Site-Name');
var websiteURL = document.getElementById('Site-URL');
var submitBtn = document.getElementById('submitBtn');
var visitbtn;
bookarry = [];

// localStorage.clear();
//localstorge

if (localStorage.getItem('allbooks') != null) {
    bookarry = JSON.parse(localStorage.getItem('allbooks'));
    displaybook(bookarry);
}

// addfunction
function bookMark() {
    var book = {
        Name: siteName.value,
        Websiteurl: websiteURL.value,
    }
    bookarry.push(book);
    localStorage.setItem('allbooks', JSON.stringify(bookarry));
    clearForm();
    displaybook(bookarry);
}
// clearfunction
function clearForm() {
    siteName.value = '';
    websiteURL.value = '';
}
//displayfunction

function displaybook(bookarry) {
    var cartona = ``;

    for (var i = 0; i < bookarry.length; i++) {
        var loop = i + 1;
        cartona += `
        <tr>
            <td>${[loop]}</td>
            <td>${bookarry[i].Name}</td>
            <td><button class="bt2 rounded-2"><i class="fa-solid fa-eye pe-2 btn-visit"></i>Visit</button></td>
            <td><button onClick="deletBook(${i});" class="bt3 btn-delete rounded-2"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
        `
    }
    document.getElementById('tableBody').innerHTML = cartona;

}

//visitefunction
function isUrl(url) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
}

function windowOpen() {
    window.open("", "_blank ");
}


//deletefunction//splice
function deletBook(deletindex) {
    bookarry.splice(deletindex, 1);
    localStorage.setItem('allbooks', JSON.stringify(bookarry));
    displaybook(bookarry);
}

