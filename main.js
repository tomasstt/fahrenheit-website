
        let sun = document.getElementById('Sun');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');

        window.addEventListener('scroll', function(){
        
            let value = window.scrollY;
            sun.style.top = value * 1.05 + 'px';
            text.style.marginRight = value * 1.5 + 'px';
            text.style.marginBottom = value * 1 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
        })
    