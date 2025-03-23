let bodyRez = document.querySelector('#bodyRez')
let bodyYorum = document.querySelector('#bodyYorum')

function rezervasyonSirasi() {
    let rezervasyonData = JSON.parse(localStorage.getItem("rezervasyonlar")) || [];
    return rezervasyonData.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function renderRezTable() {
    bodyRez.innerHTML = "";

    let siraliRezervasyonData = rezervasyonSirasi();

    siraliRezervasyonData.forEach((rezervasyon) => {
        bodyRez.innerHTML += `
        <tr>
            <td> ${rezervasyon.date} </td>
            <td> ${rezervasyon.isim} </td>
            <td> ${rezervasyon.soyAd} </td>
            <td> ${rezervasyon.tel} </td>
            <td> ${rezervasyon.masa} </td>
            <td> <button class="rezIptal" data-id="${rezervasyon.id}"> Rezervasyon İptal </button> </td>
        </tr>
        `;
    });

    document.querySelectorAll(".rezIptal").forEach((btn) => {
        btn.addEventListener("click", function () {
            let rezId = this.getAttribute("data-id");
            rezervasyonSil(rezId);
        });
    });
}

function rezervasyonSil(id) {
    let rezervasyonData = JSON.parse(localStorage.getItem("rezervasyonlar")) || [];
    rezervasyonData = rezervasyonData.filter((rez) => rez.id !== Number(id));
    localStorage.setItem("rezervasyonlar", JSON.stringify(rezervasyonData));
    renderRezTable();
}

if (bodyRez) {
    renderRezTable();
} else {
    console.error("rezList öğesi bulunamadı.");
}

let yorumlar = JSON.parse(localStorage.getItem('yorumlar')) || []

function renderYorumTable() {
    bodyYorum.innerHTML = "";


    yorumlar.forEach((yorum) => {
        bodyYorum.innerHTML += `
        <tr>
            <td> ${yorum.isim} ${yorum.soyAd} </td>
            <td style="text-align: start;" colspan="3"> ${yorum.yorum} </td>
        </tr>
        `;
    });
}

if (bodyYorum) {
    renderYorumTable();
} else {
    console.error("rezList öğesi bulunamadı.");
}

