// بيانات المستخدم الصحيحة
const validUsername = "Mohamed batal";
const validPassword = "Hero&1986&";

// إضافة حدث عند إرسال النموذج
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // إيقاف إرسال النموذج لعدم إعادة تحميل الصفحة

    // الحصول على قيم المدخلات
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    const hackedMessage = document.getElementById('hackedMessage');
    const floatingVideo = document.getElementById('floatingVideo');
    const solveProblem = document.getElementById('solveProblem');
    const successSound = new Audio('Danger Alarm Sound Effect.mp3'); // تأكد من مسار الملف الصوتي

    // إخفاء رسائل سابقة
    messageElement.innerText = '';
    hackedMessage.style.display = 'none';  // إخفاء الرسالة
    floatingVideo.style.display = 'none';  // إخفاء الفيديو
    solveProblem.style.display = 'none';  // إخفاء رابط "حل هذه المشكلة"

    // التحقق من المدخلات
    if (!username || !password) {
        messageElement.innerText = 'Both fields are required.';
        return;
    }

    if (password.length < 8) {
        messageElement.innerText = 'Password must be at least 8 characters long.';
        return;
    }

    // التحقق من اسم المستخدم وكلمة المرور
    if (username === validUsername && password === validPassword) {
        // إذا كانت البيانات صحيحة، إظهار رسالة "Your iPhone 14 Pro M is Hacked!!!"
        hackedMessage.style.display = 'block';  // إظهار الرسالة
        successSound.play();
        successSound.loop = true; // جعل الصوت يتكرر بشكل مستمر

        // عرض الفيديو بعد التحقق من صحة البيانات
        floatingVideo.style.display = 'block';  // إظهار الفيديو
        floatingVideo.play(); // تشغيل الفيديو

        // التحريك العشوائي للفيديو
        floatingVideo.style.position = 'absolute';
        floatingVideo.style.animation = 'moveAround 10s infinite';

        // إظهار رابط "حل هذه المشكلة" بعد 5 ثوانٍ
        setTimeout(() => {
            solveProblem.style.display = 'block';  // إظهار الرابط
        }, 5000);
    } else {
        messageElement.innerText = 'Invalid username or password.';
    }
});
