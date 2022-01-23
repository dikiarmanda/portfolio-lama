function cek() {
    var ayah = parseFloat(document.getElementById("tAyah").value);
    var ibu = parseFloat(document.getElementById("tIbu").value);
    var cwokAtas = (ayah + ibu + 13)/2 + 8.5;
    var cwokBawah = (ayah + ibu + 13)/2 - 8.5;
    var cwekAtas = (ayah + ibu - 13)/2 + 8.5;
    var cwekBawah = (ayah + ibu - 13)/2 - 8.5;

    document.getElementById("input").classList.add("d-none");
    document.getElementById("result").classList.remove("d-none");
    if (ayah > 1 && ibu > 1) {
        document.getElementById("hasilCowok").innerHTML="<p><span class='btn btn-primary'>"+cwokBawah+" cm</span> sampai dengan <span class='btn btn-primary'>"+cwokAtas+" cm</span></p>";
    
        document.getElementById("hasilCewek").innerHTML="<p><span class='btn btn-danger'>"+cwekBawah+" cm</span> sampai dengan <span class='btn btn-danger'>"+cwekAtas+" cm</span></p>";
    } else {
        document.getElementById("result").innerHTML="<div class='alert alert-danger' role='alert'>Tinggi yang Anda inputkan harus lebih dari 0</div>";
    }
}