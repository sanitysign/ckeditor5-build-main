/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor"

import { Essentials } from "@ckeditor/ckeditor5-essentials"
import { Alignment } from "@ckeditor/ckeditor5-alignment"
import { Autoformat } from "@ckeditor/ckeditor5-autoformat"
import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles"
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from "@ckeditor/ckeditor5-font"
import { Indent } from "@ckeditor/ckeditor5-indent"
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote"
import { Heading } from "@ckeditor/ckeditor5-heading"
import { Link } from "@ckeditor/ckeditor5-link"
import { List } from "@ckeditor/ckeditor5-list"
import { Paragraph } from "@ckeditor/ckeditor5-paragraph"
import { TextTransformation } from "@ckeditor/ckeditor5-typing"
import {
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersMathematical,
} from "@ckeditor/ckeditor5-special-characters"

// import {
//   Emoji, EmojiActivity, EmojiFlags, EmojiFood, EmojiNature, EmojiObjects, EmojiPeople,
//   EmojiPlaces, EmojiSymbols
// } from '@phudak/ckeditor5-emoji/src';

import emojisGrouped from "./emojisGrouped.json"

export default class ClassicEditor extends ClassicEditorBase {}

function SpecialCharactersEmoji(editor) {
  Object.entries(emojisGrouped).forEach(([groupName, group]) => {
    editor.plugins.get("SpecialCharacters").addItems(groupName, group)
  })
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
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
  Underline,
  BlockQuote,
  Heading,
  Image,
  Indent,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersMathematical,
  SpecialCharactersEmoji,
  // Emoji,
  // EmojiPeople,
  // EmojiNature,
  // EmojiPlaces,
  // EmojiFood,
  // EmojiActivity,
  // EmojiObjects,
  // EmojiSymbols,
  // EmojiFlags,
]

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      "undo",
      "redo",
      "bold",
      "italic",
      "underline",
      "bulletedList",
      "numberedList",
      "alignment",
      "fontColor",
      "fontBackgroundColor",
      "fontFamily",
      "fontSize",
      "link",
      "specialCharacters",
    ],
  },

  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
}
