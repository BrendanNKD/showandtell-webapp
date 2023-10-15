
import { promptRequest } from "domain/types/openAi/completion";
import { useCallback } from "react";
import { useOpenAiCompletionMutation } from "services/openAi/completion";

export const useOpenAiCompletion = () => {
  const [
    openAiCompletion,
    {
      data: description,
      isSuccess: descriptionSuccess,

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
    descriptionloading,
  };
};
