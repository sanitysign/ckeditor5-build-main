/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		Autoformat,
		Bold,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Indent,
		Italic,
		Link,
		List,
		Paragraph,
		TextTransformation,
		Underline
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'bold',
				'italic',
				'underline',
				'bulletedList',
				'numberedList',
				'alignment',
				'fontColor',
				'fontBackgroundColor',
				'fontFamily',
				'fontSize',
				'link'
			]
		},
		language: 'en'
	};
}

export default Editor;
