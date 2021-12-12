import React, { useState } from 'react';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function FilePondHook({ files, setFiles }) {
  registerPlugin(FilePondPluginFileEncode);
  return (
    <div className="App">
      <FilePond
        files={files}
        allowReorder={true}
        allowMultiple={false}
        onupdatefiles={setFiles}
        labelIdle='Drag &amp; Drop your Image or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}
