$(document).ready(function () {

 let minus = $('.left'),
        plus = $('.right');
    minus.click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    plus.click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        if ($input.val() == 10) {
            $input.val(1);
        }else {
            $input.change();
        }
        return false;
    });








var price = 0;
var priceBlock = $('.cost-span');
var sofa = $('#10');
sofa.on('change', function() {
console.log(123)
if (sofa.prop("checked")) {
price = price + 100;
console.log(price);
$(priceBlock).text(price)
}
else {
price = 0;
$(priceBlock).text(price)
}
});

var price = 0;
var priceBlock = $('.cost-span');
var armch = $('#11');
armch.on('change', function() {
console.log(123)
if (armch.prop("checked")) {
price = price + 70;
console.log(price);
$(priceBlock).text(price)
}
else {
price = 0;
$(priceBlock).text(price)
}
});
var price = 0;
var priceBlock = $('.cost-span');
var mat = $('#12');
mat.on('change', function() {
console.log(123)
if (mat.prop("checked")) {
price = price + 200;
console.log(price);
$(priceBlock).text(price)
}
else {
price = 0;
$(priceBlock).text(price)
}
});
var price = 0;
var priceBlock = $('.cost-span');
var chair = $('#13');
chair.on('change', function() {
console.log(123)
if (chair.prop("checked")) {
price = price + 150;
console.log(price);
$(priceBlock).text(price)
}
else {
price = 0;
$(priceBlock).text(price)
}
});
var price = 0;
var priceBlock = $('.cost-span');
var carp = $('#14');
carp.on('change', function() {
console.log(123)
if (carp.prop("checked")) {
price = price + 20000;
console.log(price);
$(priceBlock).text(price)
}
else {
price = 0;
$(priceBlock).text(price)
}
});
var price = 0;
var priceBlock = $('.cost-span');
var puf = $('#15');
puf.on('change', function() {
console.log(123)
if (puf.prop("checked")) {
price = price + 134;
console.log(price);
$(priceBlock).text(price)
}
else {
price = 0;
$(priceBlock).text(price)
}
});
var price = 0;
var priceBlock = $('.cost-span');
var kit = $('#16');
kit.on('change', function() {
console.log(123)
if (kit.prop("checked")) {
price = price + 100;
console.log(price);
$(priceBlock).text(price)
}
else {
price = 0;
$(priceBlock).text(price)
}
});
 let total = (sofa + armch + mat + chair + carp + puf + kit);
 let persent 

if (total >= 200) {
percent = 85;
$('skidka-span').text(100 - persent)
}

});



















