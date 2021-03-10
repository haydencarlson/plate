import { useOnKeyDownMark, useRenderLeaf } from '@udecode/slate-plugins-common';
import { SlatePlugin } from '@udecode/slate-plugins-core';
import { MARK_CODE } from './defaults';
import { useDeserializeCode } from './useDeserializeCode';

/**
 * Enables support for code formatting
 */
export const CodePlugin = (): SlatePlugin => ({
  renderLeaf: useRenderLeaf(MARK_CODE),
  deserialize: useDeserializeCode(),
  onKeyDown: useOnKeyDownMark(MARK_CODE),
});
