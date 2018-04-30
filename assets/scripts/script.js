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






let number = $('.number')
let total = 0;
let skidka = 0;
var $priceBlock = $('.cost-span');
var $skidkaBlock = $('.skidka-span');
$('.js-add-price').on('change', function() {
    const $item = $(this);
    const price = parseFloat($item.data("price"));
console.log($item.prop("checked"))
console.log(total)
    if ($item.prop("checked")) {
        total += price * number;
    }
    else {
        total -= price * number;
    }

    $priceBlock.text(total);
    

    if (total >= 2000) {
        skidka = 90;
    } else if (total>=985) {
        skidka = 46;
    } else if (total>= 100) {
        skidka = 9;
    } else {
        skidka = 0;
    }

    $skidkaBlock.text(skidka);





});


let param = $('.js-add-param')











});



















