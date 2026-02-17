type SkillCardProps = {
  skill: string;
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="p-6 bg-white shadow rounded-xl text-center">
      {skill}
    </div>
  );
}
