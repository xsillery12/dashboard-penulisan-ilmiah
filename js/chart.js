var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/dashboard-web/js/kepadatan.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    // console.log(data)
    tahun = data.kepadatan.map(function (elem) {
      return elem.tahun;
    });
    jumlah_penduduk_jakarta = data.kepadatan.map(function (elem) {
      return elem.jumlah_penduduk_jakarta;
    });
    // console.log(jumlah_penduduk_jakarta)

    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: tahun,
        datasets: [
          {
            label: "Jumlah Penduduk",
            data: jumlah_penduduk_jakarta,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
};
