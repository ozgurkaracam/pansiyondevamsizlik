console.log("Hoşgeldiniz.");

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
    <button class="etutharic" style="padding:4px"> Tümünü Seç (Etüt Hariç.) </button>
    <button class="etutdahil" style="padding:4px"> Tümünü Seç (Etüt Dahil.) </button>
    <button class="kopyala" style="padding:4px"> Devamsızlık Kopyala. </button>
    <button class="yapistir" style="padding:4px"> Devamsızlık Yapıştır. </button>
    `);

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

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
        let dizi = $(":checked");
        dizi.splice(0,3);
        let dizi1=[];
        $.each(dizi,function(i,e){
                dizi1.push(e.parentElement.parentElement.parentElement)
        });
        dizi1=dizi1.filter(onlyUnique);
        $.each(dizi1,function(i,e){
            i=String(i);
            e=e.outerHTML;
            // chrome.storage.local.set({i: e}, function() {
            //     console.log(i+' Value is set to ' + e);
            //   });
            localStorage.setItem(i,e);
        });
    });
    //$("tr:contains("+a[0].cells[1].outerText+") ,tr:contains("+a[0].cells[2].outerText+") , tr:contains("+a[0].cells[3].outerText+")")[8]

    $(".yapistir").click(function(e){
        e.preventDefault();
        // chrome.storage.local.get(,function(result){
        //     console.log(result);
        // })
        for(var i=0;i<localStorage.length;i++){
            var item=$(localStorage.getItem(String(i)));
            $("tr:contains("+item[0].cells[1].outerText+") ,tr:contains("+item[0].cells[2].outerText+") , tr:contains("+item[0].cells[3].outerText+")")[8].children[4].children[0].children[0].checked=true;
            $("tr:contains("+item[0].cells[1].outerText+") ,tr:contains("+item[0].cells[2].outerText+") , tr:contains("+item[0].cells[3].outerText+")")[8].children[5].children[0].children[0].checked=true;
            $("tr:contains("+item[0].cells[1].outerText+") ,tr:contains("+item[0].cells[2].outerText+") , tr:contains("+item[0].cells[3].outerText+")")[8].children[8].children[0].children[0].checked=true;
            $("tr:contains("+item[0].cells[1].outerText+") ,tr:contains("+item[0].cells[2].outerText+") , tr:contains("+item[0].cells[3].outerText+")")[8].children[9].children[0].children[0].checked=true;      
    }
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

