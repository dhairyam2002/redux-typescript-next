import Link from "next/link";

export default function Accounts (){
    return (
        <div>
            <div>
                <Link href={'/accounts/login'}>Login</Link>
            </div>

            <button>Logout</button>
        </div>
    )
}