import { UseUsername } from "app/state/account/useAccount";
import React, { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Navbar from "components/navBar";
import { UseAuthenticatedRoute } from "utils/authRoute";

export const Game = () => {
  UseAuthenticatedRoute();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    () => {
      sendMessage(
        "JigsawUI",
        "GetUrl",
        "https://res.cloudinary.com/dxhbnhyfi/image/upload/v1695429689/showandtell/nbofkbyutnr8fiqtuqgd.jpg"
      );
    },
    [sendMessage]
  );

  const handleMenu = useCallback(
    () => {
      sendMessage("UI", "GetUsername", username);
    },
    [sendMessage]
  );

  const handleScore = useCallback(
    (score:any) => {
      setScore(score);
      console.log(score);
    },
    [sendMessage]
  );

  useEffect(() => {
    addEventListener("SetStart", handleStart);
    return () => {
      removeEventListener("SetStart", handleStart);
    };
  }, [addEventListener, removeEventListener, handleStart]);

  useEffect(() => {
    addEventListener("EnterMain", handleMenu);
    return () => {
      removeEventListener("EnterMain", handleMenu);
    };
  }, [addEventListener, removeEventListener, handleMenu]);

  useEffect(() => {
    addEventListener("ScoreToStars", handleScore);
    return () => {
      removeEventListener("ScoreToStars", handleMenu);
    };
  }, [addEventListener, removeEventListener, handleMenu]);

  return (
    <div>
    <Navbar></Navbar>
    
    <Unity
      style={{
        width: "100%",
        // justifySelf: "center",
        // alignSelf: "center",
      }}
      unityProvider={unityProvider}
    />
    </div>
  );
};
