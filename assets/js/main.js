(function (){
    let time = document.querySelector('.time');
    let s = 0;
    var timer;

    function createDate(second) { 
        let data = new Date(second * 1000); 
        return data.toLocaleTimeString('pt-BR', {hour12: false, minute: '2-digit', second: '2-digit', hour: '2-digit', timeZone: 'GMT'});
    }

    function init() {
        time.style.color = '#000'
        timer = setInterval(function () {
            s++;
            time.innerHTML = createDate(s);
        }, 1000);
    }

    function stop() {
        clearInterval(timer);
        time.style.color = '#E8350F';
    }

    function restart() {
        clearInterval(timer);
        time.innerHTML = '00:00:00';
        s = 0;
        init();
    }

    document.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target.className === 'init') {
            init();
        } 

        if(e.target.className === 'stop') {
            stop();
        }

        if(e.target.className === 'restart') {
            restart();
        }
    });
})();