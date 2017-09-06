$( window ).load(function(){
    var hoverConfig = {
            over: function(){
                clearFirstLevelTaxTopMenu();
                var div = $(this).find('div.headingTopMenu');
                $(div).css('color', 'white');
                $(this).css({'background-color':'#006218','box-shadow':'#777 0 0 5px'});

                // attach menu
                var taxId = $(this).attr('id').split('_')[1];
                var tax = $('#' + taxId + '_TopMenu');
                if ($(tax).length > 0){
                    // add arrow
                    $(this).append('<div class="arrowTopMenu headingTopMenu">&rsaquo;</div>');
                    var arrow = $(this).find('.arrowTopMenu')[0];
                    $(arrow).css('height', $(div).height());
                    $(arrow).css({'top': 0, 'left': $(div).position().left + $(div).width() -1}); // magic 1px for Firefox
                    // show menu
                    $(this).css({'border-radius':'10px 0px 0px 10px'});
                    var leftIndDIV = $(div.parent()).outerWidth() + $(div.parent()).position().left + parseInt($(div.parent()).css('margin-left').replace('px', ''));
                    $(tax).css({'top': $(div.parent()).position().top, 'left': leftIndDIV}).show('slide', {direction: "left"}, 200);

                    // check if menu contains only one item. If contains, enlarge the height of that item.
                    if ($(tax).children('div').length == 1){
                        var item = $(tax).children('div')[0];
                        if ($(item).height() < ($(this).height() + 5)){
                            $(item).css({'height':$(this).height() + 5});
                        }
                    }
                }
            },
            timeout: 500, // number = milliseconds delay before onMouseOut    
            out: function(){
                var firstLvlTaxonomy = $(this);
                var taxId = $(firstLvlTaxonomy).attr('id').split('_')[1];
                var tax = $('#' + taxId);

                setTimeout(function(){
                    if (menuCanBeHide){
                        $(firstLvlTaxonomy).find('.arrowTopMenu').remove();
                        $('#' + taxId + '_TopMenu').css({'display':'none', 'top':'0', 'left':'0'});
                        $(tax).css({'display':'none', 'top':'0', 'left':'0'});
                        $(firstLvlTaxonomy).removeAttr('style').children('div').removeAttr('style');
                    }
                }, 1);
            }
    };
    
    // HOVER variant
    menuCanBeHide = true;
    $('.firstLevelTaxTopMenu').hoverIntent(hoverConfig);
    
    $('.floatingMenuTopMenu').hover(function(){
        menuCanBeHide = false;
    },function(){
        clearFirstLevelTaxTopMenu();
        menuCanBeHide = true;
    });
    
    
});

$(window).resize(function(){
    $('.topBottomItemTopMenu').css({'height':''});
});

function clearFirstLevelTaxTopMenu(){
    $('.arrowTopMenu').remove();
    $('.floatingMenuTopMenu').css({'display':'none', 'top':'0', 'left':'0'});
    $('.firstLevelTaxTopMenu').removeAttr('style').children('div').removeAttr('style');
}