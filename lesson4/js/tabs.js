$(document).ready(function () {
    var tabsControl = $('.tabsControl > div');
    tabsControl.hide().filter(':first').show();
    $('.tabsControl ul.tabNav a').click(function () {
        tabsControl.hide();
        tabsControl.filter(this.hash).show();
        $('.tabsControl ul.tabNav a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });
    var ArrayOfCity=[]
    let $ShowCityLabel = $('#ShowCityLabel');
    let $FormOfCitys = $('#FormOfCitys');
    var inputString='';

     $.ajax({
         type: 'GET',
         url: './ArrayOfCity.json',
         dataType: 'json',
         success: function (data) {
            ArrayOfCity=data.cities;
         },
         
     });
     function ResultString(ArrayOfCity, inputString) {
        
        $ShowCityLabel=Array(ArrayOfCity).filter(inputString);
         
     }

     $(document).on('input',function(ev){
        inputString=$(ev.target).val();
        ResultString(Array(ArrayOfCity), inputString);

      });


     $FormOfCitys.keypress(function(){
        var Value = $('#FormOfCitys').val();
        $('#errmsg').empty();
        $('#errmsg').text(Value);
      });

});



