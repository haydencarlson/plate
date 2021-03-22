import { getLeafDeserializer } from '@udecode/slate-plugins-common';
import { Deserialize, getPluginOptions } from '@udecode/slate-plugins-core';
import { Editor } from 'slate';
import { MARK_ITALIC } from './defaults';

export const useDeserializeItalic = (): Deserialize => (editor: Editor) => {
  const options = getPluginOptions(editor, MARK_ITALIC);

  return {
    leaf: getLeafDeserializer({
      type: options.type,
      rules: [
        { nodeNames: ['EM', 'I'] },
        {
          style: {
            fontStyle: 'italic',
          },
        },
      ],
      ...options.deserialize,
    }),
  };
};
