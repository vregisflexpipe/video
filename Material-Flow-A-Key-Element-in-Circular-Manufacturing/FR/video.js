var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/player_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player', {
                    height: '470',
                    width: '834',
                    videoId: 'b1QspmtIFTI'
                });
            }
            $(window).load(function(){
                jQuery('#Titre1').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(43);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre2').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(188);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre3').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(336);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre4').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(422);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre5').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(522);
                    return false;
                });
            });