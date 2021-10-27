import React, { useState } from "react";
import AudioRecorder from 'audio-recorder-polyfill'
import { Button } from "@material-ui/core";
// window.MediaRecorder = AudioRecorder

function PolyFillRecorder() {

    const [isRecording, setRecording] = useState(false);
    var recorder: any;
    var data: Blob[] = [];
    var objectURL: string;

    const onStart = () => {
        setRecording(true);
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            // AudioRecorder.prototype.mimeType = 'audio/wav';
            recorder = new AudioRecorder(stream)

            recorder.addEventListener('dataavailable', (e: { data: Blob; }) => {
                // Data is in e.data
                console.log('ayee')
                console.log(e.data.type)
                objectURL = URL.createObjectURL(e.data)
                data.push(e.data);
            })

            recorder.start()
        })
    }

    const onStop = () => {
        setRecording(false);
        // Stop recording
        recorder.stop()
        // Remove “recording” icon from browser tab
        recorder.stream.getTracks().forEach((i: { stop: () => any; }) => i.stop())
    }

    const downloadData = (dataString: string) => {
        const blob = new Blob(data, { type: "audio/wav" });
        var audio = window.URL.createObjectURL(blob);


        var a = document.createElement("a");
        document.body.appendChild(a);
        // var url = dataString;
        var url = audio;
        a.href = url;
        a.download = "audio.wav";
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    return (<>
        <div >
            <p>{status}</p>
            <div>
                <button onClick={() => { onStart() }}>Start Recording</button>
                <button onClick={() => { onStop() }}>Stop Recording</button>
            </div>
            <div>
                <>
                    <Button variant="outlined" onClick={() => { downloadData(objectURL) }}>Download</Button>
                </>
            </div>
        </div>
    </>);
}

export default PolyFillRecorder;