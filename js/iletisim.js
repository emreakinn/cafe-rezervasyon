let form = document.querySelector('#iletisimForm')
let isim = document.querySelector('#isim')
let soyAd = document.querySelector('#soyAd')
let yorum = document.querySelector('#yorum')
let modal = document.querySelector('#modal')
let kapat = document.querySelector('#kapat')

let yorumlar = JSON.parse(localStorage.getItem('yorumlar')) || []


form.addEventListener('submit', function (form) {
    form.preventDefault()
    if (isim.value !== '' && soyAd.value !== '' && yorum.value !== '') {
        yorumlar.push({
            isim: isim.value,
            soyAd: soyAd.value,
            yorum: yorum.value
        })
        isim.value = ''
        soyAd.value = ''
        yorum.value = ''
        localStorage.setItem("yorumlar", JSON.stringify(yorumlar));
        modal.style.display = 'flex';
    } else {
        alert('Bütün Bilgileri doldurun')
    }
})

kapat.addEventListener('click', function () {
    modal.style.display = 'none'
})