import type { ResumeData } from '@/types/resume';

type PlainTemplateProps = {
  data: ResumeData;
};

export function PlainTemplate({ data }: PlainTemplateProps) {
  return (
    <div className="min-w-[820px] max-w-[820px] bg-white p-8 text-slate-900 shadow-lg">
      <h1 className="text-3xl font-semibold">{data.name}</h1>
      <p className="mt-2 text-sm text-slate-600">{data.headline}</p>
      <p className="mt-4 text-sm leading-6 text-slate-700">{data.description}</p>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold">Experience</h2>
        {data.experience.map((item, index) => (
          <div key={`${item.company}-${index}`} className="mt-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{item.title} · {item.company}</h3>
              <span className="text-sm text-slate-500">{item.timeline}</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              {item.points.map((point, pointIndex) => (
                <li key={`${point}-${pointIndex}`}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
