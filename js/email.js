function sendMessage(){
    (function(){
        emailjs.init("GlGUsqij0-v9MUSbM");
    })();

    var serviceID = "service_9eanoph";
    var templateID = "template_rk2q5q6";

    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        telp: document.querySelector("#telp").value,
        message: document.querySelector("#message").value
};

emailjs.send(serviceID, templateID, params)
.then( res => {
    alert('Terimakasih ' + params['sendername'] + '! Pesan Anda Telah Dikirim ke Rafli :)');
})
.catch();
}