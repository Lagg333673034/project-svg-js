let array1_tspan_x = new Array();
let array1_tspan_y = new Array();
let array2_tspan_x = new Array();
let array2_tspan_y = new Array();

let array1_rect1_x = new Array();
let array1_rect1_y = new Array();
let array1_rect1_width = new Array();
let array2_rect1_x = new Array();
let array2_rect1_y = new Array();
let array2_rect1_width = new Array();

array1_tspan_x = [
    '2','60',
    '2','110',
    '43','110',
    '2','95','120',
    '2','70','105',
    '2','40'
];
array1_tspan_y = [
    '16','16',
    '36','36',
    '58','58',
    '78','78','78',
    '103','103','103',
    '125','125'
];
array1_rect1_x = [
    '100',
    '20',
    '2',
    '34',
    '108'
];
array1_rect1_y = [
    '5',
    '25',
    '46',
    '92',
    '114'
];
array1_rect1_width = [
    '57',
    '90',
    '40',
    '35',
    '50'
];

array2_tspan_x = [
    '2','35','110','125',
    '2','80','111',
    '2','17','38','104','126',
    '2','25'
];
array2_tspan_y = [
    '16','16','16','16',
    '38','38','38',
    '60','60','60','60','60',
    '80','80'
];
array2_rect1_x = [
    '60',
    '41',
    '58',
    '66'
];
array2_rect1_y = [
    '8',
    '29',
    '51',
    '72'
];
array2_rect1_width = [
    '47',
    '37',
    '44',
    '90'
];

window.addEventListener('resize', function(event) {
    var fields_tspan = document.getElementsByName("tspan[]");
    var fields_rect1 = document.getElementsByName("rect1[]");

    document.getElementById("rect0").setAttribute('x', 0);
    document.getElementById("rect0").setAttribute('y', 0);
    document.getElementById("rect0").setAttribute('width', 160);

    document.getElementById("back").setAttribute('x', 0);
    document.getElementById("back").setAttribute('y', 0);
    document.getElementById("back").setAttribute('width', 160);
    document.getElementById("back").setAttribute('mask', "url(#myMask)");

    if(window.innerWidth >=1 && window.innerWidth < 600){
        document.getElementById("svg").setAttribute('viewBox', '0 0 160 130');
        document.getElementById("back").setAttribute('height', 130);
        
        for(let i=0; i<fields_tspan.length && i<array1_tspan_x.length; i++){
            fields_tspan[i].setAttribute('x', array1_tspan_x[i]);
            fields_tspan[i].setAttribute('y', array1_tspan_y[i]);
            fields_tspan[i].style.fontSize = "20px";
        }
        for(let i=0; i<fields_rect1.length; i++){
            fields_rect1[i].setAttribute('x', array1_rect1_x[i]);
            fields_rect1[i].setAttribute('y', array1_rect1_y[i]);
            fields_rect1[i].setAttribute('width', array1_rect1_width[i]);
            fields_rect1[i].setAttribute('height', '1.0rem');
        }
    }

    if(window.innerWidth >= 600){
        document.getElementById("svg").setAttribute('viewBox', '0 0 160 90');
        document.getElementById("back").setAttribute('height', 90);

        for(let i=0; i<fields_tspan.length && i<array2_tspan_x.length; i++){
            fields_tspan[i].setAttribute('x', array2_tspan_x[i]);
            fields_tspan[i].setAttribute('y', array2_tspan_y[i]);
            fields_tspan[i].style.fontSize = "12px";
        }
        for(let i=0; i<fields_rect1.length; i++){
            fields_rect1[i].setAttribute('x', array2_rect1_x[i]);
            fields_rect1[i].setAttribute('y', array2_rect1_y[i]);
            fields_rect1[i].setAttribute('width', array2_rect1_width[i]);
            fields_rect1[i].setAttribute('height', '0.8rem');
        }
    }
}, true);