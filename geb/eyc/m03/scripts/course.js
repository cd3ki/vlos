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
        $("#progressBar").show();
    }

    // AUDIO LOOP
    function playInOut(id) {
        $(id).get(0).play();
    }

    // AUDIO LOOP
    function playActivity() {
        $('#audio_activity').get(0).play();
        $('#audio_activity').get(0).volume = 0.2;
    }

    function stopActivity() {
        $('#audio_activity').get(0).pause();
    }

    // HOLOGRAM
    function loadSVG() {
        $('.x-svg-holo').load('images/props/holopad.svg');

        var $xsvg = $(".x-svg").data("xsvg");
        $('.x-svg').load('images/' + $xsvg + '.svg', function(data){
            // M302
            $('.x-m302').click(function(){
                var content = $(this).data('content');
                var $next = $(this).data('next');

                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                       console.log('Se presentó un error');
                   }
               });
                
                $(this).attr("class", "x-m302 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();
                    $next = "00";

                    if ($('.x-m302').length == $('.viewed').length) {
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

            // M304
            $('.x-m304').click(function(){
                var content = $(this).data('content');
                var $next = $(this).data('next');

                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                       console.log('Se presentó un error');
                   }
               });
                
                $(this).attr("class", "x-m304 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();
                    $next = "00";

                    if ($('.x-m304').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc01").show();
                            $(".speech01").hide();
                            $(".speech02").hide();
                            $(".speech03").show();
                        }, 1 * 1000);
                        timers.push(t);
                    }
                });
                //
            });

            // m305
            $('.x-m305').click(function(){
                var $content305 = $(this).data('content');
                var $panel = $('.x-click_panel');
                var $next = $(this).data('next');

                $(this).attr("class", "x-m305 viewed");
                main.stopMedia();
                main.audioPlay("#button_sound");

                $panel.html($('#' + $content305).html());
                $panel.fadeIn(function(){
                    var t = setTimeout(function () {
                        $('#btn-'+$next).fadeIn();

                        if ($('.x-m305').length == $('.viewed').length) {
                            var tempo = setTimeout(function () {
                                $(".sc01").show();
                                $(".speech01").hide();
                                $(".speech02").hide();
                                $(".speech03").show();
                            }, 5 * 1000);
                            timers.push(tempo);
                        }

                    }, 1 * 1000);
                    timers.push(t);
                });
            });

            // M401
            $('.x-m401').click(function(){
                var content = $(this).data('content');
                var $next = $(this).data('next');

                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                       console.log('Se presentó un error');
                   }
               });
                
                $(this).attr("class", "x-m401 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();
                    $next = "00";

                    if ($('.x-m401').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc02").show();
                            $(".speech04").show();
                        }, 1 * 1000);
                        timers.push(t);
                    }
                });
            });

            // M402
            $('.x-m402').click(function(){
                var content = $(this).data('content');
                var $next = $(this).data('next');

                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                       console.log('Se presentó un error');
                   }
               });
                
                $(this).attr("class", "x-m402 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();
                    $next = "00";

                    if ($('.x-m402').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc01").show();
                            $(".speech01").hide();
                            $(".speech02").hide();
                            $(".speech03").show();
                        }, 1 * 1000);
                        timers.push(t);
                    }
                });
            });

            // m403
            $('.x-m403').click(function(){
                var $content403 = $(this).data('content');
                var $panel = $('.x-click_panel');
                var $next = $(this).data('next');

                $(this).attr("class", "x-m403 viewed");
                main.stopMedia();
                main.audioPlay("#button_sound");

                $panel.html($('#' + $content403).html());
                $panel.fadeIn(function(){
                    var t = setTimeout(function () {
                        $('#btn-'+$next).fadeIn();

                        if ($('.x-m403').length == $('.viewed').length) {
                            var tempo = setTimeout(function () {
                                $(".sc01").show();
                                $(".speech01").hide();
                                $(".speech02").show();
                            }, 3 * 1000);
                            timers.push(tempo);
                        }

                    }, 1 * 1000);
                    timers.push(t);
                });
            });

            // M405
            $('.x-m405').click(function(){
                var content = $(this).data('content');
                var $next = $(this).data('next');

                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                       console.log('Se presentó un error');
                   }
               });
                
                $(this).attr("class", "x-m405 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();
                    $next = "00";

                    if ($('.x-m405').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc01").show();
                            $(".speech01").hide();
                            $(".speech02").hide();
                            $(".speech03").hide();
                            $(".speech04").show();
                            $(".perso01").addClass('toukai');
                            $(".perso02").show();
                        }, 1 * 1000);
                        timers.push(t);
                    }
                });
            });

            // M502
            $('.x-m502').click(function(){
                var content = $(this).data('content');
                var $next = $(this).data('next');

                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                       console.log('Se presentó un error');
                   }
               });
                
                $(this).attr("class", "x-m502 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();
                    $next = "00";

                    if ($('.x-m502').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc01").show();
                            $(".speech01").hide();
                            $(".speech02").hide();
                            $(".speech03").show();
                            $(".perso01").addClass('toukai');
                        }, 1 * 1000);
                        timers.push(t);
                    }
                });
            });

            // M503
            $('.x-m503').click(function(){
                var content = $(this).data('content');
                var $next = $(this).data('next');

                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                       console.log('Se presentó un error');
                   }
               });
                
                $(this).attr("class", "x-m503 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();
                    $('.position').hide();
                    $('#position'+$next).fadeIn();

                    if ($('.x-m503').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc01").show();
                            $(".speech01").hide();
                            $(".speech02").show();
                        }, 3 * 1000);
                        timers.push(t);
                    }
                });
            });

            // M507
            $('.x-m507').click(function(){
                var content = $(this).data('content');
                var $next = $(this).data('next');

                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                       console.log('Se presentó un error');
                   }
               });
                
                $(this).attr("class", "x-m507 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();
                    $next = "00";

                    if ($('.x-m507').length == $('.viewed').length) {
                        var t = setTimeout(function () {
                            $(".sc01").show();
                            $(".speech01").hide();
                            $(".speech02").show();
                        }, 2 * 1000);
                        timers.push(t);
                    }
                });
            });
            // --
        });
    }

    //SPECIFIC LOGIC FOR THIS COURSE SLIDES
    // Module 01
    this.m3_01 = function () {
        $(".dk-icon-menu").hide();
        $("#progressBar").hide();
        loadSVG();
        main.stopMedia();

        var t = setTimeout(function () {
            $('#audio_intro').get(0).play();
        }, 3 * 1000);
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
                
                var t = setTimeout(function () {
                    location.href = "#m3_02";
                }, 8 * 1000);
                timers.push(t);
            }

        };

        $(document).on("click", ".x-goTag", this.goTag);
    };

    this.m3_02 = function () {
        showAll();
        loadSVG();
        $(".speech02").hide();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-302") {
                $(".sc01").hide();
                $(".m302-trituradoras #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m3_03 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-303") {
                $(".sc01").hide();
                $(".speech01").hide();
                $(".speech02").removeClass('toukai');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m3_04 = function () {
        showAll();
        loadSVG();
        $(".speech02").hide();
        $(".speech03").hide();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-304") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-304") {
                $(".sc01").hide();
                $(".m304-yates #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m3_05 = function () {
        showAll();
        loadSVG();
        $(".speech02").hide();
        $(".speech03").hide();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-305") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-305") {
                $(".sc01").hide();
                $(".m305-lockers #btn-01").show();
                main.audioPlay('#button_sound');
                $next = "00";
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m3_06 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-306") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
                playActivity();
            } else if ($tag == "clk02-306") {
                $(".sc02").hide();
                $(".sc03").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m3_07 = function () {
        showAll();
        playActivity();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-307") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m3_08 = function () {
        showAll();
    }

    // M04
    this.m4_01 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-401") {
                $(".speech01").hide();
                $(".speech02").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-401") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk03-401") {
                $(".sc02").hide();
                $(".speech03").hide();
                $(".m401-carpetas #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }
    
    this.m4_02 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-402") {
                $(".speech01").hide();
                $(".speech02").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-402") {
                $(".sc01").hide();
                $(".m402-cards #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m4_03 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-403") {
                $(".sc01").hide();
                $(".m403-cameras #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m4_04 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-404") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
                playActivity();
            } else if ($tag == "clk02-404") {
                $(".sc02").hide();
                $(".sc03").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m4_05 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-405") {
                $(".speech01").hide();
                $(".speech02").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-405") {
                $(".speech02").hide();
                $(".speech03").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk03-405") {
                $(".sc01").hide();
                $(".m405-tabs #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m4_06 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-406") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
                playActivity();
            } else if ($tag == "clk02-406") {
                $(".sc02").hide();
                $(".sc03").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m4_07 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-407") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    // M5
    this.m5_01 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-501") {
                $(".speech01").hide();
                $(".speech02").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m5_02 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-502") {
                $(".speech01").hide();
                $(".speech02").addClass('disFlex');
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-502") {
                $(".sc01").hide();
                $(".m502-autoridades #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m5_03 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-503") {
                $(".sc01").hide();
                $(".m503-maletin #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m5_04 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-504") {
                $(".sc02").addClass('disFlex');
                $(".speech01").hide();
                main.audioPlay('#button_sound');
                playActivity();
            } else if ($tag == "clk02-504") {
                $(".subsc02").hide();
                $(".subsc03").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m5_06 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-506") {
                $(".speech01").hide();
                $(".speech02").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m5_07 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-507") {
                $(".sc01").hide();
                $(".m507-agentes #btn-01").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m5_08 = function () {
        showAll();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-508") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }
}