var slider = $('.range-slider'),
    range = $('.range-slider__range'),
    value = $('.range-slider__value');

slider.each(function(){

  value.each(function(){
    var value = $(this).prev().attr('value');
    $(this).html(String((Number(value)/1000).toFixed(1)) + ' km');
  });

  range.on('input', function(){
    $(this).next(value).html(String((Number(this.value)/1000).toFixed(1)) + ' km');
  });
});
