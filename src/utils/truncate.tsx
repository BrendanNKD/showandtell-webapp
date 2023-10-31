function truncateText(text: string, wordsLimit: number): string {
  const words = text.split(" ");

  const truncatedText = words.slice(0, wordsLimit).join(" ");

  return `${truncatedText}${words.length > wordsLimit ? " ......." : ""}`;
}

export default truncateText;
