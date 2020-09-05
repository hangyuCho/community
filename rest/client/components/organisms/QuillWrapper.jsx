import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import modules from '../../quill/modules';
import formats from '../../quill/formats';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div>editor loading ...</div>,
});

const QuillWrapper = ({ desc, setDesc }) => {
  const quillRef = useRef();

  useEffect(() => {
    console.log(quillRef.current);
  }, [quillRef]);

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={desc}
        onChange={setDesc}
        toolbar
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

QuillWrapper.propTypes = {
  desc: PropTypes.string.isRequired,
  setDesc: PropTypes.func.isRequired,
};

export { QuillWrapper };
