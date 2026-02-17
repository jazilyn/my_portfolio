type SectionTitleProps = {
  text: string;
};

export default function SectionTitle({ text }: SectionTitleProps) {
  return <h1 className="text-4xl font-bold mb-12">{text}</h1>;
}
