import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptText = ({ children }: { children: string }) => {
  const intervalRef = useRef<number | null>(null);
  const [text, setText] = useState(children);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = window.setInterval(() => {
      const scrambled = children
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= children.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    setText(children);
  };

  return (
    <motion.span onMouseEnter={scramble} onMouseLeave={stopScramble}>
      {text}
    </motion.span>
  );
};

export default EncryptText;
