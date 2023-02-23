// $(".basic").select2({
//   dropdownParent: $("#modalTambahData"),
//   // dropdownParent: $(".modalEditData"),
// 	tags: true,
// });
$('.basic').each(function() {
  $(this).select2({
    // theme: "bootstrap-5",
    dropdownParent: $(this).parent(), // fix select2 search input focus bug
  })
})
// fix select2 bootstrap modal scroll bug
$(document).on('select2:close', '.basic', function(e) {
  var evt = "scroll.select2"
  $(e.target).parents().off(evt)
  $(window).off(evt)
})
// var formSmall = $(".form-small").select2({ tags: true });
// formSmall.data('select2').$container.addClass('form-control-sm')

$(".nested").select2({
	tags: true
});
$(".tagging").select2({
  dropdownParent: $("#modalTambahData"),
  // maximumSelectionLength: 1,
	tags: false
});
$(".disabled-results").select2();
$(".placeholder").select2({
  dropdownParent: $("#modalTambahData"),
	placeholder: "Make a Selection",
	allowClear: true
});

function formatState (state) {
  if (!state.id) {
    return state.text;
  }
  var baseClass = "flaticon-";
  var $state = $(
    '<span><i class="' + baseClass + state.element.value.toLowerCase() + '" /> ' + state.text + '</i> </span>'
  );
  return $state;
};

$(".templating").select2({
  templateSelection: formatState
});