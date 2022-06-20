let accordions = document.getElementsByClassName('service');
let i;
let li;

for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        if(this.classList.contains('_active')) {
            this.classList.remove('_active');
        } else {
            for(li = 0; li < accordions.length; li++) {
                accordions[li].classList.remove('_active')
            }
            this.classList.add('_active')
        }
    });
}

let burger = document.querySelector('.burger')
let burgerMenu = document.querySelector('.burger__menu')
let headerOneScreen = document.querySelector('.header__one-screen')

burger.addEventListener('click', function() {
    burger.classList.toggle('_active')
    burgerMenu.classList.toggle('_active')
    headerOneScreen.classList.toggle('_active')
})


let selector = document.querySelectorAll("input[type='tel']")
let im = new Inputmask('+7 (999) 999-99-99')
im.mask(selector)

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
    let files = e.currentTarget.files;
    console.log(files)

    if (files.lenght) {
        fileInput.closest('label').querySelector('span').textContent = files[0].name
    } else {
        fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл'
    }
})

let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('отправлено')
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

			fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
        }
    });
}

validateForms('.form', { email: { required: true, email: true }, tel: { required: true }}, '.thanks-popup', 'send goal')