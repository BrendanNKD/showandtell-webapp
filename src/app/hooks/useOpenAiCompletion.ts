import { generateCaptionRequest } from "domain/types/generateCaption/generateCaption";
import { promptRequest } from "domain/types/openAi/completion";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useOpenAiCompletionMutation } from "services/openAi/completion";
import { useGenCaptionMutation } from "services/replicate/inference";

export const useOpenAiCompletion = () => {
  const [
    openAiCompletion,
    {
      data: description,
      isSuccess: descriptionSuccess,
      isError: descriptionisErr,
      error: descriptionErr,
      isLoading: descriptionloading,
    },
  ] = useOpenAiCompletionMutation();

  const completion = useCallback(
    async (prompt: promptRequest) => {
      await openAiCompletion(prompt).unwrap();
    },
    [openAiCompletion]
  );
  return {
    completion,
    description,
    descriptionSuccess,
  };
};
