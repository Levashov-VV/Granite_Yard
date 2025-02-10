'use client';

import React from 'react';

export function Video() {
    return (
        <video width="320" height="240" controls preload="none">
            <source
                src="../../../Assets/main/video/video.mp4"
                type="video/mp4"
            />
            <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
            />
            Ваш браузер не поддерживает тег video.
        </video>
    );
}
