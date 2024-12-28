document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('btn-telegramm').addEventListener('click', function() {
        window.open('https://t.me/wwhopelessww', '_blank');
    });

    document.getElementById('btnCopyEmail').addEventListener('click', function copyInput() {
        let copyText = document.getElementById('send-email');
    
        copyText.select();
    
        navigator.clipboard.writeText(copyText.value)
            .then(() => {
                console.log(`Почта ${copyText.value} скопирована`);
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
            });
    });

});