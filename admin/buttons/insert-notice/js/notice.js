(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                notices: {
                    identifier: 'notices',
                    title: 'Notices',
                    label: '<i class="fa fa-fw fa-exclamation-circle"></i>',
                    modes: ['gfm', 'markdown'],
                    children: [
                        {
                            'notice-info': {
                                identifier: 'notice-info',
                                title: 'Info Notice',
                                label: '<i class="fa fa-fw fa-exclamation-circle notice-info"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.notice-info', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '! $1', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'notice-warning': {
                                identifier: 'notice-warning',
                                title: 'Warning Notice',
                                label: '<i class="fa fa-fw fa-exclamation-circle notice-warning"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.notice-warning', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '!! $1', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'notice-note': {
                                identifier: 'notice-note',
                                title: 'Note Notice',
                                label: '<i class="fa fa-fw fa-exclamation-circle notice-note"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.notice-note', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '!!! $1', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'notice-tip': {
                                identifier: 'notice-tip',
                                title: 'Tip Notice',
                                label: '<i class="fa fa-fw fa-exclamation-circle notice-tip"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.notice-tip', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '!!!! $1', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        }
                    ]
                }
            });
        });
    });
})(jQuery);

