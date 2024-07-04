function replacenaame(){
    let name = prompt("Siapakah nama anda ?", "");
    document.getElementById("name").innerHTML = name
}

replacenaame()

let currentSlide = 0;
const slides = 
document.querySelectorAll(" .banner-slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 
    'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startAutoSlide() {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); 
}

document.addEventListener('DOMContentLoaded', startAutoSlide);

document.addEventListener('DOMContentLoaded', function (){
    const papanInformasi = document.querySelector('.papan-informasi');

    setInterval(() => {
        papanInformasi.scrollTop + 1
        if(papanInformasi.scrollTop +
            papanInformasi.clientHeight >= 
            papanInformasi.scrollHeight) {
                papanInformasi.scrollTop = 0;
            }
    }, 50);
})

function validate() {
    let name = document.getElementById("username").value;
    let date = document.getElementById("date").value;
    let jenis = document.getElementById("jenis-kelamin").value;
    let pesan = document.getElementById("pesan").value;

    console.log(name);
    console.log(date);
    console.log(jenis);
    console.log(pesan);

    if (name != '' && date != "" && jenis != "" && pesan != "") {
        document.getElementById("result").innerHTML = name + ' ' + date + ' ' + jenis + ' ' + pesan;
        alert('sukses di kirim');
    } else{
        alert('data tidak boleh kosong');
    }

}