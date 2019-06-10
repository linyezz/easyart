var is_dark=0

$('.icon-close-light').on('mouseover',function(){
  if($(this).hasClass('icon-icon_light_b')){
    $(this).removeClass('icon-icon_light_b');
    $(this).addClass('icon-icon_light_vb');
  }else if($(this).hasClass('icon-icon_light_off_b')){
    $(this).removeClass('icon-icon_light_off_b');
    $(this).addClass('icon-icon_light_off_vb');
  }
  
})
$('.icon-close-light').on('mouseout',function(){
  if($(this).hasClass('icon-icon_light_vb')){
    $(this).addClass('icon-icon_light_b');
    $(this).removeClass('icon-icon_light_vb');
  }else if($(this).hasClass('icon-icon_light_off_vb')){
    $(this).addClass('icon-icon_light_off_b');
    $(this).removeClass('icon-icon_light_off_vb');
  }
  
})
$('.icon-close-light').on('click',function(){
  if($(this).hasClass('icon-icon_light_vb')){
    $(this).removeClass('icon-icon_light_vb');
    $(this).addClass('icon-icon_light_off_b');
   dark()
  }else if($(this).hasClass('icon-icon_light_off_vb')){
    $(this).removeClass('icon_light_off_vb');
    $(this).addClass('icon-icon_light_b');
    lingt()
  }
  
})

function dark(){
  is_dark=1
  $('body').css('background','#000')
  $('.chang-layers').css('background','rgba(0,0,0,0.7)')
  $('*').each(function(){
    var rgb=rgbTo($(this).css('color'));
    if(rgb=='#000000'){
      $(this).css('color','rgb(255,255,255)')
    }
  })
}
function lingt() {
  is_dark=0
  $('body').css('background','#fff')
  $('.chang-layers').css('background','rgba(255,255,255,0.7)')
  $('*').each(function(){
    var rgb=rgbTo($(this).css('color'));
    var nochange=!$(this).hasClass('b-nochange');
    if(rgb=='#ffffff'&&nochange){
      $(this).css('color','rgb(0,0,0)')
    }
  })
}
function rgbTo(color){
  var rgb = color.split(',');
    var r = parseInt(rgb[0].split('(')[1]);
    var g = parseInt(rgb[1]);
    var b = parseInt(rgb[2].split(')')[0]);
 
    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex;
}