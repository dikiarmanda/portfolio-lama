// palaralx
// about
$(window).on('load', function () {
    $('.pLeft').addClass('pMuncul');
    $('.pRight').addClass('pMuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron .rounded-circle').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // projects
    if (wScroll > $('.projects').offset().top - 250) {
        $('.projects .card').each(function (i) {
            setTimeout(function () {
                $('.projects .card').eq(i).addClass('muncul');
            }, 300*(i+1));
        });
    }
});

function process() {
    var nama = document.getElementById('inputName').value;
    var username = document.getElementById('inputUsername').value;
    var post = document.getElementById('inputPost').value;
    var time = document.getElementById('inputTime').value;
    var date = document.getElementById('inputDate').value;
    var device = document.getElementById('inputDevice').value;

    data = document.querySelector('.formInput');
    data.classList.add('d-none');

    twitPost = document.querySelector('.twitterPost');
    twitPost.classList.remove('d-none');

    document.getElementById('name').innerHTML=nama;
    document.getElementById('username').innerHTML=username;
    document.getElementById('post').innerHTML=post;
    document.getElementById('time').innerHTML=time;
    document.getElementById('date').innerHTML=date;
    document.getElementById('device').innerHTML=device;
};

function reset() {
    window.location.reload();
};