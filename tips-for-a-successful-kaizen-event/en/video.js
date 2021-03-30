var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/player_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player', {
                    height: '470',
                    width: '834',
                    videoId: 'XvH3DOazeNQ&t'
                });
            }
            $(window).load(function(){
                jQuery('#Titre2').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(52);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre3').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(157);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre4').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(265);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre5').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(375);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre6').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(624);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre7').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(691);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre8').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(787);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre9').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(999);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre10').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(999);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre11').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(999);
                    return false;
                });
            });