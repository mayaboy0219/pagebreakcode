/*
 * PageBreakCode Plugin for CKEditor (https://github.com/mayaboy0219/pagebreakcode)
 * Created by omdriver.com - Wang Zhuo - 11. May 2016
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */

'use strict';

(function() {
	CKEDITOR.plugins.add( 'pagebreakcode', {
		requires: 'fakeobjects',
		lang: 'en,zh-cn',
		icons: 'pagebreakcode',
		hidpi: true,
		init: function( editor ) {
			if ( editor.blockless )
				return;

			editor.addCommand( 'pagebreakcode', CKEDITOR.plugins.pagebreakcodeCmd );

			editor.ui.addButton && editor.ui.addButton( 'PageBreakCode', {
				label: editor.lang.pagebreakcode.toolbar,
				command: 'pagebreakcode'
			});
		}
	} );

	CKEDITOR.plugins.pagebreakcodeCmd = {
		exec: function( editor ) {
			editor.insertHtml("#p#" + editor.lang.pagebreakcode.subtitle + "#e#");
		}
	};
})();
