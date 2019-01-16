class MainInit {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    render($jQueryElement) {
        var $reviewInit = $('<div />', {
            class: "review"
        });

        var $idInit = $('<p />', {
            text: "ID отзыва: " + this.id
        });

        var $textInit = $('<p />', {
            text: "Текст отзыва: " + this.text
        });

        var $btnLikeInit = $('<button />', {
            class: "btnAprove",
            text: "Одобрить"
        });

        var $btnDelete = $('<button />', {
            class: "btnDelete",
            text: "Удалить"
        });

        $idInit.appendTo($reviewInit);
        $textInit.appendTo($reviewInit);
        $btnLikeInit.appendTo($reviewInit);
        $btnDelete.appendTo($reviewInit);
        $reviewInit.appendTo($jQueryElement);
    }
}