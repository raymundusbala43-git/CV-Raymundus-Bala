const form = document.getElementById('formkontak');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Nomor WhatsApp tujuan
    const nomorWhatsApp = "6282123874849";

    // Mengambil nilai dari input form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    // Menyusun isi pesan
    const isiPesan = `Halo, saya menghubungi melalui website CV.
    Nama Lengkap : ${nama}
    Email : ${email}
    No. Telepon : ${telepon}
    Bidang Minat : ${minat}
    Pesan : ${pesan}`;

    // Mengubah string pesan ke format URL
    const pesanEncoded = encodeURIComponent(isiPesan);

    // Membuat link WhatsApp API resmi
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${pesanEncoded}`;

    // window open
    window.open(urlWhatsApp, "_blank");


// window:
window.location.href = urlWhatsApp;
});