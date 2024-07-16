import Link from "next/link";

export default function Error_404() {
    return (
        <div>
            Вы можете перейти на 
            <Link href='/'>главную страницу</Link>
            , или оставить свой комментарий на
            <Link href='/contacts'>странице контактов</Link>
            .
        </div>
    )
}