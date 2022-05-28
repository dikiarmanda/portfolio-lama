// deklarasi variabel
var beratBadan, tinggiBadan, bmi, bbrekom, bbrekom2;

function proses() {
    // ambil nilai variabel dari form saat button ditekan
    beratBadan = parseFloat(document.getElementById('beratBadan').value);
    tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);

    // proses hitung BMI
    bmi = beratBadan / ((tinggiBadan/100)*(tinggiBadan/100));
    bbrekom = (tinggiBadan/100)*(tinggiBadan/100)*18.5;
    bbrekom2 = bbrekom + 19.1;

    alert('Berat Massa Ideal Anda = ' + bmi);

    // add class d-none pada inputNilai
    document.getElementById('inputNilai').classList.add('d-none');

    // keterangan bmi
    if ( bmi < 18.5 ) {
        document.getElementById('peopleIcon').innerHTML = '<i class="fa fa-person-circle-plus text-primary"></i>';
        document.getElementById('informations').innerHTML = '<h4>Berat badan Anda kurang</h4><p>Makan yang banyak besti jangan nunggu disuruh ayank</p>';
    } else if ( 18.5 <= bmi && bmi < 25 ) {
        document.getElementById('peopleIcon').innerHTML = '<i class="fa fa-person text-success"></i>';
        document.getElementById('informations').innerHTML = '<h4>Berat badan Anda ideal</h4><p>Selamat ya besti, jaga terus pola makannya 😘</p>';
    } else if ( 25 <= bmi && bmi < 30 ) {
        document.getElementById('peopleIcon').innerHTML = '<i class="fa fa-person-circle-minus text-warning"></i>';
        document.getElementById('informations').innerHTML = '<h4>Berat badan Anda berlebih</h4><p>Banyak olahraga besti biar berat badannya ideal 😊</p>';
    } else {
        document.getElementById('peopleIcon').innerHTML = '<i class="fa-duotone fa-triangle-exclamation text-danger"></i>';
        document.getElementById('informations').innerHTML = '<h4>Obesitas</h4><p>Ayo gerak besti, jangan rebahan mulu. Cinta itu dikejar dan diperjuangkan, bukan cuma ditungguin</p>';
    }
    document.getElementById('recommendation').innerHTML = '<p>Berat badan ideal = '+ bbrekom.toFixed(1) +' - '+ bbrekom2.toFixed(1) +'</p>';
    
    document.getElementById('result').insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-danger text-center mt-4" onclick="reset()">RESET</button>');
}

function reset() {
    window.location.reload();
}