(function(){

    if (typeof window.customToolbarElements === 'undefined') { window.customToolbarElements = []; }
    window.customToolbarElements.push({
        identifier: 'table',
        button: {
            title  : 'Table',
            label  : '<i class="fa fa-fw fa-table"></i>',
            class  : 'grid-chooser'
        },
        processAction: function(editor) {
            if ($('#grid-chooser').is(':visible')) {
                $('#grid-chooser').remove();
                return;
            }

            // Credit: http://jsfiddle.net/tnn3qgvj/8/
            var rows = 5;
            var cols = 5;

            var grid = '<div class="grid" id="grid-chooser">';
            for (var i = 0; i < rows; i++) {
                grid += '<div class="row">';
                for (var c = 0; c < cols; c++) {
                    grid += '<div class="square"><div class="inner"></div></div>';
                }
                grid += '</div>';
            }
            grid += '</div>';

            var $gridChooser = $('.grid-chooser');
            var $grid = $(grid)
                .insertAfter($gridChooser);


            var $allSquares = $('.square');

            $grid.on('mouseover', '.square', function () {
                var $this = $(this);
                var col = $this.index() + 1;
                var row = $this.parent().index() + 1;
                $allSquares.removeClass('highlight');
                $('.row:nth-child(-n+'+row+') .square:nth-child(-n+'+col+')')
                    .addClass('highlight');
            });

            $grid.on('click', '.square', function () {
                var $this = $(this);
                var cols = $this.index() + 1;
                var rows = $this.parent().index() + 1;
                $('#grid-chooser').remove();

                //Generate the markdown text to insert
                var text = '';

                var i = 0;
                var j = 0;

                while (i < cols) {
                    text += '|  Column ' + (i + 1) + ' Title  ';
                    i++;
                }

                text +=  '|' + '\n';

                i = 0;
                while (i < cols) {
                    text += '|  :-----          ';
                    i++;
                }

                text +=  '|' + '\n';

                i = 0;
                while (i < rows) {
                    j = 0;
                    while (j < cols) {
                        text += '|  Column ' + (j + 1) + ' Item ' + (i + 1) + ' ';
                        j++;
                    }
                    i++;

                    text +=  '|' + '\n';
                }

                //Add text to the editor
                var cm      = editor.editor,
                    pos     = cm.getDoc().getCursor(true),
                    posend  = cm.getDoc().getCursor(false);

                for (var i=pos.line; i<(posend.line+1);i++) {
                    cm.replaceRange(text+cm.getLine(i), { line: i, ch: 0 }, { line: i, ch: cm.getLine(i).length });
                }

                cm.setCursor({ line: posend.line, ch: cm.getLine(posend.line).length });
                cm.focus();
            });
        }
    });

})();
