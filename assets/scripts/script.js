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

let	check1 = $('#10'),
	check2 = $('#11'),
	check3 = $('#12'),
	check4 = $('#13'),
	check5 = $('#14'),
	check6 = $('#15'),
	check7 = $('#16');

$('.choise').on('change', function () {
if (check1.checked) {
price = price + 100;
} else {
price = price - 100;
}
if (check2.checked) {
price = price + 100;
} else {
price = price - 100;
}
if (check3.checked) {
price = price + 100;
} else {
price = price - 100;
}
if (check4.checked) {
price = price + 100;
} else {
price = price - 100;
}
if (check5.checked) {
price = price + 100;
} else {
price = price - 100;
}
if (check6.checked) {
price = price + 100;
} else {
price = price - 100;
}
if (check7.checked) {
price = price + 100;
} else {
price = price - 100;
}



});








});



















