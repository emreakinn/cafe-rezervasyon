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
        </tr>
        `;
    });

}


if (rezList) {
    renderTable();
} else {
    console.error("rezList öğesi bulunamadı.");
}



