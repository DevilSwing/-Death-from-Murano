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
        if ($input.val() == 100) {
            $input.val(1);
        }else {
            $input.change();
        }
        return false;
    });













});






















// 	  $(function(){
// 		$('.choice c1').click(function(){
// 			  	$('.cost-span').text('1000')
// 			  });
// 	  });
	  

// 	  $('#1000').on('change', function () {
//     if ($(this).attr('checked')) {
//         $('#text').text('0 тнг.');
//     } else {
//         $('#text').text('1000 тнг.');
//     }

// $('.minus').click(function () {
//         var $input = $(this).parent().find('input');
//         var count = parseInt($input.val()) - 1;
//         count = count < 1 ? 1 : count;
//         $input.val(count);
//         $input.change();
//         return false;
//     });
//     $('.plus').click(function () {
//         var $input = $(this).parent().find('input');
//         $input.val(parseInt($input.val()) + 1);
//         $input.change();
//         return false;
//     });
 