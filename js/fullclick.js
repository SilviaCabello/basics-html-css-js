


const fullclickelements = document.querySelectorAll('div.fullclick');

if(fullclickelements && fullclickelements.length > 0) {

    //for(let i=0;i<fullclickelements.length;i++) {

    for(let i=0,l=fullclickelements.length;i<l;i++) {

        let elem = fullclickelements[i];
        elem.addEventListener('click',function(ev) {
            ev.stopPropagation();
            let cta = elem.querySelector('a.fullclick_link');
            if (ev.target !== cta) {
                cta.click();
            }
        });
    }
}


let runme = true;
for ( let i = 0 ; i < 10 && runme; i = i + 1) {
    //console.log('hallo welt ' + i);
    if (i==5) {
        runme = false;
    }
}

let testarray = [ 1,5,123,6,342,6 ];

for(let i=0,l=testarray.length;i<l;i++) {
    console.log('xx',i,testarray[i]);
}
testarray.forEach(function(value,idx) {
   console.log(idx + ' : '+value);
});

testarray.map(function(value,idx) {
    console.log(idx + ' : '+value);
});



const dataclickelements = document.querySelectorAll('[data-fullclick]');

if(dataclickelements && dataclickelements.length > 0) {

    //for(let i=0;i<fullclickelements.length;i++) {

    for(let i=0,l=dataclickelements.length;i<l;i++) {

        let elem = dataclickelements[i];

        let mylink = elem.dataset.fullclick;


        elem.addEventListener('click',function(ev) {
            ev.stopPropagation();
            let cta = elem.querySelector(mylink);
            if (ev.target !== cta) {
                cta.click();
            }
        });
    }
}
