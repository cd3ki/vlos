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
        $('#audio_activity').get(0).volume = 0.3;
    }

    function stopActivity() {
        $('#audio_activity').get(0).pause();
    }

    // HOLOGRAM
    function loadSVG() {
        $('.x-svg-holo').load('images/props/holopad.svg');

        var $xsvg = $(".x-svg").data("xsvg");
        $('.x-svg').load('images/' + $xsvg + '.svg', function(data){
            // M204
            $('.x-m204').click(function(){
                var content = $(this).data('content');
                var $img = $(this).data('img');
                $(".x-emergente").load("contents/" + content + ".html", function(response, status){
                    if (status === 'success') {
                        $('.x-emergente').html(response);
                        $('.x-on_top_content').fadeIn();
                    }
                    else {
                     console.log('Se presentó un error');
                    }
                });
                
                $(this).attr("class", "x-m204 viewed toukai");
                $('#cable0'+$img).show();

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    if ($('.x-m204').length == $('.viewed').length) {
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

            // M205
            $('#btn-eduardo').click(function(){
                location.href = "#m2_06";
                main.stopMedia();
                main.audioPlay("#click_sound");
            });

            // M209
            $('#btn-ester').click(function(){
                location.href = "#m2_10";
                main.stopMedia();
                main.audioPlay("#click_sound");
            });

            // M213
            $('#btn-karen').click(function(){
                location.href = "#m2_14";
                main.stopMedia();
                main.audioPlay("#click_sound");
            });

            // M217
            $('#btn-michael').click(function(){
                location.href = "#m2_18";
                main.stopMedia();
                main.audioPlay("#click_sound");
            });

            // M221
            $('#btn-gustavo').click(function(){
                location.href = "#m2_22";
                main.stopMedia();
                main.audioPlay("#click_sound");
            });

            // M225
            $('#btn-daniela').click(function(){
                location.href = "#m2_26";
                main.stopMedia();
                main.audioPlay("#click_sound");
            });

            // M230
            $('.x-m230').click(function(){
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
                
                $(this).attr("class", "x-m230 viewed");

                main.stopMedia();
                main.audioPlay("#correct_sound");

                // CLOSEPOPUP
                $(document).on('click', '.x-on_top_close', function () {
                    $('#btn-'+$next).fadeIn();

                    if ($('.x-m230').length == $('.viewed').length) {
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

            
            // --
        });
    }

    //SPECIFIC LOGIC FOR THIS COURSE SLIDES
    // Module 01
    this.m2_01 = function () {
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
                
                var t = setTimeout(function () {
                    location.href = "#m2_02";
                }, 8 * 1000);
                timers.push(t);
            }

        };

        $(document).on("click", ".x-goTag", this.goTag);
    };

    this.m2_02 = function () {
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
                location.href = "#m2_03";
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_03 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-203") {
                $(".sc01").hide();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
                main.stopMedia();
                playActivity();

                var t = setTimeout(function () {
                    $('.m203-boveda #bipbip').fadeOut();
                }, .5 * 1000);
                timers.push(t);
            } else if ($tag == "clk02") {
                $(".sc03").fadeOut();
                $(".sc04").fadeIn().addClass('disFlex');
                main.audioPlay('#button_sound');
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

        var $barra = 1;
        function droppedMultiplePop(event, ui) {
            var $source = $(ui.draggable);
            var $target = $(this);
            var $feed = $(ui.draggable).data("option");
            var $bar = $barra++;
            
            $target.append($(ui.draggable));

            $(ui.draggable).addClass('hiit').removeClass('animated'); 

            $("#x-feedback_panel").html($("#feedback_" + $feed).html());
            $("#x-feedback_panel").fadeIn();
            $('.m203-boveda #pasa0'+ $bar).fadeOut();

            $(ui.draggable).draggable('disable');

            if ($(".x-drag").length == $(".hiit").length) {
                $('.goBTN').fadeIn();
            }
        }
    }

    this.m2_04 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_05 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_06 = function () {
        showAll();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-sp") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-sp") {
                $(".speech02").hide();
                $(".speech03").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_07 = function () {
        showAll();
    }

    this.m2_08 = function () {
        showAll();
        playActivity();
    }

    this.m2_09 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_10 = function () {
        showAll();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-sp") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_11 = function () {
        showAll();
    }

    this.m2_12 = function () {
        showAll();
        main.stopMedia();
        playActivity();
    }

    this.m2_13 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_14 = function () {
        showAll();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-sp") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-sp") {
                $(".speech02").hide();
                $(".speech03").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_15 = function () {
        showAll();
    }

    this.m2_16 = function () {
        showAll();
        main.stopMedia();
        playActivity();
    }

    this.m2_17 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_18 = function () {
        showAll();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-sp") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_19 = function () {
        showAll();
    }

    this.m2_20 = function () {
        showAll();
        main.stopMedia();
        playActivity();
    }

    this.m2_21 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_22 = function () {
        showAll();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-sp") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-sp") {
                $(".speech02").hide();
                $(".speech03").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_23 = function () {
        showAll();
    }

    this.m2_24 = function () {
        showAll();
        main.stopMedia();
        playActivity();
    }

    this.m2_25 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_26 = function () {
        showAll();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-sp") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            } else if ($tag == "clk02-sp") {
                $(".speech02").hide();
                $(".speech03").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_27 = function () {
        showAll();
    }

    this.m2_28 = function () {
        showAll();
        main.stopMedia();
        playActivity();
    }

    this.m2_29 = function () {
        showAll();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01") {
                $(".sc01").hide();
                $(".img01").hide();
                $(".img02").fadeIn();
                $(".sc02").addClass('disFlex');
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_30 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-reg") {
                $(".sc01").hide();
                $(".m230-objetos #btn-camera").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_31 = function () {
        showAll();
        
        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-sp") {
                $(".speech01").hide();
                $(".speech02").show();
                main.audioPlay('#button_sound');
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);
    }

    this.m2_32 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-232") {
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

    this.m2_33 = function () {
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

    this.m2_34 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-234") {
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

    this.m2_35 = function () {
        showAll();
        loadSVG();

        this.goTag = function () {
            var $tag = $(this).data("tag");

            if ($tag == "clk01-235") {
                $(".sc01").hide();
                $(".sc02").show();
                main.audioPlay('#button_sound');
                main.stopMedia();
                playActivity();
            }
        };

        $(document).on("click", ".x-goTag", this.goTag);

        var vectorPistas = [
            {"ref": "1", "palabra": "COLABORADORES", "pista": "Pista 1. Todos los _______ del GEB se adhieren a los lineamientos del Código de Ética al firmar su contrato laboral. Anualmente se actualiza esta adhesión bajo la coordinación de la Dirección de Talento Humano."},
            {"ref": "2", "palabra": "CONTRATISTAS", "pista": "Pista 2. Exigimos de nuestros proveedores y _______ un comportamiento alineado con lo establecido en el Código de Ética."},
            {"ref": "3", "palabra": "FRAUDE", "pista": "Pista 3. En el GEB estamos comprometidos con una política de cero tolerancia frente al _______ y la corrupción."},
            {"ref": "4", "palabra": "CORREO", "pista": "Pista 4. Las herramientas para reportar cualquier conducta que vaya en contra de nuestros valores, usando el Canal Ético son: Línea telefónica, _______ Electrónico, Página Web."},
            {"ref": "5", "palabra": "CUMPLIMIENTO", "pista": "Pista 5. Algunas situaciones relacionadas con el conflicto de intereses u otros dilemas éticos no siempre son obvias o fáciles de solucionar. En caso de que se te presente alguna, consúltala cuanto antes con tu jefe inmediato o con el Director de _______."}
        ];

        vectorPistas.sort(function() {
            return Math.random() - .5
        });

        for (var i = 0; i < vectorPistas.length; i++) {
            $(".cnt-drag").append('<div class="drag" ' + i + ' data-ref="' + vectorPistas[i].ref + '">' + vectorPistas[i].palabra + '</div>');
        };

        var html = "";
        var texto = "";
        var correctas = 0;

        function cierra(name) {
            $("#pista").hide();
            $("#bien").hide();
            $("#mal").hide();
            $("#bienFinal").hide();
        }

        $(function() {
            $("#pista").hide();
            $("#bien").hide();
            $("#mal").hide();
            $("#bienFinal").hide();

            $('.drag').draggable({containment: ".conPregunta", cursor: "move", revert: "invalid", zIndex: 1000});

            $(".drop").droppable({
                accept: ".drag",
                activeClass: "dropp",
                drop: function(event, ui) {

                    $("#pista").hide();
                    $("#bien").hide();
                    $("#mal").hide();
                    $("#bienFinal").hide();

                    if (ui.draggable.attr('data-ref') == $(this).attr('data-ref')) {

                        html = "";
                        texto = ui.draggable.html();

                        for (var i = 0; i < texto.length; i++) {
                            html += "<span>" + texto[i] + "</span>";
                        }

                        $(this).append(html);
                        ui.draggable.remove();

                        correctas += 1;

                        var p = $(vectorPistas).filter(function(i, n) {
                            return n.ref == $(ui.draggable).attr("data-ref")
                        });

                        if (correctas < vectorPistas.length) {
                            $("#bien .textoRetro").text(p[0].correcta);
                            $("#bien").fadeTo("fast", 1);
                          } else {
                            var t = setTimeout(function () {
                                $(".sc01").fadeIn();
                                $(".speech01").hide();
                                $(".speech02").addClass('disFlex');
                                course.stopActivity();
                            }, 1 * 1000);
                            timers.push(t);
                          }
                      }
                      else {
                        var p = $(vectorPistas).filter(function(i, n) {
                            return n.ref == $(ui.draggable).attr("data-ref")
                        });
                        ui.draggable.draggable("option", "revert", true);
                            // $("#mal").fadeTo("fast", 1);
                       }
                   }
               });

            $(".pista").click(function() {
                $("#pista").hide();
                var _self = $(this);

                var p = $(vectorPistas).filter(function(i, n) {
                    return n.ref == _self.attr("data-pista")
                });

                $("#pista .textoRetro").text(p[0].pista);
                $("#pista").fadeTo("fast", 1);
            });

        });
    }

}