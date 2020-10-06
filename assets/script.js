var frame = document.querySelector('#toFrame');
var container = document.querySelector('.container');

for( var i = 0; i <= 3; i++ ){
    /**
     * 0 = topLeft
     * 1 = topRight
     * 2 = bottomLeft
     * 3 = bottomRight
     */
    frame.innerHTML += '<div class="bd" p="'+i+'"><input type="text" value="0"></div>';
}



function changeBorderRadius(border, size){
    if( border == 0 ){
        container.style.borderTopLeftRadius = size+'px';

    }
    else if( border == 1 ){
        container.style.borderTopRightRadius = size+'px';
    }
    else if( border == 2 ){
        container.style.borderBottomLeftRadius = size+'px';
    }
    else {
        container.style.borderBottomRightRadius = size+'px';
    }

    att();
}


function att(){
    var string = '';

    if( container.getAttribute('style') ){
        var string = container.getAttribute('style');
    }

    document.querySelector('.container').style = string;
    document.querySelector('textarea').value = string;
}





document.querySelectorAll('.bd').forEach(function(e){
    var bd = e;
    var bdInput = e.querySelector('input');

    bd.addEventListener('input', function(){
        if( bdInput.value ){
            bdInput.value = bdInput.value.replace(/[^0-9]+/g,"");

            changeBorderRadius(bd.getAttribute('p'), bdInput.value);
        }
    });

    bd.addEventListener('change', function(){
        if( !bdInput.value ){
            bdInput.value = 0;
            changeBorderRadius(bd.getAttribute('p'), 0);
        }
    });
});












