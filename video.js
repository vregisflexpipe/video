var tag = document.createElement('script');
            tag.src = "http://www.youtube.com/player_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player', {
                    height: '390',
                    width: '640',
                    videoId: 'YDAXwJrbHzM'
                });
            }
            $(window).load(function(){
                jQuery('#Titre1').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(25);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre2').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(60);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre3').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(90);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre4').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(120);
                    return false;
                });
            });
