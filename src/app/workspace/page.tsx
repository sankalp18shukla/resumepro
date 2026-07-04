import { MOCK_RESUME_DATA } from "@/src/utils/mockData"; 
const [resumeData, setResumeData] = useState<ResumeData | null>(MOCK_RESUME_DATA);

<div className="flex flex-col gap-2">
    <label className= "text-xs font-bold uppercase text-gray-400 tacking-wider">Select Style</label>
    <select
      className= "bg-[#0f1218] border border-gray-800 rounded- ig px-3 py-2 text-sm focus:outline-none focus:border-amber-500 transistion text-white"
      value={selectedTemplate}
      onChange={(e) => setSelectedTemplate(e.target.value as any)}
    >
    {Object.entries(TEMPLATES).map(([id, config]) => (
        <option key={id} value={id}>
            {config.name}
        </option>
    ))}
    </select>
</div>
