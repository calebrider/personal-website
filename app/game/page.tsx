"use client";

import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "game/build.loader.js",
        dataUrl: "game/build.data.unityweb",
        frameworkUrl: "game/build.framework.js.unityweb",
        codeUrl: "game/build.wasm.unityweb",
    });

    return (
        <Unity unityProvider={unityProvider} style={{ width: "100%", height: "auto" }}/>
    )
  }