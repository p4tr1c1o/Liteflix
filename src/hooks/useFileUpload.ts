import { ref, uploadBytesResumable, getDownloadURL, StorageError, UploadTask } from "firebase/storage";
import { storage } from "../../.firebase/firebase.config"
import { useCallback, useRef, useState } from "react";

type StateType = {
	uploadFile?: (file: File) => void,
	cancelUpload?: () => boolean,
	isLoading?: boolean,
	progress?: number,
	downloadURL?: string,
	error?: StorageError
}

export function useFileUpload() {
	const uploadTaskRef = useRef<UploadTask>();
	const [state, setState] = useState<StateType>()

	const uploadFile = useCallback(
		(file: File) => {
			const storageRef = ref(storage, 'images/' + file.name);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTaskRef.current = uploadTask

			uploadTask.on('state_changed',
				(snapshot) => {
					const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					setState({
						...state,
						progress,
						isLoading: true,
						cancelUpload: () => uploadTaskRef.current?.cancel() ?? false
					})

					// switch (snapshot.state) {
					// 	case 'paused':
					// 		console.log('Upload is paused');
					// 		break;
					// 	case 'running':
					// 		console.log('Upload is running');
					// 		break;
					// }
				},
				(error) => {
					setState({ ...state, error, isLoading: false })
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						console.log(downloadURL);

						setState({ ...state, downloadURL, isLoading: false })
					}).catch(error => console.log(error))
				}
			)
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)
	return { ...state, uploadFile } as StateType
}

// export default function useUpload () {
//   const [file, setFile] = useState('')
//   const [fileName, setFileName] = useState('')

//   const onChangeHandler = e => {
//     setFile(e.target.files[0])
//     setFileName(e.target.files[0].name)
//   }

//   return { file, fileName, onChangeHandler }
// }