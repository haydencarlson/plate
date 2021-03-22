import {
  getElementDeserializer,
  getSlateClass,
} from '@udecode/slate-plugins-common';
import { Deserialize, getPluginOptions } from '@udecode/slate-plugins-core';
import { Editor } from 'slate';
import { ELEMENT_CODE_BLOCK, ELEMENT_CODE_LINE } from './defaults';

// FIXME Handle code_line

export const useDeserializeCodeBlock = (): Deserialize => (editor: Editor) => {
  const code_block = getPluginOptions(editor, ELEMENT_CODE_BLOCK);
  const code_line = getPluginOptions(editor, ELEMENT_CODE_LINE);

  return {
    element: [
      ...getElementDeserializer({
        type: code_block.type,
        rules: [
          { nodeNames: 'PRE' },
          { className: getSlateClass(code_block.type) },
        ],
        ...code_block.deserialize,
      }),
      ...getElementDeserializer({
        type: code_line.type,
        rules: [{ className: getSlateClass(code_line.type) }],
        ...code_line.deserialize,
      }),
    ],
  };
};
