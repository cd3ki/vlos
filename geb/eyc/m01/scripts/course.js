//Specific course logic and config
function Course(jsonCourse) {
    var _self = this;

    //Minimum passing score
    var scoreToPass = 0;

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

        // $('#breadcrumb').html('<h4 class="animated fadeInRight">'+main.getActualBreadCrumb()+'</h4>');

        $('#pagination').html(main.getActualPagination());
        
        $('.x-mission').text(main.getGoals());

        //username
        $(".x-username").html(xkorm.getUsername());

        var fnName = view.substring(view.indexOf("/") + 1, view.length);

        main.stopMedia();

        if($(".xk_video").length > 0) {
            main.videos();
        }

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
    }

    // AUDIO LOOP
    function playInOut(id) {
        $(id).get(0).play();
    }

    // AUDIO LOOP
    function playActivity() {
        $('#audio_activity').get(0).play();
        $('#audio_activity').get(0).volume = 0.45;
    }

    function stopActivity() {
        $('#audio_activity').get(0).pause();
    }

    // HOLOGRAM
    function loadSVG() {
        $('.x-svg-holo').load('images/props/holopad.svg');

        var $xsvg = $(".x-svg").data("xsvg");
        $('.x-svg').load('images/' + $xsvg + '.svg', function(data){
            // M105
            $('#plano-btn').hide();

            $('#plano-btn').click(function(){
                location.href = "#m1_06";
                main.stopMedia();
                main.audioPlay("#click_sound");
            });

            // M106
            $('#btn-postit, #but-axis01, #but-axis02, #but-axis03, #but-axis04, #but-axis05, #but-axis06').hide();
            $('.x-m106').click(function(){
                var content = $(this).data('content');
                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                     console.log('Se presentó un error');
                    }
                });
                
                $(this).attr("class", "x-m106 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    if ($('.x-m106').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc01").show();
                            $(".speech01").hide();
                            $(".speech02").show();
                        }, 1 * 1000);
                        timers.push(t);
                    }
                });
                //
            });

            // M107
            $('#sd-btn').hide();

            $('#sd-btn').click(function(){
                location.href = "#m1_08";
                main.stopMedia();
                main.audioPlay("#click_sound");
            });

            $('#pic-btn').click(function(){
                $(".x-emergente").load("contents/m1/m1_07a.html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                     console.log('Se presentó un error');
                    }
                });
                
                $(".sc01").hide();
                $(this).attr("class", "x-m107 viewed");
                $('#pic-btn, #pic').hide();

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                        $(".sc02").addClass('disFlex');
                        $('#sd-btn').show();
                });
                //
            });

            // m1_08
            $('#btn-section').click(function(){
                $(this).hide();
                $(".sc02").hide();
                $(".sc03").addClass('disFlex');
            });

            // m1_10
            $('.x-m110').click(function(){
                var content = $(this).data('content');
                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                     console.log('Se presentó un error');
                    }
                });
                
                $(this).attr("class", "x-m110 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    if ($('.x-m110').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc01").show();
                            $(".speech01").hide();
                            $(".speech02").show();
                        }, 1 * 1000);
                        timers.push(t);
                    }
                });
                //
            });

            // m1_10NEW
            $('.x-m110new').click(function(){
                var content = $(this).data('content');
                var $panel = $('.x-click_panel');
                var $addBtn = $(this).data('btn');
                var $removeBtn = $(this).data('remove');

                $(this).attr("class", "x-m110new viewed");
                $('#' + $removeBtn).attr("class", "viewed");
                main.stopMedia();
                main.audioPlay("#button_sound");

                $panel.html($('#' + content).html());
                $panel.fadeIn(function(){
                    var t = setTimeout(function () {
                        $('#' + $addBtn + '-bright').fadeIn();
                        $('#' + $addBtn).fadeIn();
                    }, 2 * 1000);
                    timers.push(t);
                });
            });
            // --
        });
    }

    //SPECIFIC LOGIC FOR THIS COURSE SLIDES
    // Module 01
    this.m1_01 = function () {
        $(".dk-icon-menu").hide();
        $(".dk-breadcrumb").hide();
        $("#progressBar").hide()
        loadSVG();
        main.stopMedia();

        var t = setTimeout(function () {
            $('#audio_intro').get(0).play();
        }, 4 * 1000);
        timers.push(t);
        

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-i") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#voice_intro_01');
            } else if ($tag == "clk02-i") {
                $(".sc02").hide();
                $(".sc03").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#voice_intro_02');
            } else if ($tag == "clk03-i") {
                $(".sc03").hide();
                $(".sc04").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#voice_intro_03');
            } else if ($tag == "clk04-i") {
                $(".sc04").hide();
                $(".sc05").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#voice_intro_04');
            } else if ($tag == "clk05-i") {
                $(".sc05").hide();
                $(".sc06").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#voice_intro_05');
            } else if ($tag == "clk06-i") {
                $(".sc06").hide();
                $(".sc07").addClass('disFlex');
                main.stopMedia();
                main.audioPlay('#voice_intro_06');
                
                var t = setTimeout(function () {
                    location.href = "#m1_02";
                }, 8 * 1000);
                timers.push(t);
            }

        };

        $(document).on("click", ".x-goTag", this.goTag);
    };

    this.m1_02 = function () {
        showAll();
        loadSVG();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_03 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02") {
                $(".sc02").hide();
                $(".sc03").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk03") {
                $(".sc03").hide();
                $(".sc04").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk04") {
                $(".sc04").hide();
                $(".sc05").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk05") {
                $(".sc05").hide();
                $(".sc06").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk06") {
                $(".sc06").hide();
                $(".sc07").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk07") {
                $(".sc07").hide();
                $(".sc08").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_04 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-act") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
                main.stopMedia();
                playActivity();
            } else if ($tag == "clk02") {
                $(".sc02").hide();
                $(".sc03").addClass('disFlex');
                main.audioPlay('#button_sound');
                stopActivity();
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);

        // ACT D&D
        $('.x-drag').draggable({
            revert: true
        });
        $('.x-drop').droppable({
            accept: '.x-drag',
            drop: droppedMultiplePop,
            hoverClass: "x-drophover",
            tolerance: 'pointer'
        });

        var who = 1;
        function droppedMultiplePop(event, ui) {
            var $source = $(ui.draggable);
            var $target = $(this);

            if ($source.data('option') == $target.data('option')) {
                // var feed = $(ui.draggable).data("option");
                who_appears = who++;
                $target.append($(ui.draggable));
                $(ui.draggable).addClass('x-related');
                $("#x-feedback_panel").html($("#feedback_" + who_appears).html());
                $("#x-feedback_panel").fadeIn();

                $(ui.draggable).draggable('disable');

                console.log(who_appears);

                if ($('.x-drag.x-nice').length == $('.x-related').length) {
                    $('.btnShow').show();
                }
            }
        }
    }

    this.m1_05 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');

                $(".x-svg").removeClass('w70').addClass('w90');
                $('#plano-btn').show();
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_06 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');

                $('#btn-postit, #but-axis01, #but-axis02, #but-axis03, #but-axis04, #but-axis05, #but-axis06').show();
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_07 = function () {
        showAll();
        loadSVG();
    }

    this.m1_08 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                $(".sc02").show();
                main.audioPlay('#button_sound');
            } else if ($tag == "clk03") {
                $(".scvBeam").hide();
                $(".scError").addClass('disFlex');
                main.audioPlay('#button_sound');

                var t = setTimeout(function () {
                    $(".sc01").fadeIn();
                    $(".speech01").hide();
                    $(".speech02").addClass('disFlex');
                }, 3 * 1000);
                timers.push(t);
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_09 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-109") {
                $(".sc01").hide();
                $(".sc02").show();
                main.audioPlay('#button_sound');
                main.stopMedia();
                playActivity();
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);

        // ACT
        activities.xDragPuzzle();
    }

    this.m1_10 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');

                $('#btn-emilia, #btn-sebas').show();
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_10new = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02") {
                $(".sc02").hide();
                $(".sc03").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_11 = function () {
        showAll();
        loadSVG();
    }

    this.m1_12 = function () {
        showAll();
        loadSVG();
    }

    this.m1_13 = function () {
        showAll();
    }

    this.m1_14 = function () {
        showAll();
        loadSVG();
    }

    this.m1_15 = function () {
        showAll();
    }

    this.m1_16 = function () {
        showAll();
    }

    this.m1_17 = function () {
        showAll();
    }

    this.m1_18 = function () {
        showAll();
    }

    this.m1_19 = function () {
        showAll();
        loadSVG();
    }

    this.m1_20 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-sopa") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');
                main.stopMedia();
                playActivity();
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m1_21 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }
}