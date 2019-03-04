
riot.tag2('card-comp', '<div class="cards-container"> <div class="columns"> <virtual each="{items}"> <div class="column col-6 col-sm-12"> <div class="card"> <div class="card-image"><a href="{url}"><img class="img-responsive" riot-src="{img_url}"></a></div> <div class="card-header"> <div class="card-title h5">{title}</div> <div class="card-subtitle text-gray"> <i class="far fa-clock"> </i> {date}</div> </div> <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div> <div class="card-footer"> <button class="btn btn-primary">{topic}</button> </div> </div> </div> </virtual> </div> </div>', '', '', function(opts) {
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