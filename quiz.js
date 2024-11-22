// JSON Verisi
const quizData = {
    "quiz": {
        "title": "HTML ve JavaScript Testi",
        "questions": [
            {
                "question": "HTML neyin kısaltmasıdır?",
                "options": [
                    "Hyper Text Markup Language",
                    "High Text Machine Language",
                    "Hyperlinks and Text Markup Language"
                ],
                "correct_answer": "Hyper Text Markup Language"
            },
            {
                "question": "HTML'de bir bağlantıyı tanımlamak için hangi etiket kullanılır?",
                "options": [
                    "<a>",
                    "<link>",
                    "<a href>"
                ],
                "correct_answer": "<a href>"
            },
            {
                "question": "Harici bir JavaScript dosyasını dahil etmenin doğru yolu nedir?",
                "options": [
                    "<script src='file.js'></script>",
                    "<script href='file.js'></script>",
                    "<javascript src='file.js'></javascript>"
                ],
                "correct_answer": "<script src='file.js'></script>"
            },
            {
                "question": "Aşağıdakilerden hangisi geçerli bir JavaScript veri türü değildir?",
                "options": [
                    "Number",
                    "String",
                    "Character"
                ],
                "correct_answer": "Character"
            },
            {
                "question": "JavaScript'teki 'this' anahtar kelimesi neyi ifade eder?",
                "options": [
                    "Şu anda kodu çalıştıran nesneyi",
                    "Pencere (window) nesnesini",
                    "Şu anda çalıştırılan fonksiyonu"
                ],
                "correct_answer": "Şu anda kodu çalıştıran nesneyi"
            },
            {
                "question": "Aşağıdakilerden hangisi bir JavaScript fonksiyonunun doğru sözdizimidir?",
                "options": [
                    "function = myFunction()",
                    "function myFunction() {}",
                    "function: myFunction() {}"
                ],
                "correct_answer": "function myFunction() {}"
            },
            {
                "question": "Bir JavaScript değişkeni nasıl tanımlarsınız?",
                "options": [
                    "var myVar;",
                    "variable myVar;",
                    "let myVar;"
                ],
                "correct_answer": "var myVar;"
            },
            {
                "question": "JavaScript'teki bir for döngüsünün doğru sözdizimi hangisidir?",
                "options": [
                    "for (i = 0; i < 10; i++) {}",
                    "for i = 0; i < 10; i++ {}",
                    "for (int i = 0; i < 10; i++) {}"
                ],
                "correct_answer": "for (i = 0; i < 10; i++) {}"
            },
            {
                "question": "'alert' fonksiyonu JavaScript'te ne yapar?",
                "options": [
                    "Bir uyarı kutusunda bir mesaj gösterir",
                    "Konsola bir mesaj yazar",
                    "Bir e-posta bildirimi gönderir"
                ],
                "correct_answer": "Bir uyarı kutusunda bir mesaj gösterir"
            },
            {
                "question": "JavaScript'te bir HTML elemanının içeriğini değiştirmek için hangi yöntem kullanılır?",
                "options": [
                    "document.getElementById('id').innerHTML = 'Yeni içerik';",
                    "document.innerHTML('id').setContent('Yeni içerik');",
                    "document.getElementById('id').setContent('Yeni içerik');"
                ],
                "correct_answer": "document.getElementById('id').innerHTML = 'Yeni içerik';"
            }
        ]
    }
};

// HTML'ye Soruları Ekle
const quizContainer = document.getElementById('quiz');
quizData.quiz.questions.forEach((questionData, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
        <p>${index + 1}. ${questionData.question}</p>
        <div class="options">
            ${questionData.options.map(option => `
                <label>
                    <input type="radio" name="q${index}" value="${option}"> ${option}
                </label>
            `).join('')}
        </div>
    `;
    quizContainer.appendChild(questionDiv);
});

// Test Sonucunu Hesapla
document.getElementById('submit').addEventListener('click', () => {
    let score = 0;
    quizData.quiz.questions.forEach((questionData, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === questionData.correct_answer) {
            score++;
        }
    });
    document.getElementById('result').textContent = `Sonuç: ${score} / ${quizData.quiz.questions.length}`;
});
