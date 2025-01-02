document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const message = document.getElementById('message');
    message.textContent = `تم تسجيل المريض: ${name} (${email})`;
    message.style.color = 'green';

    // يمكنك هنا إضافة كود لإرسال البيانات إلى الخادم
});
