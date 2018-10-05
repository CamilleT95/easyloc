

var smoothScroll = {
    speed: 0,
    delay: 10, // en ms
    timer: null,
    scrollSpeed: 1.3,
    inertia: 0.95,
    init: function(){
        this.setEventsListeners();
    },
    setEventsListeners: function(){
        (function(self) {
            var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
            document.addEventListener(mousewheelevt, function(e) {self.setSpeed(e)}, false);
        })(this);
    },
    setSpeed: function(e){
        this.speed += e.wheelDelta < 0 ? -this.scrollSpeed : this.scrollSpeed;
        if(this.timer == null){
            this.timer = setTimeout(this.smoothScroll, this.delay, this);
        }
        e.preventDefault();
    },
    smoothScroll: function(scope){
        var self = scope;
        self.speed *= self.inertia;
 
        window.scrollTo(0, window.scrollY - self.speed );
 
        if(self.speed < self.inertia && self.speed > -self.inertia){
            self.speed = 0;
            clearTimeout(self.timer);
            self.timer = null;
        }else{
            self.timer = setTimeout(self.smoothScroll, self.delay, self);
        }
    }
}
 
smoothScroll.init();

$(document).ready(function () {
    $("#aboutMe").hide();
    $("#fadeIn").click(function () {
        $("#aboutMe").fadeIn();
    });
});

jQuery(document).ready(function ($) {
    $("#fadeIn").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });
});

$(document).ready(function () {
    $("#aboutM").hide();
    $("#fadeI").click(function () {
        $("#aboutM").fadeIn();
    });
});

jQuery(document).ready(function ($) {
    $("#fadeI").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });
});

$(document).ready(function () {
    $("#about").hide();
    $("#fade").click(function () {
        $("#about").fadeIn();
    });
});

jQuery(document).ready(function ($) {
    $("#fade").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });
});






