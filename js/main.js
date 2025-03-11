let ad = document.querySelector('#ad')
let soyAd = document.querySelector('#soyAd')
let tel = document.querySelector('#tel')
let masaNo = document.querySelector('#masaNo')
let tarih = document.querySelector('#tarih')
let form = document.querySelector('#form')
let ileri = document.querySelector('#ileri')
let bilgiler = document.querySelector('#bilgiler')
let masabilgi = document.querySelector('#masabilgi')


let rezervasyonlar = JSON.parse(localStorage.getItem('rezervasyonlar')) || []

ileri.addEventListener('click', function (form) {
    form.preventDefault()
    if (ad.value === '') {
        alert('hata')
    } else {
        tarih.style.display = 'none'
        bilgiler.style.display = 'flex'
        ileri.style.display = 'none'

    }
})

form.addEventListener('submit', function (form) {
    form.preventDefault()
    if (soyAd.value === '' || tel.value === '' || rezervasyonlar.some(rezervasyon => rezervasyon.masa === masaNo.value)) {
        alert('hata')
    } else {
        bilgiler.style.display = 'none'
        masabilgi.style.display = 'inline'
        rezervasyonlar.push({
            isim: ad.value,
            soyAd: soyAd.value,
            tel: tel.value,
            masa: masaNo.value,
        })
        window.location.href = 'index.html'
        localStorage.setItem("rezervasyonlar", JSON.stringify(rezervasyonlar))
    }

})
