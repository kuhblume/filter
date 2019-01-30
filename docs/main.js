function changeData(){
    document.getElementById("test").style.filter=
        'hue-rotate('+String(data.rotate)+'deg) '+
        'brightness('+data.brightness+'%) '+
        'contrast('+data.contrast+'%) '+
        'grayscale('+data.grayscale+'%) '+
        'saturate('+data.saturate+'%) '+
        'sepia('+data.sepia+'%) '+
        'invert('+data.invert+'%) '+
        'opacity('+data.opacity+'%) '+
        'blur('+data.blur+'px) ';
}


let inputs = document.getElementById("inputList");
function input(){
    for (let i = 0; i < inputs.children.length; i++) {
        if (inputs.children[i].matches('label')) {
            data[inputs.children[i].children[1].id]=inputs.children[i].children[1].value;
            inputs.children[i].children[0].innerHTML=inputs.children[i].children[1].id+':'+data[inputs.children[i].children[1].id];
        }
    }
    changeData();
}

function reset(){
    data={
        rotate:0,
        brightness:100,
        contrast:100,
        grayscale:0,
        saturate:100,
        sepia:0,
        invert:0,
        opacity:100,
        blur:0,
    };
    changeData();
    for (let i = 0; i < inputs.children.length; i++) {
        if (inputs.children[i].matches('label')) {
            inputs.children[i].children[1].value=data[inputs.children[i].children[1].id];
            inputs.children[i].children[0].innerHTML=inputs.children[i].children[1].id+':'+data[inputs.children[i].children[1].id];
        }
    }
}
reset();//init