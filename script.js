document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidade do Relógio ---
    const timeElement = document.getElementById('current-time');

    function updateClock() {
        const now = new Date();
        // Pode ajustar o 'locale' e as opções para corresponder ao fuso horário desejado (ex: 'en-US', { timeZone: 'Europe/Berlin' })
        const timeString = now.toLocaleTimeString('pt-PT', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false // Mude para true se quiser o formato AM/PM
        });
        timeElement.textContent = timeString;
    }

    // Atualiza o relógio imediatamente e depois a cada segundo
    updateClock();
    setInterval(updateClock, 1000);


    // --- Funcionalidade de Mudança de Cor ---
    const colorDots = document.querySelectorAll('.color-dot');
    const root = document.documentElement; // A raiz do documento (onde as variáveis CSS estão)

    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const newColor = dot.dataset.color; // Pega a cor do atributo 'data-color'
            
            // Define a nova cor na variável CSS '--accent-color'
            root.style.setProperty('--accent-color', newColor);
        });
    });

    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const newColor = dot.getAttribute('data-color');
            root.style.setProperty('--accent-color', newColor);

            // Optional: You can also change the highlight color in the welcome section
            // if you want it to match the accent color dynamically.
            // document.querySelector('.highlight').style.color = newColor;

            // Optional: Add an active state to the selected dot
            colorDots.forEach(d => d.classList.remove('active-color-dot'));
            dot.classList.add('active-color-dot');
        });
    });

    // Set initial active color dot if desired (e.g., based on default --accent-color)
    // Find the dot that matches the default accent color and add 'active-color-dot'
    const initialAccentColor = getComputedStyle(root).getPropertyValue('--accent-color').trim();
    colorDots.forEach(dot => {
        if (dot.getAttribute('data-color') === initialAccentColor) {
            dot.classList.add('active-color-dot');
        }
    });

});