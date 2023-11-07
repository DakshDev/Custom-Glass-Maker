function main(){
    requestAnimationFrame(main);

    // main Glass Preview
    let glass = document.getElementById('glass');
    let glassCss = getComputedStyle(glass);

    // range
    let transparency = document.getElementById('transparency').value;
    let blur = document.getElementById('blur').value;
    let outline = document.getElementById('outline').value;

    // Chnage type
    let transparencyNum = Number(transparency);
    let blurNum = Number(blur);
    let outlineNum = Number(outline);



    // Background Color
    if(transparencyNum >= 100){
        glass.style.backgroundColor = `rgba(255,255,255,1)`;
    }else if(transparencyNum <= 9){
        glass.style.backgroundColor = `rgba(255,255,255,0.0${transparencyNum})`;
    }else{
        glass.style.backgroundColor = `rgba(255,255,255,0.${transparencyNum})`;
    }
    // Blur
    if(blurNum >= 100){
        glass.style.backdropFilter = `blur(20px)`;
    }else{
        switch(true){
            case blur <= 0:
                glass.style.backdropFilter = 'blur(0px)';
            break;
            case blur <= 5:
                glass.style.backdropFilter = 'blur(1px)';
            break;
            case blur <= 10:
                glass.style.backdropFilter = 'blur(2px)';
            break;
            case blur <= 15:
                glass.style.backdropFilter = 'blur(3px)';
            break;
            case blur <= 20:
                glass.style.backdropFilter = 'blur(4px)';
            break;
            case blur <= 25:
                glass.style.backdropFilter = 'blur(5px)';
            break;
            case blur <= 30:
                glass.style.backdropFilter = 'blur(6px)';
            break;
            case blur <= 35:
                glass.style.backdropFilter = 'blur(7px)';
            break;
            case blur <= 40:
                glass.style.backdropFilter = 'blur(8px)';
            break;
            case blur <= 45:
                glass.style.backdropFilter = 'blur(9px)';
            break;
            case blur <= 50:
                glass.style.backdropFilter = 'blur(10px)';
            break;
            case blur <= 55:
                glass.style.backdropFilter = 'blur(11px)';
            break;
            case blur <= 60:
                glass.style.backdropFilter = 'blur(12px)';
            break;
            case blur <= 65:
                glass.style.backdropFilter = 'blur(13px)';
            break;
            case blur <= 70:
                glass.style.backdropFilter = 'blur(14px)';
            break;
            case blur <= 75:
                glass.style.backdropFilter = 'blur(15px)';
            break;
            case blur <= 80:
                glass.style.backdropFilter = 'blur(16px)';
            break;
            case blur <= 85:
                glass.style.backdropFilter = 'blur(17px)';
            break;
            case blur <= 90:
                glass.style.backdropFilter = 'blur(18px)';
            break;
            case blur <= 95:
                glass.style.backdropFilter = 'blur(19px)';
            break;
            case blur <= 100:
                glass.style.backdropFilter = 'blur(20px)';
            break;
        }
    }
    // outline
    if(outlineNum >= 100){
        glass.style.border = '1px solid rgba(255,255,255,1)';
    }else if(outlineNum <= 9){
        glass.style.border = `1px solid rgba(255,255,255,0.0${outlineNum})`;
    }else{
        glass.style.border = `1px solid rgba(255,255,255,0.${outlineNum})`;
    }



    // output Code
    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    let five = document.getElementById('five');
    let six = document.getElementById('six');

    one.innerHTML = ('background-color : '+glassCss.backgroundColor+';');
    two.innerHTML = ('border : '+glassCss.border+';');
    three.innerHTML = ('backdrop-filter : '+glassCss.backdropFilter+';');
    four.innerHTML = ('-webkit-backdrop-filter : '+glassCss.backdropFilter+';');
    five.innerHTML = ('box-shadow : '+glassCss.boxShadow+';');
    six.innerHTML = ('-webkit-box-shadow : '+glassCss.boxShadow+';');


}requestAnimationFrame(main);