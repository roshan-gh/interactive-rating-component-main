let userSelectedCircle;
let previousSelected;

$('div[type="button"]').click(function() {
    userSelectedCircle = this.id;

    if (userSelectedCircle !== previousSelected) {
        removeHighlight(previousSelected);
        pressHighlight(userSelectedCircle);

    } else {
        pressHighlight(userSelectedCircle);

    }
    previousSelected = userSelectedCircle;
})

$('#submit').click(function() {
    if (userSelectedCircle) {
        $('.stars-page').fadeOut(10);
        $('#stars-count').text(`You selected ${userSelectedCircle} out of 5`);
        $('.thanks-page').fadeIn(10);
    }
})



function pressHighlight(button) {
    let selectedCircle = $(`#${button}`);
    selectedCircle.addClass('circle-selected');

}

function removeHighlight(button) {
    let selectedCircle = $(`#${button}`);
    selectedCircle.removeClass('circle-selected');
}