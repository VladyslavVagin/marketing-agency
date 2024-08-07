import Image from "next/image";
import { paytoneOne } from "@/app/layout";

const ContactTitle = () => {
  return (
    <div className="relative">
      <p className="subtitle">contact</p>
      <h2 className={`${paytoneOne.className} relative z-10 title`}>Get In Touch</h2>
      <p className="title-text mt-9 mb-12">
        If you&apos;re interested in collaborating, feel free to reach out using this
        form. I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions.
      </p>
      <Image
        className="absolute z-0 top-0 right-0"
        src="/images/hero/shape.png"
        alt="Shape for decoration"
        width={176}
        height={176}
      />
    </div>
  );
};

export default ContactTitle;
