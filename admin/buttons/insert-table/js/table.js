(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                table: {
                    identifier: 'table',
                    title: 'Table',
                    label: '<i class="fa fa-fw fa-table"></i>',
                    modes: ['gfm', 'markdown'],
                    action: function(_ref) {
                        var codemirror = _ref.codemirror, button = _ref.button, textarea = _ref.textarea, $allSquares;

                        button.on('click.editor.table', function() {
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

                            var $grid = button.append($(grid));

                            $allSquares = $('.square');

                        });

                        button.on('mouseover', '.square', function () {
                            var $this = $(this);
                            var col = $this.index() + 1;
                            var row = $this.parent().index() + 1;
                            $allSquares.removeClass('highlight');
                            $('.row:nth-child(-n+'+row+') .square:nth-child(-n+'+col+')')
                                .addClass('highlight');
                        });

                        button.on('click', '.square', function () {
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
                            Instance.buttonStrategies.replaceLine({ token: '$1', template: text, codemirror: codemirror });
                            button.trigger('click.editor.table');
                            codemirror.focus();
                        });
                    }
                }
            });
        });
    });

})(jQuery);
