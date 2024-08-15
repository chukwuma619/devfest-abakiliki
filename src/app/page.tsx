"use client";

import { useState } from "react";

import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
import logoTransistor from "@/../public/images/logos/transistor.svg";
import logoMirage from "@/../public/images/logos/mirage.svg";
import logoStatamic from "@/../public/images/logos/statamic.svg";
import logoStaticKit from "@/../public/images/logos/statickit.svg";
import logoTuple from "@/../public/images/logos/tuple.svg";
import logoLaravel from "@/../public/images/logos/laravel.svg";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SocialLink,
  XIcon,
} from "@/components/social-icons";

const sponsors = [
  { name: "Transistor", logo: logoTransistor },
  { name: "Tuple", logo: logoTuple },
  { name: "StaticKit", logo: logoStaticKit },
  { name: "Mirage", logo: logoMirage },
  { name: "Laravel", logo: logoLaravel },
  { name: "Statamic", logo: logoStatamic },
];
export default function Example() {
  return (
    <>
      <header className="relative z-50 flex-none lg:pt-11">
        <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
          <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
            <Image
              src={"/images/DF24-Logo.png"}
              height={51}
              alt=""
              width={176}
            />
          </div>

          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
            <Button href="#">Get your tickets</Button>
          </div>
        </Container>
      </header>

      <div className="relative py-20 sm:pb-24 sm:pt-36">
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="font-display text-5xl font-bold tracking-tighter text-gray-900 sm:text-7xl">
              DevFest Abakaliki 2024
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-gray-600">
              <p>
                Join us at DevFest Abakaliki 2024, the biggest tech event in
                Abakaliki! Connect with developers, designers, and tech
                enthusiasts, and explore the latest trends through exciting
                speakers, workshops, and hands-on sessions. Whether you&apos;re
                an expert or just starting out, there&apos;s something here for
                you.
              </p>
            </div>
            <Button href="#" className="mt-10 w-full sm:hidden">
              Get your tickets
            </Button>
            <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
              {[
                ["Speakers", "5"],
                ["People Attending", "500"],
                ["Venue", "Government House"],
                ["Location", "Abakaliki"],
              ].map(([name, value]) => (
                <div key={name}>
                  <dt className="font-mono text-sm text-gray-600">{name}</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-gray-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>

      <section
        id="speakers"
        aria-labelledby="speakers-title"
        className="py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-gray-900 sm:text-5xl"
            >
              Speakers
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
            {[1, 2, 3, 4].map((value, index) => {
              return (
                <>
                  <div className="flex flex-col p-2 hover:border-2 border-[#ceb332] rounded-md transition-colors mx-auto">
                    <div>
                      <Image
                        src={"/images/profile-image.JPG"}
                        className="object-cover rounded-md"
                        alt=""
                        width={350}
                        height={350}
                      />
                    </div>
                    <div className="pt-2 pb-1 space-y-2">
                      <div>
                        <h3 className="text-xl font-display font-semibold text-gray-900 tracking-tight">
                          Chukwuma Ebube
                        </h3>
                        <p className="text-sm text-gray-600">@ebubedev</p>
                      </div>

                      <p className="text-sm">Software Engineer, Enertel ltd</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="speakers"
        aria-labelledby="speakers-title"
        className="py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-gray-900 sm:text-5xl"
            >
              Sponsors
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <Image
                key={sponsor.name}
                src={sponsor.logo}
                alt={sponsor.name}
                unoptimized
              />
            ))}
          </div>
        </Container>
      </section>

      <footer className="flex-none py-16">
        <Container className="flex flex-col items-center justify-between md:flex-row">
          <Image src={"/images/DF24-Logo.png"} height={51} alt="" width={176} />
          <div>
            <div className="mt-6 flex items-center justify-center md:justify-end gap-6">
              <SocialLink
                href="https://twitter.com/"
                aria-label="Follow on X"
                icon={XIcon}
              />
              <SocialLink
                href="https://www.instagram.com/"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://github.com/"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
            <p className="mt-4 text-base text-slate-500">
              Copyright &copy; {new Date().getFullYear()} Devfest Abakaliki. All
              rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
