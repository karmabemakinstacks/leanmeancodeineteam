$(document).ready(function() {
    var plinks = [
        {
            name: 'Karma',
            plink: 'http://steamcommunity.com/id/Karmaaaaaaaa/'
        },
        {   
            name: 'Yahu',
            plink: 'http://steamcommunity.com/id/BigBoyAtt0/'
        },
		{
            name: 'Kabu',
            plink: 'http://steamcommunity.com/id/officialkabu/'
        },
        {
            name: 'Exit',
            plink: 'http://steamcommunity.com/id/exshit/'
        },
        {
            name: 'Remy',
            plink: 'http://steamcommunity.com/id/RemyBlaze/'
        },
        {
            name: 'Deeg',
            plink: 'http://steamcommunity.com/id/DeagleUK/'
        },
       

];

    for(var i in plinks) {
        var plink = plinks[i];

        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');

        var plink = $('#marquee').children('a').last();

        if(i != plinks.length - 1) {
            $('#marquee').append(' ');
        }
    }

    $('#marquee').marquee({
        duration: 15000,
        gap:8,
        delayBeforeStart: 2000,
        direction: 'left',
        duplicated: true
    });
});
