import { SlatePluginsOptions } from '@udecode/slate-plugins-core';
import markdown from 'remark-parse';
import slate from 'remark-slate';
import unified from 'unified';

export const parseMD = (content: string, options: SlatePluginsOptions) => {
  const {
    p,
    blockquote,
    link,
    code,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
  } = options;

  const tree: any = unified()
    .use(markdown)
    .use(slate, {
      nodeTypes: {
        paragraph: p.type,
        block_quote: blockquote.type,
        link: link.type,
        code_block: code.type,
        ul_list: ul.type,
        ol_list: ol.type,
        listItem: li.type,
        heading: {
          1: h1.type,
          2: h2.type,
          3: h3.type,
          4: h4.type,
          5: h5.type,
          6: h6.type,
        },
      },
      linkDestinationKey: 'url',
    })
    .processSync(content);

  return tree.result;
};
