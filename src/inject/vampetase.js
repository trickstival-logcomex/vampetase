
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
            'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E03AQEfmF4s89NPSQ%2Fprofile-displayphoto-shrink_200_200%2F0%3Fe%3D1583971200%26v%3Dbeta%26t%3DkJPSd_Sn_yMRXoIk7QLA-9Fy-KGkl_3QMKlXo2Aq7f8',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlFfTKqoBFHwtwE2x0kA7UcODGngIG3R7cBohq2bR4nRhUNPquQ&s',
            'https://media-exp1.licdn.com/dms/image/C4D03AQFLZx0BVEIIjg/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=TmNmISIsZFDVC_U9Xm3oCFtpyozV_duSi5W87ZfZNYQ',
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys10.png?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys11.jpg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys12.jpg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys13.jpg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys14.jpg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys3.jpg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys4.jpg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys5.jpg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys6.png?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys7.png?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/crys9.png?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz10.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz11.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz12.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz13.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz14.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz15.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz16.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz17.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz18.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz19.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz2.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz20.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz21.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz22.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz23.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz24.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz25.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz3.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz4.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz5.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz6.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz7.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz8.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cryz9.jpeg?raw=true",
            "https://github.com/trickstival-logcomex/vampetase/blob/master/crys/cyrs2.jpg?raw=true"
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
