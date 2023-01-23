/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor"

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials"
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat"
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold"
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic"
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline"
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote"
import Heading from "@ckeditor/ckeditor5-heading/src/heading"
import Indent from "@ckeditor/ckeditor5-indent/src/indent"
import Link from "@ckeditor/ckeditor5-link/src/link"
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph"
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation"
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters"
import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows"
import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency"
import SpecialCharactersMathematical from "@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical"

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
  Essentials,
  Autoformat,
  Bold,
  Italic,
  Underline,
  BlockQuote,
  Heading,
  Image,
  Indent,
  Link,
  Paragraph,
  TextTransformation,
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
    items: ["undo", "redo", "bold", "italic", "underline", "link", "specialCharacters"],
  },

  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
}
