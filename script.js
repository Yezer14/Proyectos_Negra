document.addEventListener('DOMContentLoaded', () => {
    // Create floating hearts
    const heartsContainer = document.getElementById('heartsContainer');
    const numberOfHearts = 20;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.animation = `float-${(i % 3) + 1} ${6 + Math.random() * 4}s ease-in-out infinite`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heartsContainer.appendChild(heart);
    }

    // Handle reveal button click
    const revealBtn = document.getElementById('revealBtn');
    const mainContent = document.getElementById('mainContent');
    const messageContainer = document.getElementById('messageContainer');
    const messageElement = document.getElementById('message');

    revealBtn.addEventListener('click', () => {
        // Hide main content
        mainContent.classList.add('hidden');
        
        // Show message container
        setTimeout(() => {
            messageContainer.classList.add('visible');
            
            // Replace this with your actual message
            const message = "Hola mi princesa hermosa, aqui te quiero decir que esto no sera lo unico que resiviras de mi, tambien quiero que sepas que te amo un monton (demasiado como para saber cuanto). Quiero decirte que me encanta cada minuto y segundo que paso contigo aunque me jodas mucho (es joda los dos sabemos que yo jodo mucho mas) espero que esto te guste y espera algo mas que te dara el gordo del futuro.";
            
            // Show message character by character
            let index = 0;
            messageElement.textContent = '';
            
            function showNextChar() {
                if (index < message.length) {
                    messageElement.textContent += message[index];
                    index++;
                    setTimeout(showNextChar, 100); // Adjust timing as needed
                } else {
                    messageElement.classList.add('visible');
                }
            }
            
            setTimeout(showNextChar, 500);
        }, 500);
    });
});