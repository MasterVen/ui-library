import './lib/lib';

$('button').on('click', function () {
  $('div').eq(1).toggleClass('active');
  $('div').index();
});

$('div').click(function () {
  console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findmeq'));
console.log($('.findme').siblings());

// console.log($('button').html('Hello'));
