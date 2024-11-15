import type { NextPage } from "next"
import Header from "../components/header"
import Button from "../components/button"
import Meta from "../components/meta"
import Link from "next/link"

function Card({ name, link, description, button, icon }) {
    return (
        <div>
            <div className="mb-8 pb-4 border-b flex justify-between">
                <div>
                    <h2 className="text-xl mb-2">{name}</h2>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
                <Link href={link}>
                    <Button icon={icon} className="">
                        {button}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

const About: NextPage = () => {
    return (
        <div>
            <Meta/>
            <Header/>
            <div className="place-items-center justify-center grid mt-32 mb-16">
                <h1 className="text-4xl font-semibold">About me</h1>
                <div className="mt-24 max-w-xl px-8">
                    <h2 className="font-medium text-gray-600 mb-2">Who am I?</h2>
                    <p className="text-xl">
                        I am Terfa John software Engineer  FE(heavy) who has a nack for creativity through tech innovation  with major intrest in AI technology  with my skills as a software engineer i am horning my skill sets towards building user-centric software products to make the revolutionization of tech available to everyone
                    </p>
                    <h2 className="font-medium text-gray-600 mb-2 mt-8">My career</h2>
                    <p className="text-xl">
                       As  Software engineer  my career path ranges from working in diffrent aspect of tech including ed-tech, food-tech, health-tech, and fin-tech i am constantly working towards advancing and exploring into AI-tech 
                    </p>
                    <h2 className="font-medium text-gray-600 mb-2 mt-8">Contact</h2>
                    <Card
                        name="Mail"
                        link="mailto:terfajohn45@gmail.com"
                        description="Shoot me an email!"
                        button="Compose"
                        icon="/icons/at-sign.svg"
                    />
                    <Card
                        name="Twitter"
                        link="https://twitter.com/terfajohn97"
                        description="Send me a DM on Twitter."
                        button="DM"
                        icon="/icons/twitter.svg"
                    />
                    <Card
                        name="Book a time"
                        link="https://cal.com/terfajohn"
                        description="Want a longer chat? Book a time"
                        button="Book"
                        icon="/icons/calendar.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default About