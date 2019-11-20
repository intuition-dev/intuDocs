
riot.tag2('investment-comp', '<div class="cards"><virtual each="{items}"> <virtual if="{publish1}"><a class="item" href="{url}"> <div class="cardInfo"> <div class="img"><img riot-src="..{url}/{img}" title="{title}"></div> <div> <h6 class="cAccent">{name}</h6> </div> </div></a></virtual> </virtual> </div><br>', 'investment-comp .cards,[data-is="investment-comp"] .cards{ display: flex; flex-wrap: wrap; justify-content: center; align-content: flex-start; } investment-comp .cardInfo,[data-is="investment-comp"] .cardInfo{ width: 100%; height: 100%; min-height: 100px; overflow: hidden; } investment-comp .item,[data-is="investment-comp"] .item{ width: 33.333%; padding: 0 2rem; } investment-comp .item:hover .cAccent,[data-is="investment-comp"] .item:hover .cAccent{ text-decoration: underline; } investment-comp .img,[data-is="investment-comp"] .img{ overflow: hidden; width: 100%; height: 270px; max-width: 100%; margin: 0 0 20px 0; } investment-comp img,[data-is="investment-comp"] img{ display: block; width: 100%; min-height: 100%; object-fit: cover; transition: transform .5s ease-in-out; } investment-comp img:hover,[data-is="investment-comp"] img:hover{ transform: scale(1.1); } investment-comp .cAccent,[data-is="investment-comp"] .cAccent{ text-transform: capitalize; font-size: 21px; font-weight: 600; } @media (max-width: 960px) { investment-comp .img,[data-is="investment-comp"] .img{ height: 200px; } investment-comp .cAccent,[data-is="investment-comp"] .cAccent{ font-size: 17px; } } @media (max-width: 840px) { investment-comp .item,[data-is="investment-comp"] .item{ padding: 0 1rem; } investment-comp .img,[data-is="investment-comp"] .img{ height: 150px; } } @media (max-width: 600px) { investment-comp .cards,[data-is="investment-comp"] .cards{ margin: 0 -.5rem; } investment-comp .item,[data-is="investment-comp"] .item{ padding: 0 .5rem; } investment-comp .cAccent,[data-is="investment-comp"] .cAccent{ font-size: 14px; } } @media (max-width: 500px) { investment-comp .item,[data-is="investment-comp"] .item{ width: 100%; } } @media (max-width: 300px) { investment-comp .item,[data-is="investment-comp"] .item{ padding: .5rem; } investment-comp .img,[data-is="investment-comp"] .img{ height: 150px; margin: 0 0 7px 0; } }', '', function(opts) {
    this.on('*', function(evt) {

    });
    this.items = [];
    thiz = this;

    this.render = function(data) {
        if(!data ) {
            thiz.items = [];
            thiz.update();
            return;
        }

        var   cloned = JSON.parse(JSON.stringify(data));
        thiz.items = cloned;

        var   sz = thiz.items.length;
        for(i = 0; i < sz; i++) {
            var  item = thiz.items[i];

            item.image = ROOT + 'investments/' + item.url + '/who.jpg';
            item.url = ROOT + 'investments/' + item.url + '/';
        }

        thiz.update();

    }.bind(this)
});