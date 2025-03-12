let ad = document.querySelector('#ad')
let soyAd = document.querySelector('#soyAd')
let tel = document.querySelector('#tel')
let masaNo = document.querySelector('#masaNo')
let tarih = document.querySelector('#tarih')
let form = document.querySelector('#form')
let ileri = document.querySelector('#ileri')
let bilgiler = document.querySelector('#bilgiler')
let date = document.querySelector('#date')
let rezList = document.querySelector('#rezList')
let geri = document.querySelector('#geri')


let rezervasyonlar = JSON.parse(localStorage.getItem('rezervasyonlar')) || []

ileri.addEventListener('click', function (form) {
    form.preventDefault()
    if (date.value === '') {
        alert('hata')
    } else {
        tarih.style.display = 'none'
        bilgiler.style.display = 'flex'
        ileri.style.display = 'none'
        geri.style.display = 'inline'

    }
})

geri.addEventListener('click', function (form) {
    form.preventDefault()
    if (geri) {
        tarih.style.display = 'flex'
        bilgiler.style.display = 'none'
        ileri.style.display = 'flex'
        geri.style.display = 'none'
    }
})

form.addEventListener('submit', function (form) {
    form.preventDefault()
    if (ad.value === '' || soyAd.value === '' || tel.value === '') {
        alert('hata')
    } else {
        bilgiler.style.display = 'none'
        rezervasyonlar.push({
            date: date.value,
            isim: ad.value,
            soyAd: soyAd.value,
            tel: tel.value,
        })

        localStorage.setItem("rezervasyonlar", JSON.stringify(rezervasyonlar))
        window.location.href = 'rezervasyon-takip.html'
    }
})

