document.addEventListener("DOMContentLoaded", function() {

    /* Кнопка телеграмма в header */
    document.getElementById('btn-telegramm').addEventListener('click', function() {
        window.open('https://t.me/wwhopelessww', '_blank');
    });

    /* Кнопка копировать в dialog окне */
    function copyInput() {
        let copyText = document.getElementById('send-email');

        copyText.select();

        navigator.clipboard.writeText(copyText.value)
            .then(() => {
                console.log(`Почта ${copyText.value} скопирована`);
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
            });
    };
    
    /* tooltip для кнопок */
    function callTooltip() {
        const tooltip = document.getElementById('copyTooltip');
        tooltip.classList.add('show');

        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);
    };

    document.getElementById('btnCopyEmail').addEventListener('click', copyInput);
    document.getElementById('btnCopyEmail').addEventListener('click', callTooltip);
});

