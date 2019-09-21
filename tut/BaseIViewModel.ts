
interface iViewModel{
    
    /**
     * Return 2 objects if 2 forms
     * or return 2 objects if 2 components
     * or 2 arrays if 2 tables.
     * Or a mix: 1 form and 1 table and 1 components is 1 array and 2 objects
     */
    getData(key?:string):Object

    // returns 'OK', else an error message should be shown by View|Binding
    validate():string 
    
    log(...a):void

}//()

/**
 * Used by UI binding
 */
class BaseIViewModel {
    E1Listener = {} // ;to store E1Listener data for events

    testE1() {
      const THIZ:BaseIViewModel = this

      // data before
      this._disE1('dataB4', 'oh hi b4')
      this.addE1Listener('dataB4', function(data) {
        console.log('b4', data)
        // this should not fire
        THIZ._disE1('dataB4', 'oh hi b4')
        THIZ._disE1('dataB4', 'oh hi b4')
      })
      THIZ._disE1('dataB4', 'oh hi b4')

      // data after
      this.addE1Listener('dataAf', function(data) {
        console.log('af:', data)
        // this should not fire
        THIZ._disE1('dataAf', 'oh hi af')
      })
      THIZ._disE1('dataAf', 'oh hi af')
        // this should not fire
      THIZ._disE1('dataAf', 'oh hi af')
      THIZ._disE1('dataAf', 'oh hi af')

    }//()

    // 2 choices: if there, call
    addE1Listener(evtName, foo) { // using sessionstorage has file io, so we use RAM 
      const THIZ:BaseIViewModel = this

      if (THIZ.E1Listener[evtName]) {
        console.log('msg data exists ahead', evtName)
        foo(THIZ.E1Listener[evtName])
        delete THIZ.E1Listener[evtName]

      }
      // else fire the event when there
      else 
      addEventListener(evtName, function (evt) { // inline function
        console.log(evtName, 'lE1')
        foo(evt.detail)
        delete THIZ.E1Listener[evtName]

        // once the function has been called once:
        const inlineFoo:any = arguments.callee // arguments.callee is the inline function
        removeEventListener(evtName, inlineFoo) 
      })
    }//()

    protected _disE1(evtName, msg) {
        const THIZ:BaseIViewModel = this
        THIZ.E1Listener[evtName] = msg

        setTimeout(function(){
          dispatchEvent(new CustomEvent(evtName, { detail: msg }))
          //console.log(evtName, 'dE1')
        })
    }//()

  getGUID() { //generates a guid client side so no need to wait
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
  
  static removeAllStore() { // cookies and storage. For example to log out.
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
        var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
        var p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        }//inner while
        d.shift()
      }//while
    }//for
    localStorage.clear()
    sessionStorage.clear()
  }//()
  
}// class