interface TextTitlesProps {
  text: string;
}

export default function TextTitles({ text }: TextTitlesProps) {
  return (
    <h1 className="text-center sm:text-start text-xl sm:text-3xl lg:text-6xl">
      {text}
    </h1>
  );
}
