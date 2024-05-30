import footerBg from "@/asset/images/pages/footer-bg.png";
import RootContainer from "@/components/shared/RootContainer";
import {
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import DreamLogo from "../Navbar/DreamLogo";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${footerBg.src}')`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="py-20 pt-36 bg-drd-light-green text-drd-green"
      >
        <RootContainer>
          <div className="flex  justify-between">
            <div>
              <div className="flex items-center gap-4 pb-5">
                <DreamLogo />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, ratione.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg">Contact Information</h1>
              <div className="space-y-3 pt-5 ">
                <p className="flex items-center gap-2">
                  <FaLocationDot color="black" />
                  <span>34,5d,Dream Destination</span>
                </p>
                <p className="flex items-center gap-2">
                  <MdEmail color="black" />
                  <span>info@dream-destination.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone color="black" />
                  <span>+880 1771900906</span>
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg">Quick Link</h1>
              <ul className="space-y-3 pt-5 ">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-lg">Follow Us</h1>
              <ul className="flex items-center gap-4 pt-5">
                <li>
                  <Tooltip title="Facebook">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<FaFacebookF />}
                    />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Instagram">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<InstagramOutlined />}
                    />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Youtube">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<YoutubeOutlined />}
                    />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Linkedin">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<LinkedinOutlined />}
                    />
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </RootContainer>
      </div>
      <div className="bg-[#00294D]">
        <RootContainer>
          <div className="flex justify-center gap-4 items-center  py-8 text-center text-drd-light-yellow">
            <p>
              © 2024 - {new Date().getFullYear()} Dream Destinations. All Rights
              Reserved
            </p>
            <p>Privacy Policy</p>
          </div>
        </RootContainer>
      </div>
    </>
  );
};

export default Footer;
