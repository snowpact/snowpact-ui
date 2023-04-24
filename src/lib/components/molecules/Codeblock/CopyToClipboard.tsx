import { useCallback, useEffect, useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

type CopyToClipboardProps = {
  text: string;

  duration?: number;
};

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, duration = 2000 }) => {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isCopied) {
        setCopied(false);
      }
    }, duration);
    return () => clearTimeout(timer);
  }, [isCopied, duration]);

  const handleCopy = useCallback(() => {
    try {
      navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }, [text]);

  return (
    <button
      className="rounded-md border border-slate-500 p-2 hover:border-slate-400 hover:bg-slate-700"
      name="copy to clipboard"
      onClick={handleCopy}
    >
      {isCopied ? <FaCheck className="text-green-600" /> : <FaCopy />}
    </button>
  );
};
