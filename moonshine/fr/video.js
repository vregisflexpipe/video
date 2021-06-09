var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/player_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player', {
                    height: '470',
                    width: '834',
                    videoId: 'h6OaT6qLVcE'
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
                    player.seekTo(78);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre3').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(137);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre4').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(207);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre5').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(317);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre6').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(350);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre6').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(411);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre6').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(798);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Titre6').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(946);
                    return false;
                });
            });