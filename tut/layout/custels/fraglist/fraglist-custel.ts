
declare var jsyaml: any
declare var $: any
declare var depp: any
declare var disE: any
declare var loadFonts: any
declare var renderMustache: any


depp.require(['jquery', 'pagination', 'mustache', 'js-yaml', 'DOMDelayed'], function() {

    window.customElements.define('fraglist-custel', class extends HTMLElement {
        sr // shadow root var
    
        dialog
        constructor() {
            super()
            console.log('cons')

            this.sr = this.attachShadow({ mode: 'closed' })
            this.sr.appendChild(cTemp.content.cloneNode(true))
            new UIBinding(this.sr)


            let THIZ = this

        }//cons    

    })//custel



class UIBinding {   
    sr:any
    constructor(sr:any) {
        this.sr = sr
        this.render()

        loadFonts(['Open+Sans:300,400'])

        //events
        const THIZ = this

        var table = this.sr.getElementById('data-container')
        table.addEventListener('click', this.onRowClick)

        this.sr.getElementById("prevBut",THIZ.sr).addEventListener("click", function(){
                console.log('P')
                $('#pagination-container',THIZ.sr).pagination('previous')
            })

        this.sr.getElementById("nextBut",THIZ.sr).addEventListener("click", function(){
            console.log('N')
            $('#pagination-container'),THIZ.sr.pagination('next')
        })//event

        window.addEventListener('resize', this.render)


    }//cons
    

    onRowClick(el) {
        const selector = '.fragTitle'
        var cel = el.target.closest(selector)
        if (!cel) return
        //console.log(cel)

        var title = cel.innerText
        console.log(title)

        disE('titleClick', title)

    }//()

    render() {
        const THIZ = this
        this._fetchD().then(function(dat:any){
            THIZ._onFData(dat.frags)
        })
    }//()

    _fetchD() {  //polyIO
        var path = ''

        // data
        return new Promise(function (resolve, reject) {
            fetch(path+'dat.yaml', {
                cache: 'default',
                keepalive: true
            }).then(function (fullResp) {
                if (!fullResp.ok)
                    reject(fullResp.statusText)
                return fullResp.text()
                }).then(function (ys) {
                    let y = jsyaml.safeLoad(ys)
                    resolve(y)
                })
            .catch(function (err) {
                console.log(err)
                reject(err)
            })
        })//pro
    }

    _onFData(data) {        
        const THIZ = this

        console.log('data')
        // MATH:
        var computedItems = $('.pagCont',THIZ.sr).height() / 65   // pixels  of each row

        console.log('rendering', $('.pagCont',THIZ.sr).height(), computedItems ) 

        $('#pagination-container',THIZ.sr).pagination({
            pageSize: computedItems,
            showPageNumbers: false,
            showPrevious: false,
            showNext: false,

            dataSource: data,

            callback: function(data, pagination) { // on page
                console.log('pagination')
                setTimeout(function(){ //pg, sz, tot
                    THIZ.showHide(pagination.pageNumber, pagination.pageSize, pagination.totalNumber)
                },1)

                var html = renderMustache('temp1', data)
                $('#data-container',THIZ.sr).html(html)

            }//cb
        })

    }//()

    showHide(pg, sz, tot) {
        const THIZ = this

        if(pg==1)  { THIZ._but('prevBut', false ) }
            else THIZ._but('prevBut', true) 

        var cur = pg * sz
        //console.log('showHide', cur, tot)

        if(cur < tot) { // more 
            THIZ._but('nextBut', true) 
        } else { // to much
            THIZ._but('nextBut', false) 
        }
    }

    _but(id, on) {
        var THIZ = this
        //console.log(id, on)
        let $b = $('#'+id,THIZ.sr)
        $b.prop('disabled', !on)
        if(on) {
            $b.removeClass( "classless" )
            $b.removeClass( "butOff" )
            $b.addClass(    "btn-a" )
            $b.addClass(    "butOn" )

        } else {
            $b.removeClass( "btn-a" )
            $b.removeClass( "butOn" )
            $b.addClass(    "classless" )
            $b.addClass(    "butOff" )
        }
    }//()
    
}// class

    // template
    console.log('loading')
    var cTemp = document.createElement('template')
    cTemp.innerHTML = ``


})