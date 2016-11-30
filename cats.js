function ClickCats() {
    $('.thumbnail').on('click'function (event) {
        var change = $(event.currentTarget).find('img').attr('src');
        $('.hero img').attr('src', imgSrc);
    })
}

$(function () {
    clickCats();
});
