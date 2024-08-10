import Link from "next/link";
import { paytoneOne } from "@/app/[locale]/layout";

const Logo = () => {
  return (
    <div>
      <Link
        href={"/"}
        className={`inline-block ${paytoneOne.className} text-logo text-white font-normal md:text-6xl`}
      >
        VV
      </Link>
    </div>
  );
};

export default Logo;
