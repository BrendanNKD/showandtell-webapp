import { generateImageRequest } from "domain/types/generate";
import { useCallback } from "react";
import {
  useGenCaptionMutation,
  useGenImageMutation,
  useReportMutation,
} from "services/replicate/inference";

export const useGenerateCaption = () => {
  const [genCaption, { data: caption, isLoading: captionloading }] =
    useGenCaptionMutation();

  const generate = useCallback(
    async (image: any) => {
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
  const [genImage, { data: images, isLoading: imagesloading }] =
    useGenImageMutation();

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

export const useReportIssue = () => {
  const [report, { data: reported, isLoading: reportLoading }] =
    useReportMutation();

  const reportIssue = useCallback(
    async (reportdata: any) => {
      await report(reportdata).unwrap();
    },
    [report]
  );
  return {
    reportIssue,
    reported,
    reportLoading,
  };
};
