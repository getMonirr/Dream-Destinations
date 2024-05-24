import RootContainer from "@/components/shared/RootContainer";
import {
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="py-20 bg-[#6D6D6D] text-[#DFDFDF]">
        <RootContainer>
          <div className="flex  justify-between">
            <div>
              <div className="flex items-center gap-4 pb-5">
                <h1>logo</h1>
                <h1>Dream Destinations</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, ratione.
              </p>
            </div>
            <div>
              <h1>Contact Information</h1>
              <div className="space-y-3 pt-5 ">
                <p className="flex items-center gap-2">
                  <FaLocationDot color="black" />
                  <span>Location</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaLocationDot color="black" />
                  <span>Location</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaLocationDot color="black" />
                  <span>Location</span>
                </p>
              </div>
            </div>
            <div>
              <h1>Quick Link</h1>
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
              <h1>Follow Us</h1>
              <ul className="flex items-center gap-4 pt-5">
                <li>
                  <Tooltip title="search">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<FaFacebookF />}
                    />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="search">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<InstagramOutlined />}
                    />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="search">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<YoutubeOutlined />}
                    />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="search">
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
      <div className="bg-black">
        <RootContainer>
          <div className="flex justify-center gap-4 items-center  py-8 text-center text-[#DFDFDF]">
            <p>© 2021 Dream Destinations. All Rights Reserved</p>
            <p>Privacy Policy</p>
          </div>
        </RootContainer>
      </div>
    </>
  );
};

export default Footer;
