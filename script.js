// Countdown Timer Logic
function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `0 ngày ${hours} giờ ${minutes} phút ${seconds} giây`;

        if (--timer < 0) {
            timer = duration; 
        }
    }, 1000);
}

window.onload = function () {
    const twoHours45Min = 2 * 3600 + 45 * 60 + 10;
    const display = document.querySelector('#countdown');
    if (display) startTimer(twoHours45Min, display);
};

// --- CHATBOT LOGIC ---
function toggleChat() {
    const widget = document.getElementById('chatbot-widget');
    widget.classList.toggle('chatbot-hidden');
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendMessage();
}

const botKnowledge = [
    { keywords: ['học gì', 'nội dung', 'lộ trình'], reply: 'Khóa học giúp bạn định vị kênh, tối ưu phễu và sản xuất nội dung bằng AI để kéo khách hàng tự động trong 21 ngày thực chiến.' },
    { keywords: ['giá', 'chi phí', 'tiền', 'ưu đãi'], reply: 'Suất ưu đãi Early Bird hiện tại là 499.000đ (Giá gốc 2.5tr). Bạn sẽ được sở hữu toàn bộ lộ trình 21 ngày thực chiến đồng hành 1:1 cùng Thu.' },
    { keywords: ['bí ý tưởng', 'không biết viết'], reply: 'Đừng lo! Bạn sẽ được dùng bộ công cụ AI độc quyền giúp lên kịch bản nhanh gấp 10 lần, không bao giờ sợ cạn ý tưởng.' },
    { keywords: ['thời gian', 'bận'], reply: 'Chỉ cần dành 1 tiếng mỗi tối vào Zoom thực hành cùng lớp. Làm xong ngay tại chỗ nên cực kỳ nhàn cho người bận rộn.' }
];

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'user-msg');
    input.value = '';

    setTimeout(() => {
        let reply = 'Cảm ơn bạn đã quan tâm! Bạn có muốn Thu tư vấn kỹ hơn về lộ trình 21 ngày không?';
        const lowerText = text.toLowerCase();
        
        for (let item of botKnowledge) {
            if (item.keywords.some(kw => lowerText.includes(kw))) {
                reply = item.reply;
                break;
            }
        }
        addMessage(reply, 'bot-msg');
    }, 800);
}

function askBot(question) {
    document.getElementById('chat-input').value = question;
    sendMessage();
}

function addMessage(text, type) {
    const body = document.getElementById('chat-body');
    const msg = document.createElement('div');
    msg.className = `msg ${type}`;
    msg.textContent = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
}
