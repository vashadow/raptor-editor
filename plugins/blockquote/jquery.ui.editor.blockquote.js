(function($) {
    $.ui.editor.addButton('blockquote', {
        title: 'Blockquote',
        icons: {
            primary: 'ui-icon-blockquote'
        },
        classes: 'ui-editor-icon',
        click: function() {
            this._selection.wrapWithTag.call(this, 'blockquote');
        }
    });
})(jQuery);