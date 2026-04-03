'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import ImageExtension from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

function MenuBar({ editor }: { editor: ReturnType<typeof useEditor> }) {
  if (!editor) return null;

  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: '6px 10px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    background: active ? '#2A3F7A' : '#fff',
    color: active ? '#fff' : '#2D2D3A',
    cursor: 'pointer',
    fontSize: '.82rem',
    fontWeight: 600,
    fontFamily: 'inherit',
    transition: 'all .15s',
  });

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px',
        padding: '10px 14px',
        borderBottom: '1px solid #e2e8f0',
        background: '#f8fafc',
        borderRadius: '8px 8px 0 0',
      }}
    >
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        style={btnStyle(editor.isActive('bold'))}
      >
        B
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        style={btnStyle(editor.isActive('italic'))}
      >
        I
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        style={btnStyle(editor.isActive('heading', { level: 2 }))}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        style={btnStyle(editor.isActive('heading', { level: 3 }))}
      >
        H3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        style={btnStyle(editor.isActive('bulletList'))}
      >
        • List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        style={btnStyle(editor.isActive('orderedList'))}
      >
        1. List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        style={btnStyle(editor.isActive('blockquote'))}
      >
        Quote
      </button>
      <button
        type="button"
        onClick={() => {
          const url = window.prompt('Enter URL:');
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
        style={btnStyle(editor.isActive('link'))}
      >
        Link
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        style={btnStyle(false)}
      >
        —
      </button>
    </div>
  );
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      ImageExtension,
      Placeholder.configure({ placeholder: placeholder || 'Start writing...' }),
    ],
    content,
    onUpdate: ({ editor: ed }) => {
      onChange(ed.getHTML());
    },
    editorProps: {
      attributes: {
        style:
          'min-height: 260px; padding: 18px; font-family: Inter, sans-serif; font-size: 1rem; color: #2D2D3A; line-height: 1.7; outline: none;',
      },
    },
  });

  return (
    <div
      style={{
        border: '1.5px solid #e2e8f0',
        borderRadius: '8px',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
