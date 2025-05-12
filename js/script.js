const form = document.getElementById('lautForm');
const tableBody = document.querySelector('#dataTable tbody');
const prediksiText = document.getElementById('prediksiText');




searchToggle.addEventListener('click', () => {
    if (searchBar.classList.contains('hidden')) {
      searchBar.classList.remove('hidden');
      searchInputMobile.focus();
    } else {
      searchBar.classList.add('hidden');
      searchInputMobile.value = ''; 
    }
  });

const lautForm = document.getElementById('lautForm');

  lautForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const jenis = document.getElementById('jenis').value;
    const berat = document.getElementById('berat').value;
    const lokasi = document.getElementById('lokasi').value;

    const dataBaru = {
      jenis,
      berat,
      lokasi
    };

    // Ambil data lama (jika ada)
    const dataSimpan = JSON.parse(localStorage.getItem('dataIkan')) || [];

    // Tambahkan data baru
    dataSimpan.push(dataBaru);

    // Simpan lagi ke localStorage
    localStorage.setItem('dataIkan', JSON.stringify(dataSimpan));

    // Redirect ke data.html
    window.location.href = 'data.html';
  });
