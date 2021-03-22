import { Dispatch, SetStateAction, useState } from 'react';
import { useRenderLeaf } from '@udecode/slate-plugins-common';
import { SlatePlugin } from '@udecode/slate-plugins-core';
import { MARK_SEARCH_HIGHLIGHT } from './defaults';
import { useDecorateSearchHighlight } from './useDecorateSearchHighlight';

/**
 * Supports search highlight.
 * TODO: replace
 */
export const useFindReplacePlugin = (): SlatePlugin & {
  setSearch: Dispatch<SetStateAction<string>>;
} => {
  const [search, setSearch] = useState('');

  return {
    renderLeaf: useRenderLeaf(MARK_SEARCH_HIGHLIGHT),
    decorate: useDecorateSearchHighlight({ search }),
    setSearch,
  };
};
