
export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">
            <a href="/" className="text-blue-600 hover:underline">jointhedonut.com</a>
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-blue-600 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Elevate Your Brand</h1>
          <p className="text-lg mb-8">Innovative marketing solutions tailored for your success.</p>
          <a href="#services" className="bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
              <p>Drive traffic and engagement with our comprehensive digital marketing strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
              <p>Create impactful content that resonates with your audience and enhances brand storytelling.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
              <p>Improve your visibility on search engines and attract organic traffic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          <div className="flex flex-col space-y-6">
            <blockquote className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">"Their marketing strategies transformed our business!"</p>
              <cite className="block mt-4 font-semibold">— Jane Doe, CEO of Business Inc.</cite>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">"Professional, dedicated, and results-driven!"</p>
              <cite className="block mt-4 font-semibold">— John Smith, Founder of Startup Co.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-8">Contact us today and let’s discuss how we can help you grow.</p>
        <a href="#contact" className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">Contact Us</a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2024 <a href="/" className="text-blue-400 hover:underline">jointhedonut.com</a>. All rights reserved.</p>
      </footer>
    </div>
  );
}

