// Плавная прокрутка до разделов
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация появления элементов
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

// Валидация формы контактов
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (e) {
            let isValid = true;

            const name = form.querySelector('#name');
            if (!name.value.trim()) {
                isValid = false;
                alert('Пожалуйста, введите ваше имя.');
            }

            const email = form.querySelector('#email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                isValid = false;
                alert('Пожалуйста, введите корректный email.');
            }

            const message = form.querySelector('#message');
            if (!message.value.trim()) {
                isValid = false;
                alert('Пожалуйста, введите сообщение.');
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});