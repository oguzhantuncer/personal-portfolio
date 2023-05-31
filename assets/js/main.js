$(document).ready(function(){
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    })
});

function myFunction(x) {
    x.classList.toggle("change");
  }

  var dosyaYukleBtn = document.getElementById("dosyaYukleBtn");
  dosyaYukleBtn.addEventListener("click", function() {
    // Dosya seçme iletişim kutusunu aç
    var dosyaYukleInput = document.createElement("input");
    dosyaYukleInput.type = "file";
    dosyaYukleInput.addEventListener("change", function() {
      var secilenDosya = dosyaYukleInput.files[0];
      // Dosya yükleme işlemini burada gerçekleştir
      console.log("Seçilen dosya: ", secilenDosya);
    });
    dosyaYukleInput.click();
  });