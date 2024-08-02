import Link from "next/link";
import { paytoneOne } from "@/app/layout";

const Logo = () => {
  return (
    <div>
      <Link
        href={"/"}
        className={`inline-block ${paytoneOne.className} text-logo text-white font-normal`}
      >
        VV
      </Link>
    </div>
  );
};

export default Logo;
