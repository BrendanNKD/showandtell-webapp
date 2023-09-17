import {
  generateCaptionRequest,
  generateImageRequest,
} from "domain/types/generate";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  useGenCaptionMutation,
  useGenImageMutation,
} from "services/replicate/inference";

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
    captionloading,
  };
};

export const useGenerateImage = () => {
  const dispatch = useDispatch();
  const [
    genImage,
    {
      data: images,
      isSuccess: isImagesSuccess,
      isError: imagesisErr,
      error: imagesErr,
      isLoading: imagesloading,
    },
  ] = useGenImageMutation();

  const generate = useCallback(
    async (prompt: generateImageRequest) => {
      await genImage(prompt).unwrap();
    },
    [genImage]
  );
  return {
    generate,
    images,
    imagesloading,
  };
};
