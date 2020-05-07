// FILTRATION
$(document).ready(function(){
    $('#portfolio-projects').mixItUp();
  });
  
// PLACEHOLDER
  const formRows = document.querySelectorAll('.contacts__input-wrapper')
  const formRowsInputs = document.querySelectorAll('.input')

  for (let i = 0; i < formRows.length; i++) {

    formRows[i].addEventListener('click', function () {
          const thisParent = this.querySelector('span').classList.add('active');
      })
  }

  for (let i = 0; i < formRowsInputs.length; i++) {
      formRowsInputs[i].addEventListener('blur', function () {
          const thisParent = this.parentElement;
          if (this.value == '') {
              thisParent.querySelector('span').classList.remove('active');

          }
      })
  }
  
// FORM VALIDATE
$('#contact-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        theme: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        email: {
            required: 'Введите email',
            email: 'отсутсвует символ @'
        },
        theme: {
            required: 'Введите тему сообщения'
        },
        message: {
            required: 'Введите текст сообщения'
        }
    },
    submitHandler: function (form) {
        ajaxFormSubmit();
    }
})

// Функция AJAX запрса на сервер
function ajaxFormSubmit() {

    let string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

    //Формируем ajax запрос
    $.ajax({
        type: "POST", // Тип запроса - POST
        url: "php/mail.php", // Куда отправляем запрос
        data: string, // Какие даные отправляем, в данном случае отправляем переменную string

        // Функция если все прошло успешно
        success: function (html) {
            $("#contact-form").slideUp(800);
            $('#answer').html(html);
        }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
}

// NAV PAGE
$("#page-nav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
    begin: function() {},
    end: function() {},
    scrollChange: function($currentListItem) {}
});

document.querySelector('.header-top__button-wrapper').onclick = function(){
    document.querySelector('.header-top__button').classList.toggle('header-top__button-active');
}

// document.querySelector('.header-top__button-wrapper').active = function(){
//     document.querySelector('.top-button-nav').classList.toggle('top-button-nav-active');
// }

const mobileMenu = document.querySelector('.header-top__nav'); 
// заменил
const mobileMenuBtn = document.querySelector('.header-top__button-wrapper');
// заменил

mobileMenuBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle('show');
    document.querySelector('.overlay').classList.toggle('show');
    document.querySelector('.logo').classList.toggle('show');
})














