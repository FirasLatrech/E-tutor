import { type Dispatch, type SetStateAction, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorPropsType {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  label: string;
}

function TextEditor({ value, setValue, label }: TextEditorPropsType) {
  return (
    <>
      <div className="flex w-full flex-col items-start justify-center gap-[1rem]">
        <h1 className="font-medium	leading-5 text-lg">{label}</h1>
        <ReactQuill
          theme="snow"
          className="w-full min-h-[2rem]"
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
}

export default TextEditor;
