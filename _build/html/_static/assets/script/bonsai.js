var animData = {
        container: document.getElementById('container_bonsai'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://labs.nearpod.com/bodymovin/demo/bonsai/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);