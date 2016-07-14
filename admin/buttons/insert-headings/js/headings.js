(function(){

    if (typeof window.customToolbarElements === 'undefined') { window.customToolbarElements = []; }
    window.customToolbarElements.push({
        identifier: 'content-headings',
        button: {
            title  : 'Headings',
            label  : '<i class="fa fa-header content-headings"></i>',
            class  : 'heading-icon',
        },
        processAction: function(editor) {

            if ($('#heading-dropdown').is(':visible')) {
                $('#heading-dropdown').remove();
                return;
            }

            var dropdown = '<div id="heading-dropdown">';
                    dropdown += '<a href="javascript:void(0);" data-heading="# " class="heading-dropdown-h1">H1</a>';
                    dropdown += '<a href="javascript:void(0);" data-heading="## " class="heading-dropdown-h2">H2</a>';
                    dropdown += '<a href="javascript:void(0);" data-heading="### " class="heading-dropdown-h3">H3</a>';
                    dropdown += '<a href="javascript:void(0);" data-heading="#### " class="heading-dropdown-h4">H4</a>';
                    dropdown += '<a href="javascript:void(0);" data-heading="##### " class="heading-dropdown-h5">H5</a>';
                    dropdown += '<a href="javascript:void(0);" data-heading="###### " class="heading-dropdown-h6">H6</a>';
                dropdown += '</div>';

            var $headingDropdown = $('.heading-icon');
            var $dropdown = $(dropdown)
                .insertAfter($headingDropdown);


            $dropdown.on('click', 'a', function () {
                $('#heading-dropdown').remove();

                var text = $(this).data('heading');

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
