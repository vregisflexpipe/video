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
                jQuery('#Introduction').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(00);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Dansquelcontexteutiliserlefluxcontinu').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(166);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Commentcréerunfluxcontinu').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(294);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Quelsgaspillagesbénéficientdufluxcontinu').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(353);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Commentfaireunebonnetransitionverslefluxcontinu').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(534);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Commentcalculerletempstakt').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(656);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Commenttrouverlameilleureséquence').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(738);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Limportancedusystèmedegestionquotidienne').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(916);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Commentmobiliserlesemployés').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1014);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Quesignifieunecelluledetravaildanslefluxcontinu').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1273);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Commentlamiseenplacedecellulesaugmentelaqualité').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1469);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Pourquoiadopterdesstructuresflexibles').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1707);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Commentdesignerlespostes').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(1838);
                    return false;
                });
            });
            $(window).load(function(){
                jQuery('#Utiliserlapolyvalencedesemployés').click(function(){
                    //console.log('test');
                    console.log(player);
                    player.seekTo(2221);
                    return false;
                });
            });