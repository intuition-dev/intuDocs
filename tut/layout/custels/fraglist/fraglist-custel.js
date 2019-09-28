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
    console.log('load');
    var UIBinding = (function () {
        function UIBinding(sr) {
            this.sr = sr;
            this.render();
            loadFonts(['Open+Sans:300,400']);
            var THIZ = this;
            var table = this.sr.getElementById('data-container');
            table.addEventListener('click', this.onRowClick);
            this.sr.getElementById("prevBut", THIZ.sr).addEventListener("click", function () {
                console.log('P');
                $('#pagination-container', THIZ.sr).pagination('previous');
            });
            this.sr.getElementById("nextBut", THIZ.sr).addEventListener("click", function () {
                console.log('N');
                $('#pagination-container'), THIZ.sr.pagination('next');
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
            var computedItems = $('.pagCont', THIZ.sr).height() / 65;
            console.log('rendering', $('.pagCont', THIZ.sr).height(), computedItems);
            $('#pagination-container', THIZ.sr).pagination({
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
                    $('#data-container', THIZ.sr).html(html);
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
            var THIZ = this;
            var $b = $('#' + id, THIZ.sr);
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
    cTemp.innerHTML = "\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/intuition-dev/intuDS@v1.0.3/src/css/min.min.css\"/>\n\n<div class=\"fragCont\">\n    <p></p>\n    <button class=\"btn butOff classless\" id=\"prevBut\" disabled=\"disabled\">Previous </button>\n    <div class=\"topSpace\"></div>\n    <div class=\"pagCont\">\n    <div id=\"data-container\"></div>\n    <div id=\"pagination-container\"></div>\n    </div>\n    <button class=\"btn butOff classless\" id=\"nextBut\" disabled=\"disabled\">Next </button>\n    <template id=\"temp1\"><span>{{#.}}\n    <div class=\"fragTitle\">{{title}}</div>\n    <hr/><br/></span><span>{{/.}}</span></template>\n</div>\n\n<style>\n    .fragCont {\n        width: 200px;\n        margin-left: 1em;\n        display: flex;\n        flex-direction: column;\n        height: calc(100% - 1.5em);\n    }\n    .topSpace {\n        min-height: 1.6em;\n    }\n    \n    .pagCont {\n        flex-grow: 1;\n    }\n\n    .fragTitle {\n        font-weight: 400;\n        \n        /*clamp */\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;  \n        overflow: hidden;\n    }\n\n    .butOn {\n        font-weight: normal;\n        pointer-events: auto;\n    }\n    .butOff {\n        font-weight: lighter;\n        pointer-events: none;\n}\n</style>";
    window.customElements.define('fraglist-custel', (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            console.log('cons');
            _this.sr = _this.attachShadow({ mode: 'closed' });
            _this.sr.appendChild(cTemp.content.cloneNode(true));
            new UIBinding(_this.sr);
            return _this;
        }
        return class_1;
    }(HTMLElement)));
});
