import { useOnKeyDownMark, useRenderLeaf } from '@udecode/slate-plugins-common';
import { SlatePlugin } from '@udecode/slate-plugins-core';
import { useDeserializeUnderline } from '../../underline/useDeserializeUnderline';
import { MARK_SUPERSCRIPT } from '../defaults';

/**
 * Enables support for superscript formatting.
 */
export const SuperscriptPlugin = (): SlatePlugin => ({
  renderLeaf: useRenderLeaf(MARK_SUPERSCRIPT),
  deserialize: useDeserializeUnderline(),
  onKeyDown: useOnKeyDownMark(MARK_SUPERSCRIPT),
});
