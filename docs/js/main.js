// FILTRATION
if (($("div").is("#portfolio-projects"))) {

$(document).ready(function(){
    $('#portfolio-projects').mixItUp();
})};
  
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
if (($("form").is("#contact-form"))) {

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
}

// Функция AJAX запроса на сервер
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

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепочку срабатывания остальных функций
    return false;
}

// NAV PAGE
if (($("div").is("#page-nav"))) {

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
}

const mobileMenu = document.querySelector('#header-top__nav'); 

const mobileMenuBtn = document.querySelector('#header-top__button-wrapper');

const mobileBtnSpan = mobileMenuBtn.querySelector('#header-top__button');

mobileMenuBtn.addEventListener('click', function(){
    mobileBtnSpan.classList.toggle('header-top__button-active');
    mobileMenu.classList.toggle('show');
    document.querySelector('.overlay').classList.toggle('show');
    document.querySelector('.logo').classList.toggle('show');
    document.body.classList.toggle('noscroll');
})

window.addEventListener('resize', function(){
    mobileBtnSpan.classList.remove('header-top__button-active');
    mobileMenu.classList.remove('show');
    document.querySelector('.overlay').classList.remove('show');
    document.body.classList.remove('noscroll');
})














