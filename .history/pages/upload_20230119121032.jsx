import { useState } from 'react';
import FileInput from '../components/FileInput';
import FileUpload from '../components/FileUpload ';

export default function PrivatePage(props) {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = event => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async event => {
    const body = new FormData();
    // console.log("file", image)
    body.append('file', image);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body
    });
  };

  return (
    <div>
      <div>
        <FileInput onChange={setFile} />
        <FileUpload file={file} />
      </div>
    </div>
  );
}
