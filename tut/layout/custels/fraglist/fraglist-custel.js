var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
depp.require(['jquery', 'pagination', 'mustache', 'js-yaml', 'DOMDelayed'], function () {
    window.customElements.define('fraglist-custel', (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            console.log('cons');
            _this.sr = _this.attachShadow({ mode: 'closed' });
            _this.sr.appendChild(cTemp.content.cloneNode(true));
            new UIBinding(_this.sr);
            var THIZ = _this;
            return _this;
        }
        return class_1;
    }(HTMLElement)));
    var UIBinding = (function () {
        function UIBinding(sr) {
            this.sr = sr;
            this.render();
            loadFonts(['Open+Sans:300,400']);
            var table = this.sr.getElementById('data-container');
            table.addEventListener('click', this.onRowClick);
            this.sr.getElementById("prevBut").addEventListener("click", function () {
                console.log('P');
                $('#pagination-container').pagination('previous');
            });
            this.sr.getElementById("nextBut").addEventListener("click", function () {
                console.log('N');
                $('#pagination-container').pagination('next');
            });
            window.addEventListener('resize', this.render);
        }
        UIBinding.prototype.onRowClick = function (el) {
            var selector = '.fragTitle';
            var cel = el.target.closest(selector);
            if (!cel)
                return;
            var title = cel.innerText;
            console.log(title);
            disE('titleClick', title);
        };
        UIBinding.prototype.render = function () {
            var THIZ = this;
            this._fetchD().then(function (dat) {
                THIZ._onFData(dat.frags);
            });
        };
        UIBinding.prototype._fetchD = function () {
            var path = '';
            return new Promise(function (resolve, reject) {
                fetch(path + 'dat.yaml', {
                    cache: 'default',
                    keepalive: true
                }).then(function (fullResp) {
                    if (!fullResp.ok)
                        reject(fullResp.statusText);
                    return fullResp.text();
                }).then(function (ys) {
                    var y = jsyaml.safeLoad(ys);
                    resolve(y);
                })
                    .catch(function (err) {
                    console.log(err);
                    reject(err);
                });
            });
        };
        UIBinding.prototype._onFData = function (data) {
            var THIZ = this;
            console.log('data');
            var computedItems = $('.pagCont').height() / 65;
            console.log('rendering', $('.pagCont').height(), computedItems);
            $('#pagination-container').pagination({
                pageSize: computedItems,
                showPageNumbers: false,
                showPrevious: false,
                showNext: false,
                dataSource: data,
                callback: function (data, pagination) {
                    console.log('pagination');
                    setTimeout(function () {
                        THIZ.showHide(pagination.pageNumber, pagination.pageSize, pagination.totalNumber);
                    }, 1);
                    var html = renderMustache('temp1', data);
                    $('#data-container').html(html);
                }
            });
        };
        UIBinding.prototype.showHide = function (pg, sz, tot) {
            var THIZ = this;
            if (pg == 1) {
                THIZ._but('prevBut', false);
            }
            else
                THIZ._but('prevBut', true);
            var cur = pg * sz;
            if (cur < tot) {
                THIZ._but('nextBut', true);
            }
            else {
                THIZ._but('nextBut', false);
            }
        };
        UIBinding.prototype._but = function (id, on) {
            var $b = $('#' + id);
            $b.prop('disabled', !on);
            if (on) {
                $b.removeClass("classless");
                $b.removeClass("butOff");
                $b.addClass("btn-a");
                $b.addClass("butOn");
            }
            else {
                $b.removeClass("btn-a");
                $b.removeClass("butOn");
                $b.addClass("classless");
                $b.addClass("butOff");
            }
        };
        return UIBinding;
    }());
    console.log('loading');
    var cTemp = document.createElement('template');
    cTemp.innerHTML = "";
});
