import { getPluginType } from '@udecode/slate-plugins-core';
import { Editor } from 'slate';
import { ELEMENT_TR } from '../defaults';
import { TablePluginOptions } from '../types';
import { getEmptyCellNode } from './getEmptyCellNode';

export const getEmptyRowNode = (
  editor: Editor,
  { header, colCount }: TablePluginOptions & { colCount: number }
) => {
  return {
    type: getPluginType(editor, ELEMENT_TR),
    children: Array(colCount)
      .fill(colCount)
      .map(() => getEmptyCellNode(editor, { header })),
  };
};
