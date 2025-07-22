let stompClient = null;
let senderId = null; // Mening ismim (yuboruvchi)
let receiverIdInput = document.getElementById('receiverId'); // Kimga yuborish
let messageInput = document.getElementById('messageInput');
let messagesDiv = document.getElementById('messages');
let connectButton = document.getElementById('connectButton');
let disconnectButton = document.getElementById('disconnectButton');
let sendMessageButton = document.getElementById('sendMessageButton');
let senderIdInput = document.getElementById('senderId');

// Tugmalarni yoqish/o'chirish
function setConnected(connected) {
    connectButton.disabled = connected;
    disconnectButton.disabled = !connected;
    messageInput.disabled = !connected;
    sendMessageButton.disabled = !connected;
    senderIdInput.disabled = connected;
    receiverIdInput.disabled = !connected;
    messagesDiv.innerHTML = ''; // Chatni tozalash
}

// WebSocket serveriga ulanish
function connect() {
    senderId = senderIdInput.value.trim();
    if (!senderId) {
        alert("Iltimos, ismingizni kiriting!");
        return;
    }

    // /ws endpointiga ulanish
    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, onConnected, onError);
}

// Ulanish muvaffaqiyatli bo'lsa
function onConnected() {
    setConnected(true);
    console.log('Serverga muvaffaqiyatli ulanildi!');

    // Shaxsiy xabarlar navbatiga obuna bo'lish
    // Har bir foydalanuvchi o'ziga keladigan xabarlarni /user/{username}/queue/messages orqali oladi
    stompClient.subscribe('/user/' + senderId + '/queue/messages', onMessageReceived);

    // Agar serverda user online holatini ko'rsatuvchi funksiya bo'lsa, shu yerda yuborish mumkin
    // Masalan: stompClient.send("/app/chat.addUser", {}, JSON.stringify({sender: senderId, type: 'JOIN'}));
}

// Ulanishda xato bo'lsa
function onError(error) {
    console.error('Ulanishda xato: ' + error);
    alert('Serverga ulanishda xato yuz berdi. Konsolni tekshiring.');
    setConnected(false);
}

// WebSocket serveridan xabar qabul qilish
function onMessageReceived(payload) {
    const message = JSON.parse(payload.body);
    displayMessage(message);
}

// Xabarni chat oynasida ko'rsatish
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    // Xabar kimdan kelganiga qarab stil berish
    if (message.sender === senderId) {
        messageElement.classList.add('my-message');
        messageElement.textContent = `Siz (${message.receiver}): ${message.content}`;
    } else if (message.receiver === senderId) {
        messageElement.classList.add('other-message');
        messageElement.textContent = `${message.sender}: ${message.content}`;
    } else {
        // Bu holatda umumiy xabarlar bo'lsa ishlatiladi, hozircha 1-1 chat
        messageElement.textContent = `${message.sender} -> ${message.receiver}: ${message.content}`;
    }

    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Avtomatik pastga aylantirish
}

// Xabar yuborish
function sendMessage() {
    const receiver = receiverIdInput.value.trim();
    const messageContent = messageInput.value.trim();

    if (!stompClient || !stompClient.connected) {
        alert("Iltimos, avval ulaning!");
        return;
    }
    if (!receiver) {
        alert("Kimga yuborish kerakligini kiriting!");
        return;
    }
    if (messageContent && senderId) {
        const chatMessage = {
            sender: senderId,
            receiver: receiver,
            content: messageContent,
            type: 'CHAT'
        };
        // "/app/chat.sendMessage" endpointiga yuborish
        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
        messageInput.value = ''; // Xabar inputini tozalash
    }
}

// WebSocket serveridan uzilish
function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Serverdan uzildi!");
}

// Tugmalarga hodisa tinglovchilarni qo'shish
connectButton.addEventListener('click', connect);
disconnectButton.addEventListener('click', disconnect);
sendMessageButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});