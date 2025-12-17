export default function Schedule() {
  return (
    <section id="schedule" className="py-32 sm:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 z-10">
        <div className="mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-stone-900 mb-12">Schedule & Pricing</h2>
          <p className="text-2xl text-stone-600 font-light">Find a class that fits your schedule</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <div className="font-medium text-stone-900 text-2xl mb-2">Monday</div>
                  <div className="text-lg text-stone-600 font-light">Hatha Foundations</div>
                </div>
                <div className="text-lg text-stone-700 mt-4 sm:mt-0 sm:text-right">
                  <div className="font-medium">6:00 PM - 7:00 PM</div>
                  <div className="text-stone-500 font-light">Online (Zoom)</div>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-green-200/50 to-transparent"></div>
            </div>
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <div className="font-medium text-stone-900 text-2xl mb-2">Wednesday</div>
                  <div className="text-lg text-stone-600 font-light">Ashtanga Flow</div>
                </div>
                <div className="text-lg text-stone-700 mt-4 sm:mt-0 sm:text-right">
                  <div className="font-medium">6:30 PM - 7:30 PM</div>
                  <div className="text-stone-500 font-light">In-Person • Malmö / Copenhagen</div>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-amber-200/50 to-transparent"></div>
            </div>
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <div className="font-medium text-stone-900 text-2xl mb-2">Sunday</div>
                  <div className="text-lg text-stone-600 font-light">Yin & Rest</div>
                </div>
                <div className="text-lg text-stone-700 mt-4 sm:mt-0 sm:text-right">
                  <div className="font-medium">7:00 PM - 8:15 PM</div>
                  <div className="text-stone-500 font-light">Online (Zoom)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-medium text-stone-900 text-2xl mb-2">Drop-In Class</div>
                  <div className="text-base text-stone-600 font-light">Single class</div>
                </div>
                <div className="text-4xl font-extralight text-green-700">€18</div>
              </div>
              <div className="h-px bg-gradient-to-r from-green-200/50 to-transparent"></div>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-medium text-stone-900 text-2xl mb-2">5-Class Pass</div>
                  <div className="text-base text-stone-600 font-light">Valid for 8 weeks</div>
                </div>
                <div className="text-4xl font-extralight text-stone-900">€80</div>
              </div>
              <div className="h-px bg-gradient-to-r from-amber-200/50 to-transparent"></div>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-medium text-stone-900 text-2xl mb-2">Monthly Membership</div>
                  <div className="text-base text-stone-600 font-light">2-3 classes per week</div>
                </div>
                <div className="text-4xl font-extralight text-stone-900">€120</div>
              </div>
              <div className="h-px bg-gradient-to-r from-amber-200/50 to-transparent"></div>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-medium text-stone-900 text-2xl mb-2">Private Session</div>
                  <div className="text-base text-stone-600 font-light">1-on-1, 60 minutes</div>
                </div>
                <div className="text-4xl font-extralight text-stone-900">€70</div>
              </div>
            </div>
            
            <div className="pt-8">
              <a
                href="mailto:you@example.com"
                className="block w-full text-center rounded-full bg-green-700 px-8 py-5 text-base font-medium text-white shadow-lg hover:shadow-xl transition-all hover:bg-green-800"
              >
                Book Your Class
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
