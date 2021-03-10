import { useOnKeyDownMark, useRenderLeaf } from '@udecode/slate-plugins-common';
import { SlatePlugin } from '@udecode/slate-plugins-core';
import { useDeserializeUnderline } from '../../underline/useDeserializeUnderline';
import { MARK_SUBSCRIPT } from '../defaults';

/**
 * Enables support for subscript formatting.
 */
export const SubscriptPlugin = (): SlatePlugin => ({
  renderLeaf: useRenderLeaf(MARK_SUBSCRIPT),
  deserialize: useDeserializeUnderline(),
  onKeyDown: useOnKeyDownMark(MARK_SUBSCRIPT),
});
