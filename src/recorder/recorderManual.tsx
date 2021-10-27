import React, { useState } from "react";
import AudioRecorder from 'audio-recorder-polyfill'
import { Button } from "@material-ui/core";
import Recorder from "recorder-js";
// window.MediaRecorder = AudioRecorder

function RecorderManual() {

    const [isRecording, setRecording] = useState(false);
    const audioContext = new (window.AudioContext)();
    var recorder: Recorder = new Recorder(audioContext, {
        // An array of 255 Numbers
        // You can use this to visualize the audio stream
        // If you use react, check out react-wave-stream
        onAnalysed: data => console.log(data),
    });;
    var blobs: any;
    var objectURL: string;

    const onStart = () => {
        setRecording(true);
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => recorder.init(stream))
            .catch(err => console.log('Uh oh... unable to get stream...', err));
        recorder.start().then(() => setRecording(true))
    }

    const onStop = () => {
        setRecording(false);
        recorder?.stop()
            .then(({ blob, buffer }) => {
                blobs = blob;
                // buffer is an AudioBuffer
            });
    }

    const downloadData = (dataString: string) => {
        Recorder.download(blobs, 'audio-file');
    }

    return (<>
        <div >
            <div>
                <button onClick={() => { onStart() }}>Start Recording</button>
                <button onClick={() => { onStop() }}>Stop Recording</button>
            </div>
            <div>
                <>
                    <Button variant="outlined" onClick={() => { downloadData("") }}>Download</Button>
                </>
            </div>
        </div>
    </>);
}

export default RecorderManual;