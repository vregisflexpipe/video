var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/player_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player', {
                    height: '470',
                    width: '834',
                    videoId: 'p_OTgcG8T28'
                });
            }
            $(window).load(function(){
                jQuery('#Introduction').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(00);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Inwhichcontextshouldweusecontinuousflow').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(120);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Howtoimplementacontinuousflow').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(187);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Whatworkelementsshouldweconsider').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(355);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Howtomakeagoodtransitiontocontinuousflow').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(449);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Whatdoweneedtothinkaboutwhiledesigningacell').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(533);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Howtocalculatethetakttime').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(624);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Whenisitusefultoaddautomationintheprocess').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(705);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Whatarethepracticalstepsofacontinuousflowintegration').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(765);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Whataretherequirementsandpitfallstotakeintoconsideration').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1010);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Howtoincludeergonomicsintheprocess').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1141);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Howtomeasurethesuccessofacontinuousflowimplementation').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1190);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Howcontinuousflowimprovesquality').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1367);
                    return false;
                });
            });
           