import cx from "classnames";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { TRANSFORMERS } from "@lexical/markdown";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { isValidUrl } from "./utils/url";
import { AutoLinkPlugin } from "./plugins/AutoLink";
import { EditLinkPlugin } from "./plugins/EditLink";
import { LocalStoragePlugin } from "./plugins/LocalStorage";
import { OpenLinkPlugin } from "./plugins/OpenLink";
import {
  EditorHistoryStateContext,
  useEditorHistoryState,
} from "./context/EditorHistoryState";
import { FloatingMenuPlugin } from "./plugins/FloatingMenu";

import "./styles.css";
export const EDITOR_NAMESPACE = "lexical-editor";

const EDITOR_NODES = [
  AutoLinkNode,
  CodeNode,
  HeadingNode,
  LinkNode,
  ListNode,
  ListItemNode,
  QuoteNode,
];

type EditorProps = {
  className?: string;
};

export function Editor(props: EditorProps) {
  const content = localStorage.getItem(EDITOR_NAMESPACE);

  return (
    <div id="editor-wrapper" className={cx(props.className)}>
      <EditorHistoryStateContext>
        <LexicalEditor
          config={{
            namespace: EDITOR_NAMESPACE,
            nodes: EDITOR_NODES,
            editorState: content,
            theme: {
              root: "lexical-editor-class-name",
              link: "cursor-pointer",
              text: {
                bold: "font-semibold",
                underline: "underline decoration-wavy",
                italic: "italic",
                strikethrough: "line-through",
                underlineStrikethrough: "underlined-line-through",
              },
            },
            onError: error => {
              console.log(error);
            },
          }}
        />
      </EditorHistoryStateContext>
    </div>
  );
}

type LexicalEditorProps = {
  config: Parameters<typeof LexicalComposer>["0"]["initialConfig"];
};

export function LexicalEditor(props: LexicalEditorProps) {
  const { historyState } = useEditorHistoryState();

  return (
    <LexicalComposer initialConfig={props.config}>
      {/* Official Plugins */}
      <RichTextPlugin
        contentEditable={<ContentEditable spellCheck={false} />}
        placeholder={<Placeholder />}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin externalHistoryState={historyState} />
      <ListPlugin />
      <LinkPlugin validateUrl={isValidUrl} />
      {/* Custom Plugins */}
      <AutoLinkPlugin />
      <EditLinkPlugin />
      <FloatingMenuPlugin />
      <LocalStoragePlugin namespace={EDITOR_NAMESPACE} />
      <OpenLinkPlugin />
    </LexicalComposer>
  );
}

const Placeholder = () => {
  return (
    <div
      className="opacity-50 start-writing-class-name"
      style={{ position: "absolute", top: 24, left: 24 }}
    >
      Start writing...
    </div>
  );
};
