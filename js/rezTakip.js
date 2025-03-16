let rezList = document.querySelector('#rezList')
let body = document.querySelector('#body')

function rezervasyonSirasi() {
    let rezervasyonData = JSON.parse(localStorage.getItem("rezervasyonlar")) || [];
    return rezervasyonData.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function renderTable() {
    body.innerHTML = "";

    let siraliRezervasyonData = rezervasyonSirasi();

    siraliRezervasyonData.forEach((rezervasyon) => {
        body.innerHTML += `
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
    renderTable();
}

if (rezList) {
    renderTable();
} else {
    console.error("rezList öğesi bulunamadı.");
}



