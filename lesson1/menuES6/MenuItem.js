//Класс для пункта меню
class MenuItem {
    constructor(href, title)
    {
        this.href = href;
        this.title = title;
    }

    //Метод возвращает html код для конкретного пункта
    renderItem () {
        //return '<li><a href="' + this.href + '">' + this.title + '</a></li>'; //ES5
        return `<li><a href="${this.href}">${this.title}</a></li>`; //ES6
    }
}

class ExtendMenu extends MenuItem{
    constructor(href, title, IsSubMenu){
        super(href, title);
        this.IsSubMenu=IsSubMenu;
    }
    renderItem(){
        super.renderItem();
        if (this.IsSubMenu==true){            
            return `<ul><a href="${this.href}">${this.title}</a></ul>`;
        }
        else {
            return `<li><a href="${this.href}">${this.title}</a></li>`; 
        }
    }

}