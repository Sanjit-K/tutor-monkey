import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpenIcon, GraduationCapIcon, RocketIcon } from "lucide-react"
import MovingBlobs from "@/components/MovingBlobs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-yellow-50 to-yellow-100 text-slate-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 border-y border-yellow-200 shadow-2xl overflow-hidden">
        <MovingBlobs />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-kavRz6dadvIxQe6zuU97GMCzvi9KOI.png"
              alt="Tutor Monkey Logo"
              width={120}
              height={120}
              className="animate-fade-in drop-shadow-2xl animate-bounce-slow"
              priority
            />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-yellow-600 md:text-7xl drop-shadow-lg animate-fade-in-up">
            Tutor Monkey!
          </h1>
          <p className="mb-8 text-2xl text-slate-700 animate-fade-in-up animation-delay-200">Swing into success.</p>
          <div className="space-x-4 animate-fade-in-up animation-delay-400">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdNw5NV8idFsfegY1jg3tFaixfTu9Utoc8w8lp2RGYUCWB0ag/viewform"
              target="_blank"
              className="inline-flex"
            >
              <Button className="bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg transition-transform hover:scale-105">
                Sign Up
              </Button>
            </Link>
            <Link href="#about" className="inline-flex">
              <Button
                variant="outline"
                className="bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white shadow-lg transition-transform hover:scale-105"
              >
                Meet The Tutors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative w-full py-24 bg-yellow-100 bg-opacity-40 backdrop-filter backdrop-blur-xl border-y border-yellow-200 shadow-2xl overflow-hidden">
        <MovingBlobs />
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="mb-8 text-4xl font-bold text-center text-yellow-600 drop-shadow-lg animate-fade-in-up">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-slate-700 animate-fade-in-left">
              <div className="shadow-lg bg-white/30 p-6 rounded-lg backdrop-blur-sm">
                <p>
                  Education is a foundational tenet for every individual&apos;s past, present, and future. It is a springboard to the heights of academia, the mysteries of science, and the rigor of the workforce.
                  Wherever your path leads you, education will help you get there.
                </p>
                <p className="mt-4">
                  That&apos;s why it&apos;s our mission to provide K-9 student resources and lessons, with middle and high school
                  specific course loads to ensure your child&apos;s success. We can guarantee personalized, quality education
                  in order to set your future generations up for success.
                </p>
                <p className="mt-4">
                  Our team consists of various students attending a variety of high schools in the DFW area, all with
                  different areas of expertise, ensuring your child gets an exceptional experience.
                </p>
              </div>
            </div>
            <div className="relative group animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tutor%20Monkey%20Flyer%20(4)-gP9To3ayYkpCEj0H5HwFMo0yCU8Xv2.png"
                  alt="Tutor Monkey Services Flyer"
                  width={600}
                  height={700}
                  className="rounded-lg shadow-2xl border-2 border-yellow-200 transition-transform hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative w-full py-16 bg-yellow-100 bg-opacity-40 backdrop-filter backdrop-blur-xl border-y border-yellow-200 shadow-2xl overflow-hidden">
        <MovingBlobs />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-6 text-3xl font-bold text-center text-yellow-600 drop-shadow-lg animate-fade-in-up">
            What We Do
          </h2>
          <p className="mb-12 text-center text-slate-700 max-w-3xl mx-auto bg-white/30 p-6 rounded-lg shadow-lg backdrop-blur-sm animate-fade-in-up animation-delay-200">
          Tutor Monkey is a simple and reliable tutoring company dedicated to helping K-9 students succeed. We connect learners with knowledgeable tutors who provide clear, personalized guidance to tackle academic challenges. Whether it&apos;s mastering math, improving reading skills, or preparing for exams, Tutor Monkey is here to make learning easier and more accessible. Our goal is to support students in achieving their best, one step at a time. We teach a variety of subjects, such as math (pre-algebra all the way to calculus), science (biology, physics, chemistry), advanced English, and even forms of history.  In addition to school subjects, we also teach programming and speech and debate lessons.  We offer both in-person and online lessons.


          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: BookOpenIcon, title: "Learn", description: "Personalized tutoring in various subjects" },
              { icon: GraduationCapIcon, title: "Achieve", description: "Improve grades and academic performance" },
              { icon: RocketIcon, title: "Inspire", description: "Develop a love for learning and growth" },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`bg-white/30 rounded-lg p-6 backdrop-filter backdrop-blur-xl border border-yellow-200 shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <item.icon className="mx-auto mb-4 h-12 w-12 text-yellow-500 drop-shadow-lg" />
                <h3 className="mb-2 text-xl font-semibold text-yellow-700 text-center">{item.title}</h3>
                <p className="text-slate-700 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="relative w-full py-24 border-y border-yellow-200 overflow-hidden">
        <MovingBlobs />
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto bg-white/30 backdrop-filter backdrop-blur-xl rounded-xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border-2 border-yellow-200 animate-fade-in-up">
            <h2 className="mb-6 text-3xl font-bold text-yellow-600 drop-shadow-lg">Get Your First Class Free!</h2>
            <p className="mb-4 text-xl text-slate-700">
              From February 1st to March 1st, 2025, share the learning experience with Tutor Monkey! For every friend
              you refer, you&apos;ll earn one free class to use on any subject. There&apos;s no limit—refer more friends, get more
              free classes!*
            </p>
            <p className="mb-8 text-sm text-slate-600">* Free classes only valid from 2/1/2025 to 3/1/2025</p>
            <div className="mb-8 bg-white/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 drop-shadow-lg">Regular Rates:</h3>
              <p className="text-xl text-slate-700">$20/hr: Any-subject 1-on-1 tutoring</p>
            </div>
            <div className="space-x-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdNw5NV8idFsfegY1jg3tFaixfTu9Utoc8w8lp2RGYUCWB0ag/viewform"
                target="_blank"
                className="inline-flex"
              >
                <Button className="bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg transition-transform hover:scale-105">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        className="relative w-full py-16 bg-yellow-100 bg-opacity-40 backdrop-filter backdrop-blur-xl border-y border-yellow-200 shadow-2xl overflow-hidden"
        id="about"
      >
        <MovingBlobs />
        <div className="container mx-auto px-4 relative z-10">
          <h2
            className="mb-6 text-3xl font-bold text-center text-yellow-600 drop-shadow-lg animate-fade-in-up"
            id="about"
          >
            Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Joshua Wu",
                role: "Co-Founder",
                bio: "Hi, my name is Joshua Wu and I&apos;m a sophomore at Jasper High School. Currently, I&apos;m taking classes such as AP Calculus BC and Engineering Science. Additionally, I received a 5 on the AP Human Geography Exam last year and achieved a perfect score on the math section of the PSAT two years in a row. My specialty subject is math. In my freetime, I like to work on robotics or participating in debate.",
                image: "https://i.postimg.cc/TP2k3xZg/unnamed.jpg",
              },
              {
                name: "Sanjit Konda",
                role: "Co-Founder",
                bio: "Hello! My name is Sanjit Konda and I am a sophomore at Jasper High School. Some of my notable courses are AP Calculus BC, AP environmental science, and Engineering Science. I received a perfect math score on the PSAT for two years in a row. I have the most expertise in science and math. During my freetime, I enjoy video editing, music production, and robotics.",
                image: "https://i.postimg.cc/q7dzVZQD/IMG-0802-Sanjit-Konda.jpg",
              },
              {
                name: "James Chen",
                role: "Co-Founder",
                bio: "Hi! My name is James Chen, and I&apos;m a sophomore at Jasper High School. I&apos;m enrolled in 4 AP courses this year. I received a 5 on the AP Human Geography exam. My focus is reading/writing. In my freetime, I enjoy using applied skills to build personal projects and participating in Speech and Debate at Jasper. I look forward to working with all of you!",
                image: "https://i.postimg.cc/xTHpstvJ/IMG-1402.avif",
              },
              {
                name: "Joshua Gan",
                role: "Co-Founder",
                bio: "Hi, I&apos;m Joshua Gan, a sophomore at Jasper High School. I&apos;m currently projected to be in the top 10 at Jasper, and I&apos;m currently in AP Calculus BC and have scored perfectly on the math section of the PSAT for the last two years. My best subjects are math, English, and history. When I&apos;m free, I enjoy going on Boy Scout outings and reading. I look forward to working with all of you!",
                image: "https://i.postimg.cc/DfqnGdS6/IMG-2883-2.jpg",
              },
              {
                name: "Skanda Gopikannan",
                role: "Co-Founder",
                bio: "My name is Skanda - I&apos;m currently a sophomore at Jasper High School. I&apos;m currently enrolled in AP Environmental Science, AP Seminar, AP European History, and AP World History. I mainly focus on English, Science, History, and the Humanities. I participate in Debate, and have won various different awards at prestigious tournaments and even qualified for the national tournament.",
                image: "https://i.postimg.cc/Zq9wdH55/DSCN2347.jpg",
              },
              {
                name: "Matthew Xie",
                role: "Tutor",
                bio: "Hi! I am Matthew Xie, a sophomore at Jasper High School. Some of my achievements include DHR on AMC10, Gold on BPhO IPC, Silver in PhysicsBowl, and perfect score on USACO Bronze. I also got a 5 in AP Psychology and AP Physics 1, and I am currently taking AP Calculus BC. I specialize in math, physics, and computer science competitions. I also play baseball for Plano West, and in my free time, I enjoy playing piano as well as electric guitar and bass.",
                image: "https://i.postimg.cc/7ZV092gW/f8ee5f5ed6e13f483e0d6da742bdb7bd.jpg",
              },
              {
                name: "Jennifer Duan",
                role: "Tutor",
                bio: "Hi! My name is Jennifer, and I&apos;m a sophomore at Jasper High School. Over the past two years, I&apos;ve taken six AP classes, and I am currently enrolled in AP Calculus BC, AP Environmental Science, Engineering Science, AP Seminar, and AP World History. I qualified for the regional science fair with a project on corticosteroids, winning first place in Jasper. I am also an officer of an organization called &quot;Girls in STEM&quot;, dedicated to helping marginalized women achieve their dreams. Outside of school, I am heavily involved in debate, where I&apos;ve qualified for exclusive state and national tournaments.",
                image: "https://i.postimg.cc/cLrsHKsn/IMG-1199.jpg",
              },
            ].map((member, index) => (
              <div
                key={member.name}
                className="bg-white/30 rounded-lg p-6 backdrop-filter backdrop-blur-xl border border-yellow-200 shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-yellow-200 shadow-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-yellow-700 mb-2 drop-shadow-lg">{member.name}</h3>
                <p className="text-yellow-600 mb-4">{member.role}</p>
                <p className="text-slate-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdT1gBzgk3VThdKw0-bX8gq6GZ7oxgLdWx6Z04DGvSk5NwXlQ/viewform"
              target="_blank"
              className="inline-flex"
            >
              <Button
                variant="outline"
                className="bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white shadow-lg transition-transform hover:scale-105"
              >
                Apply to be a tutor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="relative w-full py-12 bg-yellow-100 bg-opacity-40 backdrop-filter backdrop-blur-xl border-y border-yellow-200 shadow-2xl overflow-hidden">
        <MovingBlobs />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-6 text-3xl font-bold text-yellow-600 drop-shadow-lg animate-fade-in-up">
            Contact Information
          </h2>
          <div className="bg-white/30 p-6 rounded-lg shadow-lg backdrop-blur-sm max-w-md mx-auto animate-fade-in-up animation-delay-200">
            <p className="mb-2 text-slate-700">Mobile: (469) 562-1906</p>
            <p className="text-slate-700">Email: info@tutormonkey.co</p>
          </div>
        </div>
      </section>
    </main>
  )
}

