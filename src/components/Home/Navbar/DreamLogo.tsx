import logo from "@/asset/images/home/dream.png";
import Image from "next/image";
import Link from "next/link";

interface IDreamLogo {
  isTitleShow?: boolean;
}

const DreamLogo = ({ isTitleShow = true }: IDreamLogo) => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center gap-4">
        <div>
          <Image
            src={logo.src}
            alt="logo"
            width={40}
            height={40}
            style={{
              cursor: "pointer",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        {isTitleShow && (
          <h1 className="text-xl font-bold text-drd-dark-green">
            Dream Destination
          </h1>
        )}
      </div>
    </Link>
  );
};

export default DreamLogo;
