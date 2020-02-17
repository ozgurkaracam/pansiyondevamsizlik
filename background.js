console.log("Hoşgeldiniz.");

var jq = document.createElement('script');
jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

// import css.
// var head = document.getElementsByTagName('HEAD')[0];  
// var link = document.createElement('link'); 
// link.rel = 'stylesheet';  
// link.type = 'text/css'; 
// link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
// var style= document.createElement('style');
// style.type="text/css";  
// head.appendChild(link);
//import css.



$(document).ready(function () {
    $("td.frmBaslik").html(`
    <input class="submitButton etutdahil" style="font-size:9px; HEIGHT: 35px; CURSOR: pointer" type="button" value="Tümünü Seç(Etüt Dahil)">
    <input class="submitButton etutharic" style="font-size:9px; HEIGHT: 35px; CURSOR: pointer" type="button" value="Tümünü Seç(Etüt Hariç)">
    <input class="submitButton kopyala" style="font-size:9px; HEIGHT: 35px; CURSOR: pointer" type="button" value="Devamsızlık Kopyala">
    <input class="submitButton yapistir" style="font-size:9px; HEIGHT: 35px; CURSOR: pointer" type="button" value="Devamsızlık Yapıştır">
    <input class="submitButton temizle" style="font-size:9px; HEIGHT: 35px; CURSOR: pointer" type="button" value="Temizle">
    <input class="submitButton yapistir" style="font-size:9px; HEIGHT: 35px; CURSOR: pointer" type="button" value="Son Yoklamayı Yapıştır">
    <h3 class="yok"></h3>
    
    `);
    $("<small style='font-size:9px'><u>Bilgi Notu:</u> Tümünü işaretle, işaretleri temizle gibi butonlara bastıktan sonra 15,20 saniye biryere basmadan bekleyiniz. Öğrenci Mevcudu, olmayan öğrenci gibi bilgiler devamsızlık kaydedildikten sonra görünür. Son yoklama, bu bilgisayardan son girilen yoklamadır. Tarayıcı geçmişi silindiğinde silinir. Tekrar kopyalanması gerekir. <u style='color:red'>Özgür KARAÇAM</u></small>").insertAfter(".yok")



    


    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    let dizi = $("span.frmInput :checked");
        let dizi1=[];
        $.each(dizi,function(i,e){
                dizi1.push(e.parentElement.parentElement.parentElement)
        });
        dizi1=dizi1.filter(onlyUnique);
    $("h3.yok").html(dizi1.length+" Öğrenci Yok.");
    //+ 
    
    function kopyala(){
        localStorage.clear();
        let dizi = $("span.frmInput :checked");
        let dizi1=[];
        $.each(dizi,function(i,e){
                dizi1.push(e.parentElement.parentElement.parentElement)
        });
        dizi1=dizi1.filter(onlyUnique);
        $.each(dizi1,function(i,e){
            i=String(i);
            e=e.outerHTML;
            localStorage.setItem(i,e);
        });
    }
    function yapistir(){
        // chrome.storage.local.get(,function(result){
        //     console.log(result);
        // })
        for(var i=0;i<localStorage.length;i++){
            var item=$(localStorage.getItem(String(i)));
            if(item[0].cells[4].children[0].children[0].checked)
                $("tr:contains("+item[0].cells[1].outerText+"):contains("+item[0].cells[2].outerText+"):contains("+item[0].cells[3].outerText+")")[5].children[4].children[0].children[0].checked=true;
            if(item[0].cells[5].children[0].children[0].checked)
                $("tr:contains("+item[0].cells[1].outerText+"):contains("+item[0].cells[2].outerText+"):contains("+item[0].cells[3].outerText+")")[5].children[5].children[0].children[0].checked=true;
            if(item[0].cells[8].children[0].children[0].checked)
                $("tr:contains("+item[0].cells[1].outerText+"):contains("+item[0].cells[2].outerText+"):contains("+item[0].cells[3].outerText+")")[5].children[8].children[0].children[0].checked=true;
            if(item[0].cells[9].children[0].children[0].checked)
                $("tr:contains("+item[0].cells[1].outerText+"):contains("+item[0].cells[2].outerText+"):contains("+item[0].cells[3].outerText+")")[5].children[9].children[0].children[0].checked=true;      
    }
    }

    $("#IOMToolbarActive1_kaydet_b").click(function(){
        localStorage.clear();
        kopyala();
    })

    $(".temizle").click(function(e){
        e.preventDefault();
        var getInputs = document.getElementsByTagName("input");
        for (var j = 0, max = 200; j < max; j++) {
            for (var i = 0, max = getInputs.length; i < max; i++) {
                if (getInputs[i].type === 'checkbox' &&
                    (getInputs[i].id === 'dgListe_checkEtud1_' + j ||
                        getInputs[i].id === 'dgListe_checkEtud2_' + j ||
                        getInputs[i].id === 'dgListe_chkPansiyonGiris_' + j ||
                        getInputs[i].id === 'dgListe_chkPansiyonYatis_' + j))
                    getInputs[i].checked = false;
            }
        }
    }
    );
    

    $(".etutdahil").click(function () {

        var getInputs = document.getElementsByTagName("input");
        for (var j = 0, max = 200; j < max; j++) {
            for (var i = 0, max = getInputs.length; i < max; i++) {
                if (getInputs[i].type === 'checkbox' &&
                    (getInputs[i].id === 'dgListe_checkEtud1_' + j ||
                        getInputs[i].id === 'dgListe_checkEtud2_' + j ||
                        getInputs[i].id === 'dgListe_chkPansiyonGiris_' + j ||
                        getInputs[i].id === 'dgListe_chkPansiyonYatis_' + j))
                    getInputs[i].checked = true;
            }
        }


    });

    

    $(".kopyala").click(function(e){
        e.preventDefault();
        kopyala();
    });
    //$("tr:contains("+a[0].cells[1].outerText+") ,tr:contains("+a[0].cells[2].outerText+") , tr:contains("+a[0].cells[3].outerText+")")[8]

    $(".yapistir").click(function(e){
        e.preventDefault();
        yapistir();
    
    });

    $(".etutharic").click(function () {

        var getInputs = document.getElementsByTagName("input");
        for (var j = 0, max = 200; j < max; j++) {
            for (var i = 0, max = getInputs.length; i < max; i++) {
                if (getInputs[i].type === 'checkbox' &&
                        (getInputs[i].id === 'dgListe_chkPansiyonGiris_' + j ||
                        getInputs[i].id === 'dgListe_chkPansiyonYatis_' + j))
                    getInputs[i].checked = true;
            }
        }


    });


});

