import Link from "next/link";
import { paytoneOne } from "@/app/layout";

const InfoContact = () => {
  return (
    <div>
      <h3 className="subtitle mb-4">contact</h3>
      <Link
        href="tel:665051466"
        className={`${paytoneOne.className} text-2xl font-normal`}
        aria-label="Call us at +34 665 051 466"
      >
        +34 665 051 466
      </Link>
      <div className="flex flex-col items-start gap-2 mt-2">
        <Link href="mailto:vladtwince@gmail.com">vladtwince@gmail.com</Link>
        <address className="not-italic">Madrid, Spain</address>
      </div>
    </div>
  );
};

export default InfoContact;
