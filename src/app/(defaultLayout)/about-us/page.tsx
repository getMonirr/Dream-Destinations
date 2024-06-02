import DrdSection from "@/components/shared/DrdSection";
import PageStarter from "@/components/shared/PageStarter";
import RootContainer from "@/components/shared/RootContainer";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

import manOne from "@/asset/team/man1.jpg";
import manTwo from "@/asset/team/man2.jpg";
import manThree from "@/asset/team/man3.jpg";
import manFour from "@/asset/team/man4.jpg";
import manFive from "@/asset/team/man5.jpg";
import manSix from "@/asset/team/man6.jpg";
// import ContactUs from "@/components/About/ContactUs";
import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import("@/components/About/ContactUs"), {
  ssr: false,
});

const AboutUs = () => {
  const teamList = [
    {
      name: "John New",
      title: "Travel Expert",
      src: manOne,
    },
    {
      name: "Jane Olimpia",
      title: "Travel Expert",
      src: manTwo,
    },
    {
      name: "Tom Limpo",
      title: "Travel Expert",
      src: manThree,
    },
    {
      name: "Doe Jane",
      title: "Travel Expert",
      src: manFour,
    },
    {
      name: "Kane Asporia",
      title: "Travel Expert",
      src: manFive,
    },
    {
      name: "Nane kipia",
      title: "Travel Expert",
      src: manSix,
    },
    {
      name: "Iame gusia",
      title: "Travel Expert",
      src: manTwo,
    },
    {
      name: "Hame fusia",
      title: "Travel Expert",
      src: manThree,
    },
  ];

  return (
    <div>
      <PageStarter name="About Us" />
      <div className="bg-drd-light-green pb-16">
        <RootContainer>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div>
                <DrdSection
                  name="Why choose us"
                  description="We are a team of experienced travel experts who are passionate about creating unforgettable travel experiences for our clients.!"
                />
                <Title level={2}>Our Mission</Title>
                <Paragraph>
                  Dream Destinations is a travel agency that specializes in
                  creating custom travel experiences for our clients. We offer
                  personalized travel packages that cater to your specific needs
                  and desires. Our team of travel experts will work with you to
                  create the perfect itinerary that will make your dream
                  vacation a reality. Whether you are looking for a relaxing
                  beach getaway, an adventurous trek through the mountains, or a
                  cultural exploration of a new city, we have the knowledge and
                  expertise to make it happen. Contact us today to start
                  planning your dream vacation!
                </Paragraph>
              </div>
            </Col>
          </Row>
        </RootContainer>
      </div>
      <div className="pb-16">
        <RootContainer>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <DrdSection
                name="Our Team"
                description="Meet the team of travel experts who are passionate about creating unforgettable travel experiences for our clients.!"
              />
            </Col>
          </Row>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {teamList.map((team, index) => (
              <Card
                key={index}
                hoverable
                cover={
                  <Image
                    alt="example"
                    src={team.src}
                    width={200}
                    height={200}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                }
              >
                <Meta
                  className="text-center"
                  title={team.name}
                  description={team.title}
                />
                <div className="flex items-center gap-8 flex-wrap pt-6 justify-center">
                  <Link href="https://www.facebook.com/getMonirr">
                    <FaFacebook size={20} color="#3a643b" />
                  </Link>
                  <Link href="https://github.com/getMonirr">
                    <FaGithub size={20} color="#3a643b" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/getmonirr">
                    <FaLinkedin size={20} color="#3a643b" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </RootContainer>
      </div>
      <div>
        <DrdSection
          name="Contact Us"
          description="We are here to help you plan your dream vacation. Contact us today to get started!"
        />
        <div>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
