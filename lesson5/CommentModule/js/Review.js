class Review {
    constructor(selector) {
        this.selector = selector;
        this.arrReviews = [];
        this.AddAjax = function(id, text) {
            $.ajax
            ({
                type: "POST",
                url: "../CommentModule/DataBase/typeOfComment.json",
                dataType: 'json',
                data: JSON.stringify(id, text),
                success: function () {        
                console.log("Success!"); 
                }
            })
        };
        $.get({
            url: "../CommentModule/DataBase/typeOfComment.json",
            dataType: "json",
            context: this,
            success: function (data) {
                for (var i = 0; i < data.reviews.length; i++) {
                    var review = new MainInit(data.reviews[i].idReview, data.reviews[i].text);
                    this.arrReviews.push(review);
                }
                this.render();
            }
        });


        
    }
    

    render() {
        for (var i = 0; i < this.arrReviews.length; i++) {
            this.arrReviews[i].render(this.selector);
        }
    }
    
    add(text) {
        let idRev=this.arrReviews.length+1;
        var review = new MainInit(idRev, text);
        review.render(this.selector);
        this.arrReviews.push(review);
        this.AddAjax(idRev, text);
        alert('Ваш ответ передан на модерацию')
        
    }
    
}