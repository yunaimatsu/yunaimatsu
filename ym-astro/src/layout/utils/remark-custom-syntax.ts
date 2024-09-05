import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Html, RootContent } from 'mdast';

const customTogglePlugin: Plugin<[], Root> = () => {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      if (!parent || index === null || index === undefined) return;

      // Check if the paragraph starts with "> "
      const firstChild = node.children[0] as Text;
      if (firstChild?.type === 'text' && firstChild.value.startsWith('> ')) {
        // Extract the content after "> "
        const content = firstChild.value.slice(2).trim();

        // Create a `details` node with the `Html` type
        const detailsNode: Html = {
          type: 'html',
          value: `<details><summary style="font-size: 40px;">${content}</summary><p>`
        };

        // Replace the current paragraph node with the `details` node
        (parent.children as RootContent[]).splice(index, 1, detailsNode);

        // Find the position to insert the closing `</details>` tag
        let endIndex = index + 1;
        while (endIndex < parent.children.length) {
          const nextNode = parent.children[endIndex];

          // Stop when another paragraph or block element is found
          if (nextNode.type === 'paragraph') {
            break;
          }

          endIndex++;
        }

        // Create a closing `Html` node for `</details>`
        const closingNode: Html = {
          type: 'html',
          value: `</p></details>`
        };

        (parent.children as RootContent[]).splice(endIndex, 0, closingNode);
      }
    });
  };
};

export default customTogglePlugin;
