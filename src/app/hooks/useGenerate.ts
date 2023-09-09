import { generateCaptionRequest } from "domain/types/generateCaption/generateCaption";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useGenCaptionMutation } from "services/replicate/inference";

export const useGenerateCaption = () => {
  const dispatch = useDispatch();
  const [
    genCaption,
    {
      data: caption,
      isSuccess: isCaptionSuccess,
      isError: captionisErr,
      error: captionErr,
      isLoading: captionloading,
    },
  ] = useGenCaptionMutation();

  const generate = useCallback(
    async (image: generateCaptionRequest) => {
      await genCaption(image).unwrap();
    },
    [genCaption]
  );
  return {
    generate,
    caption,
  };
};
