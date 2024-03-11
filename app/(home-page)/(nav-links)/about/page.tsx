import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About FlapLabs
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At FlapLabs, we are a team of passionate innovators dedicated to
                creating user-centric apps that simplify life. We believe that
                technology should be an extension of your daily experiences,
                seamlessly blending into your routine and making it more
                efficient, productive, and enjoyable.
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our approach is rooted in a deep understanding of user needs and
                a commitment to delivering exceptional solutions. We combine
                cutting-edge technology with thoughtful design and intuitive
                interfaces to create apps that are not only functional but also
                delightful to use.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our mission is to empower individuals and businesses with
                  innovative digital solutions that streamline their daily
                  activities, boost productivity, and enhance overall quality of
                  life.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Values</h2>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                  <li>User-centric design</li>
                  <li>Innovation and creativity</li>
                  <li>Simplicity and elegance</li>
                  <li>Continuous improvement</li>
                  <li>Collaboration and teamwork</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
