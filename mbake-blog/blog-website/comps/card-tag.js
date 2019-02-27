
riot.tag2('card-tag', '<div class="columns"> <virtual each="{items}"> <div class="column col-6 col-sm-12"> <div class="card"> <div class="card-image"><img class="img-responsive" riot-src="{img_url}"></div> <div class="card-top"> <button class="btn btn-primary">button</button> <h3>{title}</h3> <div>{date} | Eldred Braun</div> </div> <div class="card-bottom"> <button class="btn btn-primary">Read More</button> </div> </div> </div> </virtual> </div>', '', '', function(opts) {
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

        thiz.update();

    }.bind(this)
});