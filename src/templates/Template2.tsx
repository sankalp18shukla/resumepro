import type { ResumeData } from '@/types/resume';

type Template2Props = {
  data: ResumeData;
};

export function Template2({ data }: Template2Props) {
  return (
    <div className="min-w-[820px] max-w-[820px] bg-slate-900 p-8 text-slate-100 shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{data.name}</h1>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-amber-400">{data.headline}</p>
        </div>
        <div className="text-right text-sm text-slate-400">
          <p>{data.contact.email}</p>
          <p>{data.contact.location}</p>
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-slate-300">{data.description}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Skills</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span key={skill.name} className="rounded-full border border-slate-700 px-3 py-1 text-sm">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Experience</h2>
          {data.experience.slice(0, 2).map((item, index) => (
            <div key={`${item.company}-${index}`} className="mt-2 text-sm text-slate-300">
              <p className="font-medium">{item.title} · {item.company}</p>
              <p className="text-slate-400">{item.timeline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
