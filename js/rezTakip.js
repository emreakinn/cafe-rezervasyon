let rezList = document.querySelector('#rezList')
let body = document.querySelector('#body')

let rezervasyonlar = JSON.parse(localStorage.getItem('rezervasyonlar')) || []

const rezervasyonData = JSON.parse(localStorage.getItem("rezervasyonlar")) || [];
if (rezList) {
    rezervasyonData.forEach(function (rezervasyon) {
        console.log(rezervasyon.soyAd);
        body.innerHTML += `
        <tr>
            <td> ${rezervasyon.date} </td>
            <td> ${rezervasyon.isim} </td>
            <td> ${rezervasyon.soyAd} </td>
            <td> ${rezervasyon.tel} </td>
            <td> ${rezervasyon.masa} </td>
        </tr>
            `;
    });
} else {
    console.error('rezList öğesi bulunamadı.');
}