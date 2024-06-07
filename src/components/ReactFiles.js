import React, { useState } from 'react';
import Files from 'react-files';

const ReactFiles = () => {
   const [files, setFiles] = useState([]);

   const handleChange = (newFiles) => {
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
   };

   const handleFileRemove = (fileId) => {
      setFiles(prevFiles => prevFiles.filter(prevFile => prevFile.id !== fileId));
   };

   return (
      <div>
         <h1>React Files</h1>
         <Files
            className="files-dropzone-list"
            dragActiveClassName="files-dropzone-active"
            style={{ height: '100px' }}
            onChange={handleChange}
            multiple
            maxFiles={5}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
         >
            Drop files here or click to upload
         </Files>

         {files.length > 0 && (
            <div className="files-list">
               <ul>
                  {files.map(file => (
                     <li key={file.id} className="files-list-item">
                        <div className="files-list-item-preview">
                           {file.preview.type === 'image' ? (
                              <img className="files-list-item-preview-image" src={file.preview.url} alt={file.name} />
                           ) : (
                              <div className="files-list-item-preview-extension">{file.extension}</div>
                           )}
                        </div>
                        <div className="files-list-item-content">
                           <div className="files-list-item-content-item files-list-item-content-item-1">{file.name}</div>
                           <div className="files-list-item-content-item files-list-item-content-item-2">{file.sizeReadable}</div>
                        </div>
                        <div
                           className="files-list-item-remove"

                        >
                           <button onClick={() => handleFileRemove(file.id)}>Remove</button>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default ReactFiles;
