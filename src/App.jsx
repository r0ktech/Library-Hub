import { useState, useEffect } from "react";
import {
  Search,
  Book,
  Clock,
  BookOpen,
  Library,
  ArrowRight,
  Award,
  Users,
  X,
  Mail,
  Lock,
  User,
  Menu,
} from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function LibraryLandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage:
        "https://i.pinimg.com/736x/53/bb/0b/53bb0bbfce247a40cf744b8b89de4c17.jpg",
      category: "Fiction",
    },
    {
      id: 2,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      coverImage:
        "https://i.pinimg.com/736x/e8/9b/1e/e89b1eebd684ac3a1a50e5cbd2e80d5b.jpg",
      category: "Non-Fiction",
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      coverImage:
        "https://i.pinimg.com/736x/1b/83/b7/1b83b7fd9aba1bc0a5087968dbe4ce70.jpg",
      category: "Sci-Fi",
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      coverImage:
        "https://i.pinimg.com/736x/00/cf/87/00cf87842a7d812210fb6d3069a9da0c.jpg",
      category: "Memoir",
    },
  ];

  const categories = [
    { name: "Fiction", count: 4582, icon: BookOpen },
    { name: "Non-Fiction", count: 3291, icon: Book },
    { name: "Science & Technology", count: 1892, icon: Award },
    { name: "History", count: 2145, icon: Clock },
    { name: "Biography", count: 1243, icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Library size={28} />
              <h1 className="text-2xl font-bold">LibraryHub</h1>
            </div>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">Catalog</li>
                <li className="hover:underline cursor-pointer">Events</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Contact</li>
              </ul>
            </nav>
            <div className="relative">
              <button
                className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition"
                onClick={() => setShowAuthDropdown(!showAuthDropdown)}
              >
                Sign In
              </button>

              {/* Auth Dropdown */}
              {showAuthDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20 overflow-hidden">
                  {/* Tabs */}
                  <div className="flex border-b">
                    <button
                      className={`flex-1 py-3 font-medium ${
                        isLogin
                          ? "text-indigo-600 border-b-2 border-indigo-600"
                          : "text-gray-500"
                      }`}
                      onClick={() => setIsLogin(true)}
                    >
                      Log In
                    </button>
                    <button
                      className={`flex-1 py-3 font-medium ${
                        !isLogin
                          ? "text-indigo-600 border-b-2 border-indigo-600"
                          : "text-gray-500"
                      }`}
                      onClick={() => setIsLogin(false)}
                    >
                      Sign Up
                    </button>
                  </div>

                  {/* Form */}
                  <div className="p-4">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-y-3"
                    >
                      {!isLogin && (
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Full Name
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User size={16} className="text-gray-400" />
                            </div>
                            <input
                              type="text"
                              placeholder="John Doe"
                              className="w-full pl-10 pr-4 py-2 text-sm border border-indigo-400 bg-indigo-50 text-indigo-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-indigo-400"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={16} className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full pl-10 pr-4 py-2 text-sm border border-indigo-400 bg-indigo-50 text-indigo-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-indigo-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock size={16} className="text-gray-400" />
                          </div>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full pl-10 pr-4 py-2 text-sm border border-indigo-400 bg-indigo-50 text-indigo-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-indigo-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      {isLogin && (
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              type="checkbox"
                              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-gray-700"
                            >
                              Remember me
                            </label>
                          </div>
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-500"
                          >
                            Forgot?
                          </a>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                      >
                        {isLogin ? "Log In" : "Create Account"}
                      </button>

                      <div className="relative mt-3">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="px-2 bg-white text-gray-500">
                            Or continue with
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <button
                          type="button"
                          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
                        >
                          {/* Google SVG */}
                          <svg width="18" height="18" viewBox="0 0 48 48">
                            <g>
                              <path
                                fill="#4285F4"
                                d="M44.5 20H24v8.5h11.7C34.7 33.7 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.7 20-21 0-1.3-.1-2.7-.5-4z"
                              />
                              <path
                                fill="#34A853"
                                d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.3 3 24 3c-7.2 0-13 5.8-13 13 0 2.2.6 4.3 1.3 6.2z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M24 44c5.8 0 10.7-3.3 13.7-8.1l-7-5.1C29.5 39.9 25.6 43 21 43c-3.1 0-6-.9-8.3-2.7l-6.2 6.2C13.8 43.5 18.7 45 24 45z"
                              />
                              <path
                                fill="#EA4335"
                                d="M44.5 20H24v8.5h11.7C34.7 33.7 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.7 20-21 0-1.3-.1-2.7-.5-4z"
                              />
                            </g>
                          </svg>
                          Google
                        </button>
                        <button
                          type="button"
                          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
                        >
                          {/* Facebook SVG */}
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="#1877F3"
                          >
                            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                          </svg>
                          Facebook
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Mobile Nav */}
          {menuOpen && (
            <nav className="md:hidden mt-4">
              <ul className="flex flex-col space-y-2 bg-indigo-600 rounded-lg p-4">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">Catalog</li>
                <li className="hover:underline cursor-pointer">Events</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Contact</li>
                <li>
                  <button
                    className="w-full bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition mt-2"
                    onClick={() => setShowAuthDropdown(!showAuthDropdown)}
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Discover, Learn, and Explore
            </h2>
            <p className="text-xl mb-8">
              Access thousands of books, audiobooks, and research materials from
              anywhere, anytime.
            </p>
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for books, authors, or topics..."
                className="w-full px-6 py-4 rounded-full text-gray-800 bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-500">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
        {/* Animated SVG Wave */}
        <div className="absolute left-0 right-0 bottom-0 w-full pointer-events-none">
          <svg
            className="w-full h-24 md:h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              id="wave"
              fill="#fff"
              fillOpacity="1"
              d="
                M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,218.7C672,235,768,213,864,181.3C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
              "
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="
                  M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,218.7C672,235,768,213,864,181.3C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,240C672,235,768,181,864,176C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,218.7C672,235,768,213,864,181.3C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                "
              />
            </path>
          </svg>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-64 relative overflow-hidden group">
                  <img
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-95"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-indigo-600 mb-2">
                    {book.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-4">by {book.author}</p>
                  <button className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <Icon size={24} className="text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </div>
                  <p className="text-gray-500">{category.count} books</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Library Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Why Choose Our Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Extensive Collection
              </h3>
              <p className="text-gray-600">
                Access to over 10,000 books across various genres and
                categories.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
              <p className="text-gray-600">
                Browse and borrow books anytime, anywhere with our digital
                platform.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Events</h3>
              <p className="text-gray-600">
                Join book clubs, author events, and reading challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter for the latest book releases, events,
              and library updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-800 bg-white placeholder-black focus:outline-none"
              />
              <button className="bg-white text-indigo-700 font-medium px-6 py-3 rounded-md hover:bg-indigo-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Library size={24} />
                <h3 className="text-xl font-bold">LibraryHub</h3>
              </div>
              <p className="text-gray-400">
                Your gateway to knowledge and discovery.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 9am - 8pm</li>
                <li>Saturday: 10am - 6pm</li>
                <li>Sunday: 12pm - 5pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} LibraryHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Go to Top Button */}
      {showGoTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
          aria-label="Go to top"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}

      {/* Close dropdown when clicking outside */}
      {showAuthDropdown && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowAuthDropdown(false)}
        ></div>
      )}
    </div>
  );
}
