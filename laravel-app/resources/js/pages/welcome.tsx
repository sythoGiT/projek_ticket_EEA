import { Calendar, MapPin, Users, Award, Clock, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/components/image-with-fallback';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">Eventa</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Schedule</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Speakers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden md:block px-4 py-2 text-gray-700 hover:text-blue-600">
                Login
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-shadow">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white rounded-full shadow-md">
                <span className="text-sm text-gray-700">🎉 Welcome to Eventa 2026</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Make Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">National Seminar</span> & Convention Truly Memorable
              </h1>
              <p className="text-lg text-gray-600">
                Join us for an unforgettable experience with industry leaders, innovative workshops, and networking opportunities that will transform your professional journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-all">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all">
                  Learn More
                </button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">2,500+ Attendees</p>
                  <p className="text-xs text-gray-500">Already registered</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1772053969492-51ce746dd84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb2xvcmZ1bCUyMHBhaW50JTIwc3BsYXNoJTIwZXhwbG9zaW9uJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzc3NTU4ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Colorful splash"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Event</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes our event the most anticipated gathering of professionals in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3-Day Event</h3>
              <p className="text-gray-600">Three full days of workshops, seminars, and networking sessions</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-600 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">50+ Speakers</h3>
              <p className="text-gray-600">Industry experts sharing their knowledge and experience</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certificate</h3>
              <p className="text-gray-600">Get certified upon completion of the program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Speakers */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule & Speakers</h2>
            <p className="text-gray-600">Meet our amazing lineup of speakers</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechCorp', img: 'https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'Michael Chen', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'Emily Davis', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1762968286778-60e65336d5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'David Park', role: 'Marketing Director', img: 'https://images.unsplash.com/photo-1773829020694-413e879d2957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
            ].map((speaker, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-600">{speaker.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">15+</div>
              </div>
              <p className="text-blue-100">Countries</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">2.5K+</div>
              </div>
              <p className="text-blue-100">Attendees</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">50+</div>
              </div>
              <p className="text-blue-100">Sessions</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">100%</div>
              </div>
              <p className="text-blue-100">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold">Eventa</span>
              </div>
              <p className="text-gray-400">Making events memorable since 2020</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Schedule</a></li>
                <li><a href="#" className="hover:text-white">Speakers</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg hover:shadow-lg transition-shadow">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Eventa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}