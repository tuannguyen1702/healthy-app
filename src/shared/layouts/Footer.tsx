import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-darker text-xs py-14">
            <nav className="text-white font-light flex gap-8 max-w-container mx-auto w-full">
                <a href="#" className="flex items-center space-x-2">会員登録</a>
                <a href="#" className="flex items-center space-x-2">運営会社</a>
                <a href="#" className="flex items-center space-x-2">利用規約</a>
                <a href="#" className="flex items-center space-x-2">個人情報の取扱について</a>
                <a href="#" className="flex items-center space-x-2">特定商取引法に基づく表記</a>
                <a href="#" className="flex items-center space-x-2">お問い合わせ</a>
            </nav>
        </div>

    );
};

export default Footer;
