(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                shortcodes: {
                    identifier: 'shortcodes-textanim',
                    title: 'Shortcodes UI Text Animations',
                    label: '<i class="fa fa-fw fa-forward"></i>',
                    modes: ['gfm', 'markdown'],
                    children: [
                        {
                            'shortcodes-textanim-rotate1': {
                                identifier: 'shortcodes-textanim-rotate1',
                                title: 'Text Animation - Word based - Rotate 1',
                                label: '<i class="fa fa-fw fa-sync"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-rotate1', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1" animation="rotate-1" element="h2"]%WORDS% is my favorite food[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-loading-bar': {
                                identifier: 'shortcodes-textanim-loading-bar',
                                title: 'Text Animation - Word based - Loading Bar',
                                label: '<i class="fa fa-fw fa-minus"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-loading-bar', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1k" animation="loading-bar" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-slide': {
                                identifier: 'shortcodes-textanim-slide',
                                title: 'Text Animation - Word based - Slide',
                                label: '<i class="fa fa-fw fa-angle-up"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-slide', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1k" animation="slide" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-clip': {
                                identifier: 'shortcodes-textanim-clip',
                                title: 'Text Animation - Word based - Clip',
                                label: '<i class="fa fa-fw fa-i-cursor"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-clip', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1k" animation="clip" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-zoom': {
                                identifier: 'shortcodes-textanim-zoom',
                                title: 'Text Animation - Word based - Zoom',
                                label: '<i class="fa fa-fw fa-arrows-alt"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-zoom', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1k" animation="zoom" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-push': {
                                identifier: 'shortcodes-textanim-push',
                                title: 'Text Animation - Word based - Push',
                                label: '<i class="fa fa-fw fa-hand-paper-o"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-push', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1k" animation="push" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-letters-rotate-2': {
                                identifier: 'shortcodes-textanim-letters-rotate-2',
                                title: 'Text Animation - Letter based - Rotate 2',
                                label: '<i class="fa fa-fw fa-circle-o-notch"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-letters-rotate-2', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1k" animation="letters rotate-2" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-letters-rotate-3': {
                                identifier: 'shortcodes-textanim-letters-rotate-3',
                                title: 'Text Animation - Letter based - Rotate 3',
                                label: '<i class="fa fa-fw fa-reply"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-letters-rotate-3', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1k" animation="letters rotate-3" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-letters-type': {
                                identifier: 'shortcodes-textanim-letters-type',
                                title: 'Text Animation - Letter based - Type',
                                label: '<i class="fa fa-fw fa-keyboard-o"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-letters-type', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1k" animation="letters type" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-textanim-letters-scale': {
                                identifier: 'shortcodes-textanim-letters-scale',
                                title: 'Text Animation - Letter based - Scale',
                                label: '<i class="fa fa-fw fa-balance-scale"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-textanim-letters-scale', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-animated-text words="$1" animation="letters scale" element="h2"]My favorite food is[/ui-animated-text]', codemirror: codemirror});
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
