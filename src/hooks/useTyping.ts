import { useEffect, useState } from 'react';

const useTyping = (tabSentences: string[], initialDelay: number = 0) => {

  const [dynamicSentences, setDynamicSentences] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);
  const [letterIndex, setLetterIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(initialDelay > 0 && initialDelay !== 0);
  const [delayCompleted, setDelayCompleted] = useState<boolean>(false);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(
        () => {
          const currentSentence = tabSentences[sentenceIndex];

          if ( isPaused ) {
            if ( !delayCompleted ) {
              setDelayCompleted(true);
            }
            return;
          }

          if ( isDeleting ) {
            if ( letterIndex > 0 ) {
              setLetterIndex((prevIndex: number) => prevIndex - 1);
              setDynamicSentences((prevText: string) => prevText.slice(0, -1));
            } else {
              setIsDeleting(false);
              setSentenceIndex((prevIndex: number) =>
                prevIndex === tabSentences.length - 1 ? 0 : prevIndex + 1
              );
            }
          } else {
            if ( letterIndex < currentSentence.length ) {
              setLetterIndex((prevIndex: number) => prevIndex + 1);
              setDynamicSentences(
                (prevText: string) => prevText + currentSentence[letterIndex]
              );
            } else {
              setIsDeleting(true);
              setIsPaused(true);
              setTimeout(() => {
                setIsPaused(false);
              }, 1500);
            }
          }
        },
        isDeleting || isPaused ? 50 : 100
      );
    };

    if ( initialDelay > 0 && !delayCompleted ) {
      setTimeout(() => {
        setDelayCompleted(true);
        setIsPaused(false);
        startTyping();
      }, initialDelay);
    } else {
      startTyping();
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [
    tabSentences,
    initialDelay,
    isDeleting,
    isPaused,
    letterIndex,
    sentenceIndex,
    delayCompleted
  ]);

  return dynamicSentences;
};

export default useTyping;
