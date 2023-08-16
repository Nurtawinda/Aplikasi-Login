/** @module Login-Script*/
/**
*Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElemet}
*/

const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat Variabel inputEmailElement untuk tampilan input email
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat Variabel inputPasswordElement untuk tampilan input password
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat Variabel expectedEmail untuk menyimpan informasi email sementara
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat Variabel expectedPassword untuk menyimpan informasi password sementara
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Menambahkan aksi klik pada button*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

/**
* Membuat Variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan
* @constant {string}
*/
  const email = inputEmailElement.value;

/**
* Membuat Variabel password untuk menyimpan nilai password yang didapatkan saat buttin ditekan
* @constant {string}
*/
  const password = inputPasswordElement.value;

  /* memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan*/
  if (email == expectedEmail && password == expectedPassword) {

    /*Jika sesuai maka program akan berpindah ke halaman home*/
    goToHome();
  } else {

    /* Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah*/
    showPopUp();
  }
});
