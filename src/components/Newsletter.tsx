
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Here you would typically send the email to your backend
  };

  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Hydrated, Stay Informed
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get the latest updates on new products, outdoor tips, and exclusive offers delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
                required
              />
              <Button 
                type="submit"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </form>

          <p className="text-sm text-green-200">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
