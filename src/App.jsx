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
    <div className="flex justify-center mb-4">
      <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor" className="text-amber-700">
        <path d="M12,2C10.5,2 9,3 8,4.5C7,6 7,8 8,9.5C8.5,10.2 9.2,10.8 10,11.2C10,12 10,13 9.5,14C9,15 8,16 6,16C5,16 4,15.5 3.5,14.5C3,13.5 3.5,12 5,12H6V10H5C2.5,10 1,12 1,14.5C1,17 3,18.5 5.5,18.5C7.5,18.5 9,17.5 10,16C10.5,17 11.2,18 12,18.5C12.8,18 13.5,17 14,16C15,17.5 16.5,18.5 18.5,18.5C21,18.5 23,17 23,14.5C23,12 21.5,10 19,10H18V12H19C20.5,12 21,13.5 20.5,14.5C20,15.5 19,16 18,16C16,16 15,15 14.5,14C14,13 14,12 14,11.2C14.8,10.8 15.5,10.2 16,9.5C17,8 17,6 16,4.5C15,3 13.5,2 12,2ZM12,4C12.8,4 13.5,4.5 14,5.2C14.5,6 14.5,7 14,7.8C13.5,8.5 12.8,9 12,9C11.2,9 10.5,8.5 10,7.8C9.5,7 9.5,6 10,5.2C10.5,4.5 11.2,4 12,4Z" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfaf3] flex items-center justify-center p-4 font-serif text-[#4a3427]">
      <div className="relative w-full max-w-lg bg-white shadow-2xl rounded-sm border-8 border-double border-amber-200 overflow-hidden flex flex-col min-h-[750px]">

        {/* Decorative Ornamental Corners */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-amber-600 rounded-tl-lg opacity-20 pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-amber-600 rounded-tr-lg opacity-20 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-amber-600 rounded-bl-lg opacity-20 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-amber-600 rounded-br-lg opacity-20 pointer-events-none z-0"></div>

        {/* Dynamic Content Area */}
        <div className="p-6 md:p-8 flex-grow relative z-10 flex flex-col">

          {/* PAGE 1: Main Invitation */}
          {page === 1 && (
            <div className="text-center flex-grow flex flex-col justify-between animate-in fade-in duration-700">
              <div>
                <WeddingGanesh />
                <p className="text-sm tracking-widest uppercase font-bold text-amber-900 mb-1">
                  || Shree Mahaveeray Namah ||
                </p>
                <div className="text-[10px] text-amber-700 leading-relaxed mb-6 italic px-4">
                  "Arihant Siddha Upadhyaya Sadhubhyo...<br />
                  Jin-Srut Abhigya Nevemyo ||"
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-800 mb-1">Wedding Invitation</p>
                  <div className="h-0.5 w-16 bg-amber-400 mx-auto"></div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold text-amber-900 mb-1">Ishika</h1>
                    <p className="text-sm italic text-amber-700">(Shanu)</p>
                    <div className="mt-2 text-xs text-gray-700">
                      <p className="text-[10px] text-gray-400 uppercase">Daughter of</p>
                      <p className="font-bold text-base">Mrs. Manisha & Mr. Pramesh Kumar Jain</p>
                      <p className="mt-1 italic text-[11px] text-amber-800">
                        Granddaughter of Mr. Gyan Chand Jain & Late Mrs. Vimla Devi Jain
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="h-px w-10 bg-amber-200"></div>
                    <Heart className="mx-4 text-amber-600 fill-amber-50" size={20} />
                    <div className="h-px w-10 bg-amber-200"></div>
                  </div>

                  <div>
                    <h1 className="text-4xl font-bold text-amber-900 mb-1">Vivek</h1>
                    <div className="mt-2 text-xs text-gray-700">
                      <p className="text-[10px] text-gray-400 uppercase">Son of</p>
                      <p className="font-bold text-base">Mrs. Asha Jain & Late Mr. Manchand Ji Jain</p>
                      <p className="mt-1 italic text-[11px] text-amber-800">
                        Grandson of Mrs. Ganga Devi & Late Mr. Jagmohanlal Ji Jain
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-xs text-gray-500 italic mb-6">
                  "Golden moments of life..."
                </p>
                <button
                  onClick={() => setPage(2)}
                  className="flex items-center mx-auto text-amber-800 font-bold uppercase tracking-widest text-xs hover:bg-amber-50 py-2.5 px-6 rounded-full border border-amber-100 transition-all active:scale-95 shadow-sm"
                >
                  View Detailed Schedule <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* PAGE 2: Schedule & Venue */}
          {page === 2 && (
            <div className="flex-grow animate-in slide-in-from-right duration-500 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <button onClick={() => setPage(1)} className="text-amber-800 flex items-center text-xs font-bold uppercase hover:bg-amber-50 p-1.5 rounded transition-colors">
                  <ChevronLeft size={16} /> Back
                </button>
                <h2 className="text-lg font-bold text-amber-900 uppercase">Itinerary 2026</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-amber-50/50 p-3 rounded-lg border-l-4 border-amber-400">
                  <p className="text-[10px] font-bold text-amber-800 uppercase italic">Sunday, Feb 8, 2026 (At Residence, Mandawar)</p>
                  <div className="flex justify-between mt-1 text-sm">
                    <span>Shubh Lagan Lekhan</span>
                    <span className="font-bold">10:15 AM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tel Ceremony</span>
                    <span className="font-bold">11:15 AM</span>
                  </div>
                </div>

                <div className="bg-amber-50/50 p-3 rounded-lg border-l-4 border-amber-400">
                  <p className="text-[10px] font-bold text-amber-800 uppercase italic">Monday, Feb 9, 2026 (At Vandana Resort, Alwar)</p>
                  <div className="flex justify-between mt-1 text-sm">
                    <span>Haldi Ceremony</span>
                    <span className="font-bold">11:15 AM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Mahila Sangeet</span>
                    <span className="font-bold">05:15 PM</span>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-700 shadow-sm">
                  <p className="text-[10px] font-bold text-red-800 uppercase italic">Tuesday, Feb 10, 2026 (Main Ceremony)</p>
                  <div className="space-y-2 mt-2 text-sm text-gray-800">
                    <div className="flex justify-between border-b border-red-100 pb-1">
                      <span>Bhat Ceremony</span>
                      <span className="font-bold">09:15 AM</span>
                    </div>
                    <div className="flex justify-between border-b border-red-100 pb-1">
                      <span>Baarat Welcome & Feast</span>
                      <span className="font-bold">05:15 PM</span>
                    </div>
                    <div className="flex justify-between font-bold text-red-900 py-1">
                      <span>Sacred Wedding (Phere)</span>
                      <span>As per Auspicious Muhurat</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-red-200">
                    <p className="text-[11px] font-bold text-red-900 flex items-center gap-1"><MapPin size={12} /> VENUE:</p>
                    <p className="text-[11px] leading-relaxed">Vandana Resort, Near A.P.S. School,<br />Moogor Bypass, Alwar</p>
                  </div>
                </div>

                <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100 text-blue-900">
                  <p className="text-[10px] font-bold flex items-center gap-1"><Bus size={12} /> TRANSPORT NOTE:</p>
                  <p className="text-[10px] italic">Bus for Alwar will depart from Mandawar residence on Feb 9 at 08:30 AM.</p>
                </div>
              </div>

              <button
                onClick={() => setPage(3)}
                className="mt-8 flex items-center mx-auto text-amber-800 font-bold uppercase tracking-widest text-xs py-2 px-6 rounded-full border border-amber-100 hover:bg-amber-50 transition-all active:scale-95"
              >
                RSVP & Family Members <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          )}

          {/* PAGE 3: All Family Members */}
          {page === 3 && (
            <div className="h-full flex flex-col animate-in slide-in-from-right duration-500">
              <div className="flex justify-between items-center mb-6">
                <button onClick={() => setPage(2)} className="text-amber-800 flex items-center text-xs font-bold uppercase p-2 rounded hover:bg-amber-50">
                  <ChevronLeft size={18} className="mr-1" /> Back
                </button>
                <h2 className="text-xl font-bold text-amber-900 uppercase tracking-[0.2em] border-b-2 border-amber-100 pb-1">Family Tree</h2>
              </div>

              <div className="space-y-4 flex-grow overflow-y-auto pr-1">
                {/* Nanihal & Bal Aagrah */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border-2 border-amber-100 overflow-hidden shadow-sm">
                    <div className="bg-amber-600 text-white px-3 py-1.5 text-[10px] font-bold uppercase flex items-center gap-2">
                      <Home size={12} /> Nanihal Paksh
                    </div>
                    <div className="p-3 text-center">
                      <p className="text-sm font-bold text-amber-950 leading-tight">Shri Nemichand Jain</p>
                      <p className="text-[11px] text-gray-500 mt-1 italic leading-tight">Nitin-Komal • Nirmit, Nirvika</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border-2 border-pink-100 overflow-hidden shadow-sm">
                    <div className="bg-pink-500 text-white px-3 py-1.5 text-[10px] font-bold uppercase flex items-center gap-2">
                      <Sparkles size={12} /> Bal Aagrah
                    </div>
                    <div className="p-3 text-center">
                      <p className="text-[9px] mt-1 font-bold">Harshita, Riya, Shweta, Pallavi, Akshita, Nirvika</p>
                    </div>
                  </div>
                </div>

                {/* Darshanabhilashi */}
                <div className="bg-white rounded-xl border-2 border-amber-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-700 text-white px-4 py-1.5 text-[10px] font-bold uppercase flex items-center gap-2">
                    <HeartHandshake size={12} /> Darshanabhilashi
                  </div>
                  <div className="px-6 py-3 text-center">
                    <div className="grid grid-cols-4 gap-2 text-[12px] font-bold text-amber-900">
                      <span>Naval Kishor</span>
                      <span>Prashant</span>
                      <span>Akshat</span>
                      <span>Abhishek</span>
                    </div>
                    <p className="mt-2 pt-2 border-t border-amber-50 text-[10px] font-bold text-amber-800 uppercase tracking-widest">
                      & All Rajeshwari Family & Friends
                    </p>
                  </div>
                </div>

                {/* Utrakanshi & Special Request */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-50/50 p-4 rounded-xl border-2 border-amber-100">
                    <h4 className="font-bold text-amber-900 uppercase text-[10px] border-b border-amber-200 mb-2 pb-1 tracking-widest">Utrakanshi</h4>
                    <p className="font-bold text-[11px] leading-tight text-amber-950">Pramesh-Naman Jain</p>
                    <p className="text-[10px] text-gray-500 font-semibold italic">Mandawar, Dausa</p>
                    <div className="mt-3 text-[11px] font-bold text-amber-800 space-y-0.5">
                      <p>8949514118</p>
                      <p>8104619592</p>
                    </div>
                  </div>
                  <div className="bg-amber-50/50 p-4 rounded-xl border-2 border-amber-100">
                    <h4 className="font-bold text-amber-900 uppercase text-[10px] border-b border-amber-200 mb-2 pb-1 tracking-widest">Special Request</h4>
                    <p className="font-bold text-[11px]">Smt. Shanti Devi</p>
                    <p className="text-[10px] leading-relaxed">Aruna-Narendra • Anupriya-Saurabh • Swati-Aman • Prabal, Vardhaman</p>
                  </div>
                </div>

                {/* Hospitality */}
                <div className="bg-white p-5 rounded-xl border-2 border-amber-200 shadow-sm text-center">
                  <h4 className="font-bold text-amber-900 uppercase text-[11px] tracking-[0.3em] mb-3">Welcomed By</h4>
                  <p className="font-bold text-amber-800 text-base mb-1 leading-tight">Shri Gyanchand</p>
                  <div className="h-px w-20 bg-amber-100 mx-auto my-2"></div>
                  <p className="text-[11px] text-gray-700 leading-relaxed font-bold px-6">
                    Anil-Rekha • Sunil-Reena • Arvind-Rajkumari • Nishant-Riya • Sandeep-Shweta
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-6 border-t-2 border-amber-100 text-center space-y-2 pb-2">
                <p className="text-xs font-bold text-amber-900 tracking-[0.2em] uppercase">Soliciting Your Presence</p>
                <div className="bg-amber-50/80 p-2 rounded-lg mx-12 border border-amber-200">
                  <p className="text-[10px] text-amber-800 italic font-bold leading-tight">"Kindly consider this as a personal invitation for the ladies of the house as well"</p>
                </div>
                <p className="text-[10px] font-bold text-amber-950 uppercase tracking-widest italic pt-1">Gyanchand Arvind Kumar, Mandawar</p>
              </div>
            </div>
          )}
        </div>

        {/* Unified Dots Navigation */}
        <div className="flex justify-center gap-8 py-6 bg-white border-t-2 border-amber-100 relative z-20">
          {[1, 2, 3].map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${page === p ? 'bg-amber-600 scale-125 ring-4 ring-amber-200' : 'bg-amber-100 hover:bg-amber-200 shadow-inner'}`}
              aria-label={`Page ${p}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
