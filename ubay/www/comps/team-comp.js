
riot.tag2('team-comp', '<div class="cards"><virtual each="{items}"> <virtual if="{publish1}"><a class="flex left item" href="{url}"> <div class="cardInfo d-flex"> <div class="img"><img riot-src="..{url}/{img}"></div> <div> <h6 class="cAccent">{title}</h6> <h6 class="black">{position}</h6> </div> </div></a></virtual> </virtual> </div><br>', 'team-comp .cards,[data-is="team-comp"] .cards{ display: flex; flex-wrap: wrap; justify-content: flex-start; align-content: flex-start; padding: 0 5%; } team-comp .item,[data-is="team-comp"] .item{ width: 33.333%; } team-comp .cardInfo,[data-is="team-comp"] .cardInfo{ padding: 15px; min-height: 100px; width: 100%; margin: 10px; overflow: hidden; background: white; border: 1px solid #DCDCDC; transition: border .2s ease-in-out; } team-comp .cardInfo:hover,[data-is="team-comp"] .cardInfo:hover{ border-color: #0F3462; } team-comp .cardInfo:hover img,[data-is="team-comp"] .cardInfo:hover img{ -webkit-filter: grayscale(100%); filter: grayscale(100%); } team-comp h6.black,[data-is="team-comp"] h6.black{ font-weight: 700; var ter-spacing: -1px; text-transform: uppercase; font-size: 13px; color: #777; } team-comp h6.cAccent,[data-is="team-comp"] h6.cAccent{ text-transform: capitalize; font-size: 18px; line-height: 1.1; var ter-spacing: -0.5px; margin-bottom: 7px; } team-comp .img,[data-is="team-comp"] .img{ width: 70px; height: 70px; overflow: hidden; margin-right: 10px; flex-shrink: 0; } team-comp img,[data-is="team-comp"] img{ display: block; width: 100%; min-height: 100%; object-fit: cover; transition: all .2s ease-in-out; } @media (max-width: 960px) { team-comp h6.cAccent,[data-is="team-comp"] h6.cAccent{ font-size: 14px; } team-comp h6.black,[data-is="team-comp"] h6.black{ font-size: 11px; } } @media (max-width: 770px) { team-comp .item,[data-is="team-comp"] .item{ width: 50%; } } @media (max-width: 600px) { team-comp .item,[data-is="team-comp"] .item{ width: 100%; } }', '', function(opts) {
    this.on('*', function(evt) {

    })
    this.items = []
    thiz = this

    this.render = function(data) {
        if(!data ) {
            thiz.items = []
            thiz.update()
            return
        }

        var   cloned = JSON.parse(JSON.stringify(data))
        thiz.items = cloned

    var   sz = thiz.items.length
    for(i = 0; i < sz; i++) {
            var  item = thiz.items[i]

            item.image = ROOT + 'team/' + item.url + '/who.jpg'
            item.url = ROOT + 'team/' + item.url + '/'
        }

        thiz.update()

    }.bind(this)
});