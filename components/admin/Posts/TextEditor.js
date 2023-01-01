import React from 'react';
import {CKEditor} from 'ckeditor4-react';

const TextEditor = (props) => {
  return (
    <CKEditor
      data={props.content}
      onChange={props.onChange}
    />
  );
}

export default TextEditor;