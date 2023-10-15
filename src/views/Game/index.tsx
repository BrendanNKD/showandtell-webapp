import { UseUsername } from "app/state/account/useAccount";
import React, { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Game = () => {
  const [score, setScore] = useState();
  const username = UseUsername();
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "/assets/jigExport.loader.js",
      dataUrl: "/assets/jigExport.data.unityweb",
      frameworkUrl: "/assets/jigExport.framework.js.unityweb",
      codeUrl: "/assets/jigExport.wasm.unityweb",
    });

  sendMessage("UI", "GetUsername", username);

  const handleStart = useCallback(
    (score: any) => {
      setScore(score);
      sendMessage(
        "JigsawUI",
        "GetUrl",
        "https://res.cloudinary.com/dxhbnhyfi/image/upload/v1695429689/showandtell/nbofkbyutnr8fiqtuqgd.jpg"
      );
    },
    [sendMessage]
  );

  useEffect(() => {
    addEventListener("SetStart", handleStart);
    return () => {
      removeEventListener("SetStart", handleStart);
    };
  }, [addEventListener, removeEventListener, handleStart]);

  return (
    <Unity
      style={{
        width: "100%",
        // justifySelf: "center",
        // alignSelf: "center",
      }}
      unityProvider={unityProvider}
    />
  );
};