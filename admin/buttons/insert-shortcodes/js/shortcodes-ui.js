(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                shortcodes: {
                    identifier: 'shortcodes',
                    title: 'Shortcodes UI',
                    label: '<i class="fa fa-fw fa-th-large"></i>',
                    modes: ['gfm', 'markdown'],
                    children: [
                        {
                            'shortcodes-tab': {
                                identifier: 'shortcodes-tab',
                                title: 'Tab',
                                label: '<i class="fa fa-fw fa-folder"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-tab', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="First Tab"]$1[/ui-tab][/ui-tabs]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-accordion': {
                                identifier: 'shortcodes-accordion',
                                title: 'Accordion',
                                label: '<i class="fa fa-fw fa-toggle-down"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-accordion', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-accordion independent=true open=none][ui-accordion-item title="Section 1"]$1[/ui-accordion-item][/ui-accordion]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-callout': {
                                identifier: 'shortcodes-callout',
                                title: 'Callout',
                                label: '<i class="fa fa-fw fa-comment-o"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-callout', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-callout][ui-callout-item title="Outlines" position="50%, 50%, se"][/ui-callout-item]$1[/ui-callout]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-imagecompare': {
                                identifier: 'shortcodes-imagecompare',
                                title: 'ImageCompare',
                                label: '<i class="fa fa-fw fa-arrows-h"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-imagecompre', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-image-compare]$1![Image to Compare](url-to-image.jpg)[/ui-image-compare]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-browser': {
                                identifier: 'shortcodes-browser',
                                title: 'Browser',
                                label: '<i class="fa fa-fw fa-window-maximize"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-browser', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-browser address="http://yoururl.org"]$1[/browser]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-polaroid': {
                                identifier: 'shortcodes-polaroid',
                                title: 'Polaroid',
                                label: '<i class="fa fa-fw fa-camera"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.polaroid', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[ui-polaroid angle="-3" margin="30px 50px 20px 0" position="left" title="This is a polaroid"]$1[/ui-polaroid]', codemirror: codemirror});
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