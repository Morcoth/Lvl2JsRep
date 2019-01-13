class Menu {
    constructor(myId, myClass, myItems)
    {
        this.id = myId;
        this.className = myClass;
        this.items = myItems;
    }

    render () {
        var result = `<ul class="${this.className}" id="${this.id}">`;

        //Сами пункты меню
        for (var i = 0; i < this.items.length; i++){
            result += this.items[i].renderItem();
        }

        result += '</ul>';
        return result;
    }

    //TODO: удаление меню
    InitCommand()
    {
        document.getElementById("RemoveButton").addEventListener("click", ()=> this.Remove());
        //document
    };
    Remove(){
        let elementtoremove=prompt("какой элемент списка удалить?:");
        if(elementtoremove!=null && elementtoremove<=this.items.length && elementtoremove<=this.items.length>=0){
            this.items[elementtoremove]=null;
            
        }


    }
}

window.onload = function () {
    //Пункты меню
      var items = [
          new ExtendMenu('/', 'Главная', false),
          new ExtendMenu('/about', 'О нас', true),
          new ExtendMenu('/service', 'Услуги', true),
          new ExtendMenu('/contacts', 'Контакты',true),
          new ExtendMenu('/contacts', 'Контакты',false),
      ];

      //Само меню
      var menu = new Menu('my', 'my', items);

      //Выбираем контейнер меню
      var menuContainer = document.getElementById('menu1');

      //Отображаем на странице html код, который вернул render
      menuContainer.innerHTML = menu.render();            
      menu.InitCommand();            
  };
