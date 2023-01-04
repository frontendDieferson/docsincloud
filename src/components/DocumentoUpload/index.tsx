import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'


const DocumentUpload = () => {
  
  const [file, setFile] = useState<File | null>();
  const [ percent, setPercent ] = useState(0)
  const storage = getStorage()


  const handleFileChange = (event: { target: { files: React.SetStateAction<File | null | undefined>[]; }; }) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Por favor, selecione um arquivo.');
      return;
    }
    const storageRef = ref(storage, `documents/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on("state_changed",
    (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setPercent(percent)
    },(err) => console.log(err),
  () => {
  // download url
 getDownloadURL(uploadTask.snapshot.ref).then((url) => {
console.log(url);
})
}
)
   
};

  return (
    <form onSubmit={handleSubmit}>
      <span>Selecione seu Arquivo</span>
      <input type="file" accept='*' onChange={() => handleFileChange} />
      <button type="submit">Enviar</button>
      <p>{percent} "% Concluído"</p>
    </form>
  );
};

export default DocumentUpload;

// uploadBytes(storageRef, file).then(() => {
//   toast.success('Arquivo enviado com sucesso')
// }).catch(() => {
//   toast.warning('Ops, parece que algo deu errado!')
// })