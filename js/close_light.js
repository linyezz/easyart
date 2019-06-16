var is_dark=0


  var os=navigator.userAgent;
  if(os.indexOf('iPhone')>1||os.indexOf('Android')>1||os.indexOf('iPad')>-1){
    var html='<meta name="viewport" content="width=1334,user-scalable=0">'
    $('head').append(html)
  }



$('.icon-close-light').on('mouseover',function(){
  if($(this).hasClass('icon-icon_light_on')){
    $(this).removeClass('icon-icon_light_on');
    $(this).addClass('icon-icon_light_on_mouse_hover');
  }else if($(this).hasClass('icon-icon_light_off')){
    $(this).removeClass('icon-icon_light_off');
    $(this).addClass('icon-icon_light_off_mouse_hover');
  }
  
})
$('.icon-close-light').on('mouseout',function(){
  if($(this).hasClass('icon-icon_light_on_mouse_hover')){
    $(this).addClass('icon-icon_light_on');
    $(this).removeClass('icon-icon_light_on_mouse_hover');
  }else if($(this).hasClass('icon-icon_light_off_mouse_hover')){
    $(this).addClass('icon-icon_light_off');
    $(this).removeClass('icon-icon_light_off_mouse_hove');
  }
  
})
$('.icon-close-light').on('click',function(){
  if($(this).hasClass('icon-icon_light_on_mouse_hover')){
    $(this).removeClass('icon-icon_light_on_mouse_hover');
    $(this).addClass('icon-icon_light_off_mouse_hover');
   dark()
  }else if($(this).hasClass('icon-icon_light_off_mouse_hover')){
    $(this).removeClass('icon-icon_light_off_mouse_hove');
    $(this).addClass('icon-icon_light_on_mouse_hover');
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

//header选中
$('.icon-item,.b-icon-item').on('mouseover',function(){
  $(this).find('span').css('display','none');
  $(this).find('.h-hover').css('display','flex');
  
})
$('.icon-item,.b-icon-item').on('mouseout',function(){
  $(this).find('span').css('display','block');
  $(this).find('.h-hover').css('display','none');
  
})
$('.head-langa').on('mouseover',function(){
  let text = $(this).attr('value');
  if(text=='chinese'){
    $(this).html('&#xe956;');
    $(this).attr('value','eng');
  }else if(text=='eng'){
    $(this).html('&#xe95d;');
    $(this).attr('value','chinese');
  }
  
})
$('.head-langa').on('mouseout',function(){
  let text = $(this).attr('value');
  if(text=='chinese'){
    $(this).html('&#xe956;');
    $(this).attr('value','eng');
  }else if(text=='eng'){
    $(this).html('&#xe95d;');
    $(this).attr('value','chinese');
  }
  
})

