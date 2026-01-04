import React, { useState } from 'react';
import {
  Heart,
  Calendar,
  MapPin,
  Phone,
  ChevronRight,
  ChevronLeft,
  Stars,
  Bus,
  Users,
  Gift,
  Home,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

/**
 * WeddingInvitation App
 * A digital invitation featuring three distinct pages:
 * 1. Main Greeting & Couple Details
 * 2. Itinerary & Venue Information
 * 3. Family Tree & Hospitality Details
 */
const App = () => {
  const [page, setPage] = useState(1);

  // Custom SVG Ganesh Icon for the header
  const WeddingGanesh = () => (
    <div className="flex justify-center mb-6">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-amber-700 drop-shadow-sm">
        <path d="M12,2C10.5,2 9,3 8,4.5C7,6 7,8 8,9.5C8.5,10.2 9.2,10.8 10,11.2C10,12 10,13 9.5,14C9,15 8,16 6,16C5,16 4,15.5 3.5,14.5C3,13.5 3.5,12 5,12H6V10H5C2.5,10 1,12 1,14.5C1,17 3,18.5 5.5,18.5C7.5,18.5 9,17.5 10,16C10.5,17 11.2,18 12,18.5C12.8,18 13.5,17 14,16C15,17.5 16.5,18.5 18.5,18.5C21,18.5 23,17 23,14.5C23,12 21.5,10 19,10H18V12H19C20.5,12 21,13.5 20.5,14.5C20,15.5 19,16 18,16C16,16 15,15 14.5,14C14,13 14,12 14,11.2C14.8,10.8 15.5,10.2 16,9.5C17,8 17,6 16,4.5C15,3 13.5,2 12,2ZM12,4C12.8,4 13.5,4.5 14,5.2C14.5,6 14.5,7 14,7.8C13.5,8.5 12.8,9 12,9C11.2,9 10.5,8.5 10,7.8C9.5,7 9.5,6 10,5.2C10.5,4.5 11.2,4 12,4Z" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfaf3] flex items-center justify-center p-4 font-serif text-amber-950 selection:bg-amber-100">
      <div className="relative w-full max-w-md bg-white shadow-2xl rounded-sm border-[12px] border-double border-amber-100 overflow-hidden flex flex-col min-h-[800px]">

        {/* Decorative Ornamental Corners */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-[6px] border-l-[6px] border-amber-300 rounded-tl-3xl opacity-40 pointer-events-none z-0 m-2"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-[6px] border-r-[6px] border-amber-300 rounded-tr-3xl opacity-40 pointer-events-none z-0 m-2"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[6px] border-l-[6px] border-amber-300 rounded-bl-3xl opacity-40 pointer-events-none z-0 m-2"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[6px] border-r-[6px] border-amber-300 rounded-br-3xl opacity-40 pointer-events-none z-0 m-2"></div>

        {/* Dynamic Content Area */}
        <div className="p-8 flex-grow relative z-10 flex flex-col">

          {/* PAGE 1: Main Invitation */}
          {page === 1 && (
            <div className="text-center flex-grow flex flex-col justify-between animate-in fade-in duration-700">
              <div className="mt-4">
                <WeddingGanesh />
                <p className="text-sm tracking-[0.2em] uppercase font-bold text-amber-900 mb-2 font-display">
                  || Shree Mahaveeray Namah ||
                </p>
                <div className="text-[11px] text-amber-700 leading-relaxed mb-8 italic px-4 font-serif">
                  "Arihant Siddha Upadhyaya Sadhubhyo...<br />
                  Jin-Srut Abhigya Nevemyo ||"
                </div>

                <div className="mb-8 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-32 h-px bg-amber-400"></div>
                  </div>
                  <p className="relative z-10 text-xs uppercase tracking-[0.4em] text-amber-800 font-bold bg-white inline-block px-4 font-display">
                    Wedding Invitation
                  </p>
                  <div className="h-0.5 w-12 bg-amber-400 mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl font-bold text-amber-900 mb-1 font-display tracking-tight">Ishika</h1>
                    <p className="text-lg italic text-amber-600 font-serif">(Shanu)</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Daughter of</p>
                      <p className="font-bold text-lg text-amber-950 font-display">Mrs. Manisha & Mr. Pramesh Kumar Jain</p>
                      <p className="italic text-[11px] text-amber-700">
                        Granddaughter of Mr. Gyan Chand Jain & Late Mrs. Vimla Devi Jain
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 opacity-60">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
                    <Heart className="text-amber-600 fill-amber-100" size={24} strokeWidth={1.5} />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
                  </div>

                  <div>
                    <h1 className="text-5xl font-bold text-amber-900 mb-1 font-display tracking-tight">Vivek</h1>
                    <div className="mt-3 space-y-1">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Son of</p>
                      <p className="font-bold text-lg text-amber-950 font-display">Mrs. Asha Jain & Late Mr. Manchand Ji Jain</p>
                      <p className="italic text-[11px] text-amber-700">
                        Grandson of Mrs. Ganga Devi & Late Mr. Jagmohanlal Ji Jain
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 mb-4">
                <p className="text-xs text-gray-500 italic mb-6 font-serif">
                  "Golden moments of life..."
                </p>
                <button
                  onClick={() => setPage(2)}
                  className="group flex items-center mx-auto text-amber-900 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-amber-50 py-3 px-8 rounded-full border border-amber-200 transition-all active:scale-95 shadow-sm hover:shadow-md hover:border-amber-300"
                >
                  View Detailed Schedule <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* PAGE 2: Schedule & Venue */}
          {page === 2 && (
            <div className="flex-grow animate-in slide-in-from-right duration-500 overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-center mb-8 pt-2">
                <button onClick={() => setPage(1)} className="text-amber-800 flex items-center text-[10px] font-bold uppercase hover:bg-amber-50 px-3 py-1.5 rounded-full border border-transparent hover:border-amber-100 transition-all">
                  <ChevronLeft size={14} className="mr-1" /> Back
                </button>
                <h2 className="text-xl font-bold text-amber-900 uppercase font-display tracking-wider border-b-2 border-amber-100 pb-1">Itinerary 2026</h2>
              </div>

              <div className="space-y-6">
                {/* Event Card 1 */}
                <div className="relative pl-4 border-l-4 border-amber-300 py-1">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-100 border-2 border-amber-300"></div>
                  <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-3">Sunday, Feb 8, 2026 <span className="text-amber-600 normal-case italic font-normal block mt-0.5">(At Residence, Mandawar)</span></p>
                  <div className="space-y-3 bg-amber-50/50 p-4 rounded-r-xl border border-amber-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-display font-medium text-amber-900">Shubh Lagan Lekhan</span>
                      <span className="font-bold text-amber-700 font-mono text-xs">10:15 AM</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-display font-medium text-amber-900">Tel Ceremony</span>
                      <span className="font-bold text-amber-700 font-mono text-xs">11:15 AM</span>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="relative pl-4 border-l-4 border-amber-400 py-1">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-100 border-2 border-amber-400"></div>
                  <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-3">Monday, Feb 9, 2026 <span className="text-amber-600 normal-case italic font-normal block mt-0.5">(At Vandana Resort, Alwar)</span></p>
                  <div className="space-y-3 bg-amber-50/50 p-4 rounded-r-xl border border-amber-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-display font-medium text-amber-900">Haldi Ceremony</span>
                      <span className="font-bold text-amber-700 font-mono text-xs">11:15 AM</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-display font-medium text-amber-900">Mahila Sangeet</span>
                      <span className="font-bold text-amber-700 font-mono text-xs">05:15 PM</span>
                    </div>
                  </div>
                </div>

                {/* Event Card 3 (Main) */}
                <div className="relative pl-4 border-l-4 border-red-700 py-1">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-100 border-2 border-red-700"></div>
                  <p className="text-[11px] font-bold text-red-900 uppercase tracking-wider mb-3">Tuesday, Feb 10, 2026 <span className="text-red-700 normal-case italic font-normal block mt-0.5">(Main Ceremony)</span></p>
                  <div className="bg-red-50/60 p-5 rounded-r-xl border border-red-100 shadow-sm">
                    <div className="space-y-3 text-sm text-gray-800">
                      <div className="flex justify-between items-center border-b border-red-100 pb-2 border-dashed">
                        <span className="font-display font-medium text-red-950">Bhat Ceremony</span>
                        <span className="font-bold text-red-800 font-mono text-xs">09:15 AM</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-red-100 pb-2 border-dashed">
                        <span className="font-display font-medium text-red-950">Baarat Welcome & Feast</span>
                        <span className="font-bold text-red-800 font-mono text-xs">05:15 PM</span>
                      </div>
                      <div className="flex justify-between items-center font-bold text-red-900 pt-1">
                        <span className="font-display text-lg">Sacred Wedding (Phere)</span>
                        <span className="text-[10px] uppercase tracking-wide bg-red-100 px-2 py-1 rounded">Auspicious Muhurat</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-red-200 flex gap-3">
                      <div className="bg-white p-2 rounded-full h-8 w-8 flex items-center justify-center shadow-sm text-red-700 shrink-0">
                        <MapPin size={14} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-red-900 uppercase tracking-wider mb-0.5">Venue</p>
                        <p className="text-xs leading-relaxed text-red-950 font-medium">Vandana Resort, Near A.P.S. School,<br />Moogor Bypass, Alwar</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-100 text-blue-900 flex gap-3 items-start shadow-sm mt-6">
                  <Bus size={18} className="shrink-0 mt-0.5 text-blue-700" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-800 mb-1">Transport Note</p>
                    <p className="text-xs italic leading-relaxed">Bus for Alwar will depart from Mandawar residence on Feb 9 at 08:30 AM.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setPage(3)}
                className="mt-10 flex items-center mx-auto text-amber-900 font-bold uppercase tracking-[0.2em] text-[10px] py-3 px-8 rounded-full border border-amber-200 hover:bg-amber-50 transition-all active:scale-95 shadow-sm hover:shadow-md"
              >
                RSVP & Family Members <ChevronRight size={14} className="ml-2" />
              </button>
            </div>
          )}

          {/* PAGE 3: All Family Members */}
          {page === 3 && (
            <div className="h-full flex flex-col animate-in slide-in-from-right duration-500">
              <div className="flex justify-between items-center mb-8 pt-2">
                <button onClick={() => setPage(2)} className="text-amber-800 flex items-center text-[10px] font-bold uppercase hover:bg-amber-50 px-3 py-1.5 rounded-full border border-transparent hover:border-amber-100 transition-all">
                  <ChevronLeft size={14} className="mr-1" /> Back
                </button>
                <h2 className="text-xl font-bold text-amber-900 uppercase font-display tracking-wider border-b-2 border-amber-100 pb-1">Family Tree</h2>
              </div>

              <div className="space-y-5 flex-grow overflow-y-auto pr-1 custom-scrollbar">
                {/* Nanihal & Bal Aagrah */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border border-amber-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-amber-600 text-white px-3 py-2 text-[10px] font-bold uppercase flex items-center justify-center gap-2 tracking-wider">
                      <Home size={12} /> Nanihal Paksh
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm font-bold text-amber-950 leading-tight font-display mb-2">Shri Nemichand Jain</p>
                      <p className="text-[10px] text-gray-500 italic leading-relaxed">Nitin-Komal • Nirmit, Nirvika</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-pink-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-pink-500 text-white px-3 py-2 text-[10px] font-bold uppercase flex items-center justify-center gap-2 tracking-wider">
                      <Sparkles size={12} /> Bal Aagrah
                    </div>
                    <div className="p-4 text-center flex items-center justify-center h-full">
                      <p className="text-[10px] font-medium text-pink-900 leading-relaxed">Harshita, Riya, Shweta, Pallavi, Akshita, Nirvika</p>
                    </div>
                  </div>
                </div>

                {/* Darshanabhilashi */}
                <div className="bg-white rounded-xl border border-amber-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-800 text-white px-4 py-2 text-[10px] font-bold uppercase flex items-center justify-center gap-2 tracking-widest">
                    <HeartHandshake size={14} /> Darshanabhilashi
                  </div>
                  <div className="px-6 py-5 text-center bg-amber-50/30">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-amber-900 font-display">
                      <span>Naval Kishor</span>
                      <span>Prashant</span>
                      <span>Akshat</span>
                      <span>Abhishek</span>
                    </div>
                    <div className="mt-4 pt-3 border-t border-amber-100">
                      <p className="text-[10px] font-bold text-amber-800 uppercase tracking-[0.2em]">
                        & All Rajeshwari Family & Friends
                      </p>
                    </div>
                  </div>
                </div>

                {/* Utrakanshi & Special Request */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 shadow-sm">
                    <h4 className="font-bold text-amber-900 uppercase text-[10px] border-b border-amber-200 mb-3 pb-1 tracking-widest">Utrakanshi</h4>
                    <p className="font-bold text-xs leading-tight text-amber-950 font-display mb-1">Pramesh-Naman Jain</p>
                    <p className="text-[10px] text-gray-500 font-medium italic mb-3">Mandawar, Dausa</p>
                    <div className="text-[10px] font-bold text-amber-700 space-y-0.5 font-mono">
                      <p>8949514118</p>
                      <p>8104619592</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 shadow-sm">
                    <h4 className="font-bold text-amber-900 uppercase text-[10px] border-b border-amber-200 mb-3 pb-1 tracking-widest">Special Request</h4>
                    <p className="font-bold text-xs text-amber-950 font-display mb-1">Smt. Shanti Devi</p>
                    <p className="text-[10px] leading-relaxed text-gray-600">Aruna-Narendra • Anupriya-Saurabh • Swati-Aman • Prabal, Vardhaman</p>
                  </div>
                </div>

                {/* Hospitality */}
                <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100"></div>
                  <h4 className="font-bold text-amber-900 uppercase text-[10px] tracking-[0.3em] mb-4">Welcomed By</h4>
                  <p className="font-bold text-amber-800 text-xl mb-2 leading-tight font-display">Shri Gyanchand</p>
                  <div className="h-px w-16 bg-amber-200 mx-auto my-3"></div>
                  <p className="text-[11px] text-gray-600 leading-relaxed font-medium px-4">
                    Anil-Rekha • Sunil-Reena • Arvind-Rajkumari • Nishant-Riya • Sandeep-Shweta
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-amber-100 text-center space-y-4 pb-4">
                <p className="text-[10px] font-bold text-amber-900 tracking-[0.3em] uppercase">Soliciting Your Presence</p>
                <div className="bg-amber-50 px-4 py-3 rounded-lg mx-8 border border-amber-100 shadow-sm">
                  <p className="text-[10px] text-amber-800 italic font-medium leading-tight">"Kindly consider this as a personal invitation for the ladies of the house as well"</p>
                </div>
                <p className="text-[10px] font-bold text-amber-950 uppercase tracking-widest italic pt-2 font-display">Gyanchand Arvind Kumar, Mandawar</p>
              </div>
            </div>
          )}
        </div>

        {/* Unified Dots Navigation */}
        <div className="flex justify-center gap-6 py-6 bg-white border-t border-amber-100 relative z-20">
          {[1, 2, 3].map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${page === p ? 'bg-amber-600 scale-125 ring-4 ring-amber-100' : 'bg-amber-200 hover:bg-amber-300'}`}
              aria-label={`Page ${p}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
