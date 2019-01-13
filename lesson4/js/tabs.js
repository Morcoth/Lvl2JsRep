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
    
    let $ShowCityLabel = $('#ShowCityLabel');
    let $FormOfCitys = $('#FormOfCitys');

     $.ajax({
         type: 'GET',
         url: './ArrayOfCity.json',
         dataType: 'json',
         success: function (data) {
             $ShowCityLabel.html(`${data.cities.city[1]}`);
         },
         error: function (error) {
             console.log(error);
         }
     });


     $('#FormOfCitys').keyup(function(){
        var Value = $('#FormOfCitys').val();
        $('#errmsg').empty();
        $('#errmsg').text(Value);
      });

});



