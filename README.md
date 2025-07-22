# 💬 Spring Boot WebSocket One-to-One Chat Ilovasi

Ushbu loyiha Spring Boot va WebSocket texnologiyasidan foydalangan holda oddiy, birma-bir (one-to-one) chat ilovasini namoyish etadi. Uning maqsadi real-time aloqa qanday oʻrnatilishini va shaxsiy xabarlarni qanday almashishni koʻrsatishdir.

## ✨ Xususiyatlari

* **Real-time xabarlar:** Foydalanuvchilar oʻrtasida tezkor xabar almashinuvi.
* **Birma-bir chat:** Aniq foydalanuvchiga xabar yuborish imkoniyati.
* **Spring Boot Backend:** WebSocket ulanishlarini va xabarlarni boshqarish.
* **HTML/CSS/JavaScript Frontend:** Oddiy va intuitiv foydalanuvchi interfeysi.
* **STOMP protokoli:** WebSocket ustidan xabarlarni samarali boshqarish uchun.
* **SockJS Fallback:** WebSocketʼni qoʻllab-quvvatlamaydigan brauzerlar uchun moslik.

## 🚀 Ishlatilgan Texnologiyalar

* **Backend:**
    * Java 21+
    * Spring Boot 3.x
    * Spring WebSocket
    * Maven
    * Lombok (ixtiyoriy, ammo tavsiya etiladi)
* **Frontend:**
    * HTML5
    * CSS3
    * JavaScript
    * SockJS (WebSocket emulyatsiyasi uchun)
    * STOMP.js (STOMP protokolini qoʻllab-quvvatlash uchun)

## ⚙️ Talablar

Loyihani ishga tushirish uchun sizda quyidagilar oʻrnatilgan boʻlishi kerak:

* Java Development Kit (JDK) 21 yoki undan yuqori versiya
* Apache Maven 3.x
* Git
* Internetga ulangan brauzer (Chrome, Firefox, Edge va boshqalar)

## 🏁 Ishga tushirish

1.  **Loyihani klonlash:**
    ```bash
    git clone [https://github.com/Sizning_GitHub_Hisobingiz/one-to-one-chat.git](https://github.com/Sizning_GitHub_Hisobingiz/one-to-one-chat.git)
    cd one-to-one-chat
    ```

2.  **Backendni ishga tushirish:**
    Loyihaning ildiz papkasiga oʻting (`one-to-one-chat`).
    ```bash
    # Loyihani tuzish va ishga tushirish
    mvn spring-boot:run
    ```
    Yoki IDEʼngizdan (masalan, IntelliJ IDEA) `OneToOneChatApplication.java` faylidagi `main` metodini ishga tushiring.

    Server ishga tushganda konsolda quyidagi kabi xabarni koʻrishingiz kerak:
    `Started OneToOneChatApplication in ...`

3.  **Ilovaga kirish:**
    Server ishga tushganidan soʻng, brauzeringizda quyidagi manzilni oching:
    ```
    http://localhost:8080/
    ```
    **Eslatma:** `https://` emas, `http://` protokolini ishlatganingizga ishonch hosil qiling, aks holda ulanishda xato yuzaga kelishi mumkin.

## 🚀 Qanday foydalanish?

Ilovani ishga tushirganingizdan soʻng, birma-bir chat funksionalitetini sinash uchun quyidagi qadamlarni bajaring:

1.  **Birinchi foydalanuvchi (Brauzer 1-tab):**
    * "Mening ismim..." maydoniga oʻzingiz xohlagan ismni kiriting (masalan, `User1`).
    * "Ulanish" tugmasini bosing.
2.  **Ikkinchi foydalanuvchi (Brauzer 2-tab yoki Incognito rejimda):**
    * Yangi brauzer tabini oching va yana `http://localhost:8080/` manziliga oʻting.
    * "Mening ismim..." maydoniga boshqa ismni kiriting (masalan, `User2`).
    * "Ulanish" tugmasini bosing.
3.  **Chat qilish:**
    * **User1 tabida:** "Kimga yuboryapman?" maydoniga `User2` deb yozing. Pastdagi "Xabar yozing..." maydoniga xabaringizni yozing va "Yuborish" tugmasini bosing.
    * **User2 tabida:** Sizning `User1`dan yuborgan xabaringizni koʻrishingiz kerak.
    * **User2 tabida:** "Kimga yuboryapman?" maydoniga `User1` deb yozing. Javob yozib, "Yuborish" tugmasini bosing.
    * **User1 tabida:** `User2`dan kelgan javobni koʻrasiz.

Shu tarzda siz ikki foydalanuvchi oʻrtasida real-time birma-bir chatni sinashingiz mumkin.


