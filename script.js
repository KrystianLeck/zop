document.getElementById('yesBtn').addEventListener('click', function() {
    sendEmail('Tak');
    showResponse('No i super!', 'gif.gif'); // Zastąp URL swoim GIFem
});

document.getElementById('noBtn').addEventListener('click', function() {
    sendEmail('Nie');
	showResponse('O nie!', 'gif2.gif'); // Zastąp URL swoim GIFem
});

function sendEmail(answer) {
    emailjs.send("service_sov8zsg","template_80q0m74", {
        message: `Odpowiedź: ${answer}`,

    }).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Twoja odpowiedź została wysłana na maila, więc prosze jej nikomu nie udostępniać bo nie chce mieć spamu!');
    }, function(error) {
       console.log('FAILED...', error);
       alert('Niestety, wystąpił błąd przy wysyłaniu odpowiedzi.');
    });
}

function showResponse(text, gifUrl) {
    document.getElementById('responseText').innerText = text;
    document.getElementById('heartsGif').src = gifUrl;
    document.getElementById('response').style.display = 'block';
}