const hours = document.querySelector('.time__hours');
const date = document.querySelector('.time__date');

const updateTime = setInterval (() => {
    let nowTime = new Date().toLocaleTimeString([], 
        { 
            hour: '2-digit', 
            minute: '2-digit' 
        })
        
    let nowDate = new Date().toLocaleDateString('pt-BR',
        {
            month: 'long',
            year: 'numeric',
            day: 'numeric'
        })

        
    hours.innerHTML = nowTime
    date.innerHTML = nowDate
}, 1000)



