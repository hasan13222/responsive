var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var colors=['#faca00', '#26c1c9','#81c926','#ab7df6'];
var values=[9,25,60,6];
var labels=['Donna', 'Disoccupato', 'Uomo','Occupato'];

dmbChart(64,64,54,12,values,colors,labels,0);

function dmbChart(cx,cy,radius,arcwidth,values,colors,labels,selectedValue){
    var tot=0;
    var accum=0;
    var PI=Math.PI;
    var PI2=PI*2;
    var offset=-PI/2;
    ctx.lineWidth=arcwidth;
    for(var i=0;i<values.length;i++){tot+=values[i];}
    for(var i=0;i<values.length;i++){
        ctx.beginPath();
        ctx.arc(cx,cy,radius,
            offset+PI2*(accum/tot),
            offset+PI2*((accum+values[i])/tot)
        );
        ctx.strokeStyle=colors[i];
        ctx.stroke();
        accum+=values[i];
    }
    var innerRadius=radius-arcwidth-3;
    ctx.beginPath();
    ctx.arc(cx,cy,innerRadius,0,PI2);
    ctx.fillStyle='transparent';
    ctx.fill();
    ctx.textAlign='center';
    ctx.textBaseline='bottom';
    ctx.fillStyle='#8dabc4';
    ctx.font=(innerRadius/3)+'px verdana';
    ctx.fillText("Totali",cx,cy+innerRadius*.6);
    ctx.fillStyle='#1a4070';
    ctx.font=(innerRadius/2.5)+'px verdana';
    ctx.fillText("12345",cx,cy+innerRadius*.1);
}


var canvasSecond=document.getElementById("canvas2");
var ctxSecond=canvasSecond.getContext("2d");

dmbChartSecond(64,64,54,12,values,colors,labels,0);

function dmbChartSecond(cx,cy,radius,arcwidth,values,colors,labels,selectedValue){
    var tot=0;
    var accum=0;
    var PI=Math.PI;
    var PI2=PI*2;
    var offset=-PI/2;
    ctxSecond.lineWidth=arcwidth;
    for(var i=0;i<values.length;i++){tot+=values[i];}
    for(var i=0;i<values.length;i++){
        ctxSecond.beginPath();
        ctxSecond.arc(cx,cy,radius,
            offset+PI2*(accum/tot),
            offset+PI2*((accum+values[i])/tot)
        );
        ctxSecond.strokeStyle=colors[i];
        ctxSecond.stroke();
        accum+=values[i];
    }
    var innerRadius=radius-arcwidth-3;
    ctxSecond.beginPath();
    ctxSecond.arc(cx,cy,innerRadius,0,PI2);
    ctxSecond.fillStyle="transparent";
    ctxSecond.fill();
    ctxSecond.textAlign='center';
    ctxSecond.textBaseline='bottom';
    ctxSecond.fillStyle='#8dabc4';
    ctxSecond.font=(innerRadius/3)+'px verdana';
    ctxSecond.fillText("Totali",cx,cy+innerRadius*.6);
    ctxSecond.fillStyle='#1a4070';
    ctxSecond.font=(innerRadius/2.5)+'px verdana';
    ctxSecond.fillText("12345",cx,cy+innerRadius*.1);
}


var canvasThird=document.getElementById("canvas3");
var ctxThird=canvasThird.getContext("2d");

dmbChartThird(64,64,54,12,values,colors,labels,0);

function dmbChartThird(cx,cy,radius,arcwidth,values,colors,labels,selectedValue){
    var tot=0;
    var accum=0;
    var PI=Math.PI;
    var PI2=PI*2;
    var offset=-PI/2;
    ctxThird.lineWidth=arcwidth;
    for(var i=0;i<values.length;i++){tot+=values[i];}
    for(var i=0;i<values.length;i++){
        ctxThird.beginPath();
        ctxThird.arc(cx,cy,radius,
            offset+PI2*(accum/tot),
            offset+PI2*((accum+values[i])/tot)
        );
        ctxThird.strokeStyle=colors[i];
        ctxThird.stroke();
        accum+=values[i];
    }
    var innerRadius=radius-arcwidth-3;
    ctxThird.beginPath();
    ctxThird.arc(cx,cy,innerRadius,0,PI2);
    ctxThird.fillStyle="transparent";
    ctxThird.fill();
    ctxThird.textAlign='center';
    ctxThird.textBaseline='bottom';
    ctxThird.fillStyle='#8dabc4';
    ctxThird.font=(innerRadius/3)+'px verdana';
    ctxThird.fillText("Totali",cx,cy+innerRadius*.6);
    ctxThird.fillStyle='#1a4070';
    ctxThird.font=(innerRadius/2.5)+'px verdana';
    ctxThird.fillText("12345",cx,cy+innerRadius*.1);
}


//navigation button click effect
$(document).ready(function(){
  $(".fltr_wrap .fltr_right .btn_cerca").click(function(){
    $(this).css("background-color", "#2D9EA3");
  });
  $(".fltr_wrap .fltr_right .btn_azata").click(function(){
    $(this).css("background-color", "#011E3F");
  });


  //toggle effects
  $("nav .navbar-brand .menu_icon i").click(function(){
    $(".sidebar").toggle();
    $(this).toggleClass("fa-times");
  });
  $(".fltr_wrap .d-block").click(function(){
    $(".filter_btn li ul").toggleClass("flex");
  });
});
