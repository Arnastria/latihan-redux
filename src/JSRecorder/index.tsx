import React, { useState } from "react";
import AudioRecorder from 'audio-recorder-polyfill'
import { Button } from "@material-ui/core";
import Recorder from "./Recorder";
// window.MediaRecorder = AudioRecorder

function JSRecorder() {
    const URL = window.URL || window.webkitURL;
    var gumStream: MediaStream;
    var rec: Recorder;
    var input;
    var AudioContext = window.AudioContext;
    var audioContext

    const [isRecording, setRecording] = useState(false);
    const [recd, setRecd] = useState<Recorder>();
    const [gumStreams, setGumStreams] = useState<MediaStream>();


    const onStart = () => {
        setRecording(true);
        console.log("recordButton clicked");
        var constraints = { audio: true, video: false }
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            console.log("getUserMedia() success, stream created, initializing Recorder.js ...");
            audioContext = new AudioContext();
            gumStream = stream;
            setGumStreams(gumStream);
            input = audioContext.createMediaStreamSource(stream);

            rec = new Recorder(input, { numChannels: 1 })
            setRecd(rec);

            rec.record()
            console.log(rec)
            console.log("Recording started");

        }).catch(function (err) {
            console.log("getUserMedia() fail");
        });
    }

    const onStop = () => {
        console.log(recd)
        setRecording(false);
        console.log("stopButton clicked");
        recd?.stop();
        gumStreams?.getAudioTracks()[0].stop();
        recd?.exportWAV(createDownloadLink);
    }

    const createDownloadLink = (blob: string) => {
        var url = URL.createObjectURL(blob);
        // var au = document.createElement('audio');
        // var li = document.createElement('li');
        var link = document.createElement('a');

        //name of .wav file to use during upload and download (without extendion)
        var filename = new Date().toISOString();

        //add controls to the <audio> element
        // au.controls = true;
        // au.src = url;

        //save to disk link
        link.href = url;
        link.download = filename + ".wav"; //download forces the browser to donwload the file using the  filename
        link.innerHTML = "Save to disk";
        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
    }

    const downloadData = (dataString: string) => {

    }

    return (<>
        <div >
            <p>{isRecording}</p>
            <div>
                <button onClick={() => { onStart() }}>Start Recording</button>
                <button onClick={() => { onStop() }}>Stop Recording</button>
            </div>
            <div>
                <>
                    <Button variant="outlined" onClick={() => { downloadData("objectURL") }}>Download</Button>
                </>
            </div>
        </div>
    </>);
}

export default JSRecorder;