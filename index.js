let userSelectedCircle;
$('div[type="button"]').click(function() {
    userSelectedCircle = this.id;
    pressHighlight(userSelectedCircle);
})


// $('.stars-page').fadeOut(10);
// $('.thanks-page').fadeIn(10);

function pressHighlight(button) {
    let selectedCircle = $(`#${button}`);
    selectedCircle.addClass('circle-selected');

}