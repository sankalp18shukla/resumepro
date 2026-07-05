'use client';

import React, { useState } from 'react';
import { TEMPLATES } from '@/templates';
import type { ResumeData } from '@/types/resume';
import { SYSTEM_PROMPTS } from '@/prompts/systemPrompts';
import { MOCK_RESUME_DATA } from '@/utils/mockData';
import { Sparkles, FileDown, Edit, ArrowUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Workspace() {
  const [apiKey, setApiKey] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<keyof typeof TEMPLATES>('plain');
  const [rawProfile, setRawProfile] = useState('');
  const [resumeData, setResumeData] = useState<ResumeData | null>(MOCK_RESUME_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [aiInstruction, setAiInstruction] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [chatLog, setChatLog] = useState<{ role: 'ai' | 'user'; message: string }[]>([
    { role: 'ai', message: "Welcome! Once you paste your raw profile data and click 'Generate', you can instruct me to refine formatting, restructure sections, or scale achievements here." }
  ]);

  const handleGenerate = async (isBoost = false) => {
    if (!rawProfile.trim()) {
      setErrorMsg('Please supply profile data to process.');
      return;
    }
    setErrorMsg('');
    setIsLoading(true);

    try {
      const promptConfig = SYSTEM_PROMPTS[selectedTemplate] || SYSTEM_PROMPTS.plain;
      const systemPrompt = isBoost ? SYSTEM_PROMPTS.boost : promptConfig.systemInstructions;

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rawProfile: promptConfig.userPromptWrapper(rawProfile),
          isBoost,
          systemPrompt,
          userApiKey: apiKey.trim() || undefined
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Request failed.');
      }

      setResumeData(resData);
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred during generation.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAiEdit = async () => {
    if (!aiInstruction.trim() || !resumeData) return;
    const currentPrompt = aiInstruction;
    setChatLog(prev => [...prev, { role: 'user', message: currentPrompt }]);
    setAiInstruction('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rawProfile: JSON.stringify(resumeData),
          isBoost: false,
          systemPrompt: `You are an elite formatting and refinement engine. 
Modify the existing structured resume JSON based on the user's specific textual instructions: "${currentPrompt}".
Preserve all unmodified fields precisely. Output only the updated JSON object matching the standard schema. Do not write markdown wraps or notes.`,
          userApiKey: apiKey.trim() || undefined
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Refinement request failed.');
      }

      setResumeData(resData);
      setChatLog(prev => [...prev, { role: 'ai', message: 'I have applied those refinements directly to your layout.' }]);
    } catch (err: any) {
      setChatLog(prev => [...prev, { role: 'ai', message: `Refinement Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!resumeData) return;
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('resume-pdf-container');
    if (!element) return;

    const options = {
      margin: 0,
      filename: `${resumeData.name.replace(/\s+/g, '_')}_Resume.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().set(options).from(element).save();
  };

  const toggleManualEdit = () => {
    const editables = document.querySelectorAll('.editable');
    const nextEditState = !isEditMode;
    setIsEditMode(nextEditState);
    editables.forEach(el => {
      (el as HTMLElement).contentEditable = nextEditState ? "true" : "false";
    });
  };

  const ActiveTemplate = TEMPLATES[selectedTemplate] || TEMPLATES.plain;
  const ActiveTemplateComponent = ActiveTemplate.component;

  return (
    <div className="flex h-screen w-screen bg-[#11141a] text-gray-100 overflow-hidden font-sans">
      

      <aside className="w-80 border-r border-gray-800 bg-[#161a23] p-6 flex flex-col gap-6 overflow-y-auto shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <span className="font-semibold text-lg tracking-tight">Workspace</span>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Select Style</label>
          <select
            className="bg-[#0f1218] border border-gray-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 transition text-white"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value as keyof typeof TEMPLATES)}
          >
            {Object.entries(TEMPLATES).map(([id, config]) => (
              <option key={id} value={id}>
                {config.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">User API Key (Optional)</label>
          <input
            type="password"
            className="bg-[#0f1218] border border-gray-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 transition text-white"
            placeholder="Gemini API Key Override"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 flex-grow">
          <label className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Raw Profile Input</label>
          <textarea
            className="w-full h-48 bg-[#0f1218] border border-gray-800 rounded-lg p-3 text-xs leading-relaxed focus:outline-none focus:border-amber-500 transition resize-none text-white font-mono"
            placeholder="Paste raw text, resumes, work history, or linkedin profile..."
            value={rawProfile}
            onChange={(e) => setRawProfile(e.target.value)}
          />
        </div>

        {errorMsg && <div className="p-3 bg-red-950/40 border border-red-800 text-red-400 text-xs rounded-lg">{errorMsg}</div>}

        <button
          onClick={() => handleGenerate(false)}
          disabled={isLoading}
          className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          <Sparkles className="h-4 w-4" />
          {isLoading ? 'Processing...' : 'Generate Layout'}
        </button>
      </aside>

      <main className="flex-grow bg-[#0f1115] flex flex-col items-center justify-start p-8 overflow-y-auto">
        <div className="mb-6 flex gap-2">
          <button className="h-8 w-8 rounded-full bg-white text-black font-semibold flex items-center justify-center text-xs">1</button>
          <button className="h-8 w-8 rounded-full bg-gray-800 text-gray-400 font-semibold flex items-center justify-center text-xs">2</button>
        </div>


        <div className="origin-top transition-transform duration-200 shadow-2xl scale-[0.75] xl:scale-[0.85] 2xl:scale-[1.0] my-4 rounded-sm">
          <div id="resume-pdf-container">
            {resumeData && <ActiveTemplateComponent data={resumeData} />}
          </div>
        </div>
      </main>


      <aside className="w-80 border-l border-gray-800 bg-[#161a23] p-6 flex flex-col overflow-hidden shrink-0">
        <div className="font-semibold text-base mb-4 text-white">Refine with Agent</div>

        <div className="flex-grow overflow-y-auto mb-4 flex flex-col gap-4 pr-1">
          {chatLog.map((chat, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg text-xs leading-relaxed max-w-[90%] ${
                chat.role === 'ai' ? 'bg-[#1b2230] text-gray-200 self-start' : 'bg-blue-600/20 text-blue-200 border border-blue-800/40 self-end'
              }`}
            >
              {chat.message}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          {resumeData && (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={toggleManualEdit}
                className={`font-medium py-2 rounded-lg text-xs flex items-center justify-center gap-1.5 transition ${
                  isEditMode ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                <Edit className="h-3.5 w-3.5" />
                {isEditMode ? 'Finish Edit' : 'Manual Edit'}
              </button>
              <button
                onClick={handleDownloadPdf}
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg text-xs flex items-center justify-center gap-1.5 transition"
              >
                <FileDown className="h-3.5 w-3.5" />
                Export PDF
              </button>
            </div>
          )}

          {resumeData && (
            <div className="relative flex items-center bg-[#0f1218] border border-gray-800 rounded-xl p-1 focus-within:border-gray-700">
              <input
                type="text"
                className="bg-transparent text-xs text-white p-2 w-full focus:outline-none"
                placeholder="Ask Agent to rewrite/shorten..."
                value={aiInstruction}
                onChange={(e) => setAiInstruction(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiEdit()}
              />
              <button
                onClick={handleAiEdit}
                className="h-8 w-8 rounded-lg bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </aside>

    </div>
  );
}