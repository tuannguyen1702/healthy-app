import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Navigation from "./Navigation";

const Header = () => {
    const router = useRouter();
    return (
        <>
            <header className="border-b fixed top-0 left-0 right-0 flex bg-dark z-10">
                <div
                    className="mx-auto w-full flex max-w-container items-center justify-between"
                    aria-label="Global">
                    <h1 className="flex">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                width={144}
                                height={64}
                                alt="Healthy"
                            />
                        </Link>
                    </h1>
                    <div className="flex-1 lg:justify-end">
                        <Navigation />
                    </div>
                </div>
            </header>
        </>

    );
};

export default Header;
