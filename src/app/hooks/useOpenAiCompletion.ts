import { promptRequest } from "domain/types/openAi/completion";
import { useCallback } from "react";
import {
  useCheckMutation,
  useOpenAiCompletionMutation,
} from "services/openAi/completion";

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

export const useCheck = () => {
  const [
    check,
    {
      data: answer,
      isSuccess: answerSuccess,

      isLoading: answerloading,
    },
  ] = useCheckMutation();

  const checkAnswer = useCallback(
    async (data: any) => {
      await check(data).unwrap();
    },
    [check]
  );
  return {
    checkAnswer,
    answer,
    answerSuccess,
    answerloading,
  };
};
