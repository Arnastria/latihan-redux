import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

function RecordView() {
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ audio: true });

    const [isRecording, setRecording] = useState(false);

    const downloadData = (data: string) => {
        var a = document.createElement("a");
        document.body.appendChild(a);
        var url = data;
        a.href = url;
        a.download = "audio.wav";
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    return (
        <div >
            <p>{status}</p>
            <div>
                <button onClick={startRecording}>Start Recording</button>
                <button onClick={stopRecording}>Stop Recording</button>
            </div>
            <div>
                {mediaBlobUrl ?
                    <>
                        <audio src={mediaBlobUrl ?? undefined} controls loop />
                        <Button variant="outlined" onClick={() => { downloadData(mediaBlobUrl) }}>Download</Button>
                    </>
                    :
                    <></>
                }

            </div>
        </div>
    );
};

function Recorder() {
    return (
        <div style={{ margin: "20px" }}>
            <h1>Recorder</h1>
            <RecordView />
        </div>)
}

export default Recorder;