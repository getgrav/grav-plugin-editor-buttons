(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                notices: {
                    identifier: 'code',
                    title: 'code',
                    label: '<i class="fa fa-fw fa-code"></i>',
                    modes: ['gfm', 'markdown'],
                    action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.code', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '``` \n $1 \n```', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                }
            });
        });
    });
})(jQuery);
