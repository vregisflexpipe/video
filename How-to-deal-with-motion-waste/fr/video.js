var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/player_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player', {
                    height: '470',
                    width: '834',
                    videoId: 'q-WNFtcQLek'
                });
            }
            $(window).load(function(){
                jQuery('#Titre1').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(00);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre2').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(49);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre3').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(214);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre4').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(402);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre5').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(586);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre6').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(679);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre7').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(871);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre8').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1098);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre9').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1243);
                    return false;
                });
            });