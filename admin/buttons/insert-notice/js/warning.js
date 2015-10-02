(function(){

    if (typeof window.customToolbarElements === 'undefined') { window.customToolbarElements = []; }
    window.customToolbarElements.push({
        identifier: 'notice-warning',
        button: {
            title  : 'Warning Notice',
            label  : '<i class="fa fa-fw fa-exclamation-circle notice-warning"></i>',
        },
        processAction: function(editor) {
            var text = '>>>> ';

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
    });

})();
