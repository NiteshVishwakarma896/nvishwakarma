import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
    const {title, url, description, source} = props;
    return (
        <Card className="max-w-[400px] rounded-md shadow-lg">
            <CardHeader className="flex gap-3">
                <FaGithub size={30} />
                <div className="w-full flex flex-row justify-between">
                <p className="text-md font-medium">{title}</p>
                <Link isExternal showAnchorIcon href={url} className="text-tiny text-lime-300">Visit Site</Link>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p style={{lineHeight:'24px'}} className="text-tiny sm:text-small font-normal">{description}</p>
            </CardBody>
            <Divider/>
            <CardFooter>
                <Link
                isExternal
                showAnchorIcon
                href={source}
                className="text-small"
                >
                Visit source code on GitHub.
                </Link>
            </CardFooter>
        </Card>
    );
}
