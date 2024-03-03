import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to FlapLabs
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We build user-centric apps that simplify life. From productivity
              tools to entertainment experiences, we're dedicated to innovation.
            </p>
            <div className="mx-auto max-w-[700px]">
              <Button variant="outline" className="mx-4">
                <Link href="/privacy-policy" className="text-white">
                  Privacy Policy
                </Link>
              </Button>
              <Button variant="outline" className="mx-4">
                <Link href="/projects" className="text-white">
                  Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
