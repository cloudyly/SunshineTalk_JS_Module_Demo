(function (m, w) {
    function dating() {
        console.log('模块化铁器时代')
        console.log('两人开始约会....')

        m.intro()
        w.intro()
    }

    window.dating = {
        dating
    }
})(man, woman)
