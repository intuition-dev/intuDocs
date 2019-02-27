
riot.tag2('card-tag', '<div class="cards-container"> <div class="columns"> <virtual each="{items}"> <div class="column col-6 col-sm-12"> <div class="card"> <div class="card-image"><img class="img-responsive img-fit-cover" riot-src="{img_url}"></div> <div class="card-top"> <button class="btn btn-primary">button</button> <h3>{title}</h3> <div>{date} | Eldred Braun</div> </div> <div class="card-bottom"><a href="{url}"> <button class="btn btn-primary">Read More</button></a></div> </div> </div> </virtual> </div> </div>', '', '', function(opts) {
    console.info('oh hi tag');
    this.on('*', function(evt) {
        console.info('riot', evt);
    });
    this.items = [];
    thiz = this;

    this.render = function(data) {
        console.info(data);
        if(!data ) {
            thiz.items = [];
            thiz.update();
            return;
        }
        console.info(Object.keys(data[0]));

        let cloned = JSON.parse(JSON.stringify(data));
        thiz.items = cloned;

        let sz = thiz.items.length;
        for(i = 0; i < sz; i++) {
              var item = thiz.items[i];

              item.url = '/posts/' + item.url;
              console.info(item.url);
          }

        thiz.update();

    }.bind(this)
});