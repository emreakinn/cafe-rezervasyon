let ad = document.querySelector('#ad')
let soyAd = document.querySelector('#soyAd')
let tel = document.querySelector('#tel')
let masaNo = document.querySelector('#masaNo')
let date = document.querySelector('#date')

let tarih = document.querySelector('#tarih')
let form = document.querySelector('#form')
let ileri = document.querySelector('#ileri')
let bilgiler = document.querySelector('#bilgiler')
let geri = document.querySelector('#geri')

// let today = new Date().toISOString().split('T')[0]
// date.min = today;

let rezervasyonlar = JSON.parse(localStorage.getItem('rezervasyonlar')) || []

ileri.addEventListener('click', function (form) {
    form.preventDefault()
    if (date.value !== '') {
        tarih.style.display = 'none'
        bilgiler.style.display = 'flex'
        ileri.style.display = 'none'
        geri.style.display = 'inline'
    } else {
        alert('Lütfen Bir Tarihi Giriniz')
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
    if (ad.value !== '' && soyAd.value !== '' && tel.value !== '' && masaNo.value !== '') {
        let masaNoRezerveEdilmis = rezervasyonlar.some(function (rezervasyon) {
            return rezervasyon.masa === masaNo.value && rezervasyon.date === date.value;
        });
        if (masaNoRezerveEdilmis) {
            alert('Bu masa numarası bu tarihte zaten rezerve edilmiştir.');
        } else {
            rezervasyonlar.push({
                date: date.value,
                isim: ad.value,
                soyAd: soyAd.value,
                tel: tel.value,
                masa: masaNo.value,
            });

            localStorage.setItem("rezervasyonlar", JSON.stringify(rezervasyonlar));
            window.location.href = 'rezervasyon-takip.html';
        }
    } else {
        alert('Lütfen Bütün Bilgileri Doldurun')
    }
})
