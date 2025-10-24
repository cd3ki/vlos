//Specific course logic and config
function Course(jsonCourse) {
    var _self = this;

    //Minimum passing score
    var scoreToPass = 80;

    var timers = [];

    var counters = [];

    //Content Transition
    this.transition = "fadeInLeft";

    //navigation //  false = libre //  true = progresiva
    this.navigation = true;

    this.mediaLocation = 'video/';

    this.afterViewLoaded = function (view) {
        //clear timers
        for (var i = 0; i < timers.length; i++) {
            clearTimeout(timers[i]);
        }

        var index = parseInt(view.substring(0, view.indexOf("/") + 1).replace("m", ""));
        $('#breadcrumb').html('<h4 class="animated fadeInRight">'+main.getActualBreadCrumb()+'</h4>');

        $('#pagination').html(main.getActualPagination());

        //username
        $(".x-username").html(xkorm.getUsername());

        var fnName = view.substring(view.indexOf("/") + 1, view.length);

        main.stopMedia();

        if($(".xk_video").length > 0)
            main.videos();

        if (_self[fnName] != undefined) {
            _self[fnName]();
        }
    };

    this.getScoreToPass = function () {
        return scoreToPass;
    };

    function scrollToDiv() {
        $('html, body').animate({
            scrollTop: $("#final_feed").offset().top
        }, 2000);
    }

    function showAll() {
        $(".dk-icon-menu").show();
        $(".dk-breadcrumb").show();
        $(".dk-progress").show();
        $("#progressBar").show();
        $(".x-previous").hide();
        $(".x-next").hide();
    }

    // AUDIO LOOP
    function playInOut(id) {
        $(id).get(0).play();
    }

    //SPECIFIC LOGIC FOR THIS COURSE SLIDES
    // Module 00
    this.m0_01 = function () {
        $(".dk-icon-menu").hide();
        $(".dk-breadcrumb").hide();
        $(".dk-progress").hide();
        $("#progressBar").hide();
        $(".x-next").hide();
        playInOut('#intro');
    };

    this.m0_02 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m1_01 = function () {
        showAll();
        $(".x-next").hide();

        var t01 = setTimeout(function () {
            main.stopMedia();
            main.audioPlay('#aud101a');
        }, 1 * 1000);
        timers.push(t01);

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#button_sound');
                var t02 = setTimeout(function () {
                    main.audioPlay('#aud101b');
                }, 1 * 1000);
                timers.push(t02);
            } else if ($tag == "clk02") {
                $(".sc02").removeClass('disFlex').hide();
                $(".sc03").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_01_a = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m1_02 = function () {
        showAll();
        $(".x-next").hide();
        activities.toolTipBig();
    }

    this.m1_03 = function () {
        showAll();
        $(".x-next").hide();
        activities.xDragFeedback();
    }

    this.m1_04 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m1_05 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m1_05b = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m1_05c = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m1_05d = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m1_06 = function () {
        showAll();
        $(".x-next").hide();
    }

    // Module 02
    this.m2_01 = function () {
        $(".dk-icon-menu").hide();
        $(".dk-breadcrumb").hide();
        $(".dk-progress").hide();
        $("#progressBar").hide();
        $(".x-next").hide();
        playInOut('#intro');
    };

    this.m2_02 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_03 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_04 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_05 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_06 = function () {
        showAll();
        $(".x-next").hide();

        var t = setTimeout(function () {
            ($('#final_feed')).show(2000, function () {
                main.audioPlay("#feed_sound");
            });
        }, 16 * 1000);
        timers.push(t);
    }

    this.m2_07 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_07_a = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_07_b = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_07_c = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_07_d = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_07_e = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_08 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_09 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_10 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_11 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_12 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_13 = function () {
        showAll();
        main.stopMedia();
        $(".x-next").hide();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-13") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_13a = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_13b = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_13c = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_13d = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m2_14 = function () {
        showAll();
        $(".x-next").hide();
    }

    // Module 05
    this.m5_01 = function () {
        $(".dk-icon-menu").hide();
        $(".dk-breadcrumb").hide();
        $(".dk-progress").hide();
        $("#progressBar").hide();
        $(".x-next").hide();
        playInOut('#intro');
    };

    this.m5_02 = function () {
        showAll();
        $(".x-next").hide(); 
    }

    this.m5_03 = function () {
        showAll();
        $(".x-next").hide();
    }

    this.m5_04 = function () {
        showAll();
        $(".x-next").hide();
        $("#dk-goals").hide();
    }
}