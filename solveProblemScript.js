// بيانات المستخدم الصحيحة
const validUsername = "Mohamed";
const validPassword = "12/2/2009";

// إضافة حدث عند إرسال النموذج
document.getElementById('solveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على الزر

    // الحصول على البيانات المدخلة
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const responseMessage = document.getElementById('responseMessage');

    // التحقق من المدخلات
    if (!usernameInput || !passwordInput) {
        responseMessage.style.color = 'red';
        responseMessage.innerText = 'Both fields are required.';
        return; // إنهاء الدالة إذا كانت الحقول فارغة
    }

    // التحقق من البيانات المدخلة
    if (usernameInput === validUsername && passwordInput === validPassword) {
        // إذا كانت البيانات صحيحة، إظهار رسالة النجاح بعد ثانية واحدة
        setTimeout(() => {
            responseMessage.style.color = 'green'; // تغيير اللون إلى الأخضر
            responseMessage.innerText = "جدع! تم حل مشكلة موبايلك بنجاح. الهاتف في أمان الآن";
        }, 1000);
    } else {
        // إذا كانت البيانات خاطئة، إظهار رسالة الخطأ بعد ثانية واحدة
        setTimeout(() => {
            responseMessage.style.color = 'red'; // تغيير اللون إلى الأحمر
            responseMessage.innerText = "مراتك هتزعلك!!";
        }, 1000);
    }
});
