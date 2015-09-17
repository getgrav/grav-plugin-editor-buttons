(function(){

    if (typeof window.customToolbarElements === 'undefined') { window.customToolbarElements = []; }
    window.customToolbarElements.push({
        identifier: 'youtube-video',
        button: {
            title  : 'YouTube Video',
            label  : '<i class="fa fa-fw fa-youtube"></i>',
        },
        processAction: function(editor) {
            var videoURL = prompt("Enter the Video ID. E.g. to embed the video at `https://www.youtube.com/watch?v=Q1M5f6mjsac`, enter `Q1M5f6mjsac`");

            if (videoURL) {
                var text = '<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + videoURL + '?autoplay=1" frameborder="0"></iframe>';

                //Add text to the editor
                var cm      = editor.editor,
                    pos     = cm.getDoc().getCursor(true),
                    posend  = cm.getDoc().getCursor(false);

                for (var i=pos.line; i<(posend.line+1);i++) {
                    cm.replaceRange(text+cm.getLine(i), { line: i, ch: 0 }, { line: i, ch: cm.getLine(i).length });
                }

                cm.setCursor({ line: posend.line, ch: cm.getLine(posend.line).length });
                cm.focus();
            }
        }
    });

})();
