import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Products
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At FlapLabs, we strive to create innovative and user-friendly
                apps that simplify your daily life. Our products are designed
                with a focus on intuitive interfaces, seamless functionality,
                and a delightful user experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/superlift.png"
                  alt="Product 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Superlift</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Superlift is an AI powered diet and excercise planner app.
                  </p>
                  <Link
                    href="https://superlift.flaplabs.tech"
                    className="inline-block mt-4 text-blue-500 hover:text-blue-700"
                    target="_blank"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/superaim.png"
                  alt="Product 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Superaim</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Manage your goals, be accountable and achieve them in no
                    time
                  </p>
                  <Link
                    href="https://superaim.flaplabs.tech"
                    className="inline-block mt-4 text-blue-500 hover:text-blue-700"
                    target="_blank"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/superstory.png"
                  alt="Product 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Superstory</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    SuperStory is the best place to read and share stories for
                    kids and adults.
                  </p>
                  <Link
                    href="https://superstory.flaplabs.tech"
                    className="inline-block mt-4 text-blue-500 hover:text-blue-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
