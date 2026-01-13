const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3, video4];

// Função para reproduzir vídeos no hover
videoList.forEach(function(video) {
    if (video) { // Verifica se o vídeo existe
        video.addEventListener("mouseover", function() {
            video.play();
            if (hoverSign) {
                hoverSign.classList.add("active");
            }
        });
        
        video.addEventListener("mouseout", function() {
            video.pause();
            if (hoverSign) {
                hoverSign.classList.remove("active");
            }
        });
    }
});

// Menu mobile
menu.addEventListener("click", function() {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function() {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

// Fechar sidebar ao clicar em um link
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
    });
});

// Função para baixar currículo
function downloadCV() {
    // Crie um link temporário para download
    const link = document.createElement('a');
    link.href = 'curriculo.pdf'; // Caminho para seu arquivo PDF
    link.download = 'Renan_Rodrigues_Curriculo.pdf'; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Função para enviar mensagem via WhatsApp
function sendWhatsApp(event) {
    if (event) {
        event.preventDefault();
    }
    
    const nome = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const mensagem = document.getElementById('userMessage').value.trim();
    
    // Validação básica
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return false;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return false;
    }
    
    // Formatar mensagem para WhatsApp
    const textoWhatsApp = `*Nova mensagem do Portfolio!*%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*Email:* ${encodeURIComponent(email)}%0A*Mensagem:* ${encodeURIComponent(mensagem)}`;
    
    // Seu número do WhatsApp (formato: código do país + DDD + número)
    const numeroWhatsApp = '5554999061396';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`, '_blank');
    
    // Limpar formulário
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userMessage').value = '';
    
    return false;
}

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});