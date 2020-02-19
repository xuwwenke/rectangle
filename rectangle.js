$(function(){
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');

    $btnCal.click(function(){
        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=1*(w+h)
            ,a=w*h;
        //output
        $perimeter.val(p),
        $area.val(a);
    })
})