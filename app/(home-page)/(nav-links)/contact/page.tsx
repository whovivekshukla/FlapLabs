import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Contact Us
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We'd love to hear from you! Whether you have a question,
                feedback, or just want to say hello, don't hesitate to reach
                out.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Email</h2>

                <p className="text-gray-500 dark:text-gray-400 mt-4">
                  Email: contact@flaplabs.tech
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <SocialIcon url="https://x.com/FlapLabs" target="_blank" />
                    <SocialIcon
                      url="https://linkedin.com/company/FlapLabs"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
