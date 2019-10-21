$(document).ready(function () {
   // var WrongCheck  = function WrongCheck(params) {
      //  $( document ).click(function() {
            //$( `${params}` ).toggle( "bounce", { times: 3 }, "slow" );
        //})};
        $('.carouseleslick').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveWidth: true,
            adaptiveHeight: false
          });
$('#checkForm').on('click', function () {
    var inputStringForRegex = document.getElementById('inputStringForRegex').value;
        var outputStringAfterRegex = document.getElementById('outputStringAfterRegex');
        var nameField = document.getElementById("nameField");
        var statusName = document.getElementById("statusName");
        var phoneField = document.getElementById("phoneField");
        var statusPhone = document.getElementById("statusPhone");
        var emailstring = document.getElementById("emailField");
        var statusEmail = document.getElementById("statusEmail");
        var statusBirth = document.getElementById("statusBirth");
        var birthDate = document.getElementById("birthDate");
        let resulttxt = '';

        
        outputStringAfterRegex.innerHTML = inputStringForRegex.replace(/^\b'\B|\B'\b|'$/g, '"');
        let foo= function foo() {
            //$( "#dialog" ).dialog({autoOpen: false, title: "open"});
            var $dialog = $("#dialog").html(`${resulttxt}`).dialog({autoOpen: false, title: 'ошибка ввода'});
            $dialog.dialog("open").toggle( "bounce", { times: 3 }, "slow" );
            //$(`#${$dialog}`).toggle( "bounce", { times: 3 }, "slow" ); 
        };

        var regexName = /^[a-zа-я]+$/i;
        if (regexName.test(nameField.value)){
            statusName.innerHTML = "Имя принято";
            nameField.classList.add('right')  
        }
        else{
            resulttxt=`${resulttxt} "Имя должно содержать только буквы"`;
                //$('#statusName').toggle( "bounce", { times: 3 }, "slow" );
                //statusName.innerHTML = "Имя должно содержать только буквы";
                nameField.classList.add('wrong')
            } 
        var regexPhone = /^(\+7)+(\()+(\d{3})+(\))+(\d{3})+(\-)+(\d{4})$/i;
        if (regexPhone.test(phoneField.value)){ 
            statusPhone.innerHTML = "Телефон принят"
            phoneField.classList.add('right')              
        }
        else{
            resulttxt=`${resulttxt} "Телефон не оформлен верно"`;
            //statusPhone.innerHTML = "Телефон не оформлен верно"
            phoneField.classList.add('wrong')
        }
        var regexEmail = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        if (regexEmail.test(emailstring.value)){ 
            statusEmail.innerHTML = "Адрес принят"
            emailstring.classList.add('right')  
            
        }
            else{
                resulttxt=`${resulttxt} "Телефон не оформлен верно"`;
                emailstring.classList.add('wrong')  

            }

        var regexBirth = /([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})/;
        if (regexBirth.test(birthDate.value)){ 
            birthDate.classList.add('right');
            
        }
            else{
                resulttxt=`${resulttxt}  "Дата неверна"`
                birthDate.classList.add('wrong');
            }
            foo();

        });
    $('.draggable').draggable({
        //axis: 'y', //x //Ось перемещения элемента
        //revert: true, //Возврат элемента в исходное состояние
        //containment: 'parent', //Ближайший родитель
        containment: '#draggable-parent', //Родитель задан через селектор
    });

    $('.btn1').on('click', function () {
        $('.draggable').draggable('option', 'containment', 'parent');
    });

    $('.btn2').on('click', function () {
        console.log($('.draggable').draggable('option', 'containment'));
    });

    $('.btn3').on('click', function () {
        $('.draggable').draggable('option', 'containment', false);
    });

    $('.btn4').on('click', function () {
        $('.draggable').draggable('disable');
    });
    $('.btn5').on('click', function () {
        $('.draggable').draggable('enable');
    });
    $('.btn6').on('click', function () {
        $('.draggable').draggable('destroy');
    });

    //Droppable
    $('#droppable').droppable({
        drop: function (event, ui) {
            console.log(event, ui);
            console.log(ui.draggable[0]); //Сам элемент, который мы перемещали
            console.log($(ui.draggable[0]).attr('data-id'));
        }
    });

    $( "#accordion" ).accordion();

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });

    $( "#datepicker" ).datepicker({
        dateFormat: "dd.mm.yy",
        dayNamesMin: [ "ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ" ],
        firstDay: 1
    });

    $('#dialog').dialog({
        autoOpen: false
    });
    $('.btn7').on('click', function () {
        $('#dialog').dialog('close');
    });

    $('.btn8').on('click', function () {
        $('#dialog').dialog('open');
    });

    $( "#tabs" ).tabs();

    $( document ).tooltip();
});