
(function ($) {

    var self = {
        vampetaseImg: [
            'https://scontent.fbfh2-1.fna.fbcdn.net/v/t1.0-9/1486849_551800838247906_223830968_n.jpg?_nc_cat=101&_nc_ohc=GqZec1yrxs8AX-BYqSx&_nc_ht=scontent.fbfh2-1.fna&oh=768c57e3c67cf994ac589086ca41348f&oe=5E9DA9A2',
            'https://scontent.fbfh2-1.fna.fbcdn.net/v/t31.0-8/p960x960/1796961_587956421299014_930972417_o.jpg?_nc_cat=105&_nc_ohc=RGfQj4QG5BcAX8U3nZP&_nc_ht=scontent.fbfh2-1.fna&_nc_tp=1&oh=592f701ca6cb9d3b8efabf79d52716b6&oe=5EAAE257',
            'https://scontent.fbfh2-1.fna.fbcdn.net/v/t1.0-9/12552705_943524182408901_4381637076020458555_n.jpg?_nc_cat=101&_nc_ohc=bwHEHezISzsAX_Xt3kp&_nc_ht=scontent.fbfh2-1.fna&oh=2a5c64499e2b264c3a645577cbcd3939&oe=5EAF4D19',
            'https://scontent.fbfh2-1.fna.fbcdn.net/v/t31.0-8/s960x960/13923432_1065271983567453_6338790037834329187_o.jpg?_nc_cat=110&_nc_ohc=1H9mZbW10swAX9ZWuXt&_nc_ht=scontent.fbfh2-1.fna&_nc_tp=1&oh=297ab7b7f75597c4ce6fbcfe690a590a&oe=5E8DA331',
            'https://scontent.fbfh2-1.fna.fbcdn.net/v/t31.0-8/14137989_1084133231681328_6713302579303044142_o.jpg?_nc_cat=102&_nc_ohc=wgLfYWa3trsAX-YRe08&_nc_ht=scontent.fbfh2-1.fna&oh=d1debe145d26a05321837675794f630c&oe=5EA06B88',
            'https://scontent.fbfh2-1.fna.fbcdn.net/v/t31.0-8/s960x960/15168784_1161454490615868_1214731058601174746_o.jpg?_nc_cat=110&_nc_ohc=tjsD0syZ_LUAX_VpMoP&_nc_ht=scontent.fbfh2-1.fna&_nc_tp=1&oh=d09adc57b5318e802c4a0f70ee9123ca&oe=5EAF7098',
            'https://scontent.fbfh2-1.fna.fbcdn.net/v/t31.0-8/p720x720/1519253_706164299476214_1913572428346792546_o.jpg?_nc_cat=106&_nc_ohc=P8OL2NBBlZUAX9Zip11&_nc_ht=scontent.fbfh2-1.fna&_nc_tp=1&oh=9891e3f0b610430267aa3b511da09c76&oe=5EADD04C',
        ],
        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        self.handleImg(item, lstImgs);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                self.handleImg(item, lstImgs);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },
        handleImg: function (item, lstImgs) {
            $(item).error(function () {
                //Handle broken imgs
                self.handleBrokenImg(item, lstImgs);
            });

            self.setRandomImg(item, lstImgs);
        },
        setRandomImg: function (item, lstImgs) {
            var h = $(item).height();
            var w = $(item).width();
            $(item).css('width', w + 'px').css('height', h + 'px');
            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
        },
        handleBrokenImg: function (item, lstImgs) {

            var brokenImg = $(item).attr('src');
            var index = lstImgs.indexOf(brokenImg);
            if (index > -1) {
                lstImgs.splice(index, 1);
            }
            self.setRandomImg(item, lstImgs);
        },
    };

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.vampetaseImg, 3000);
    });

    //Set global variable
    $.nCage = self;

})(jQuery);
