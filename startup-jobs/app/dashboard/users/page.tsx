import Link from "next/link"

const page = () => {
  return (
    <div>
      
      <ul>
        
        <li>
            <Link href="/dashboard/users/1">
            user1
            </Link>
        </li>
        <li>
            <Link href="/dashboard/users/2">
            user2
            </Link>
        </li>
        <li>
            <Link href="/dashboard/users/3">
            user3
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default page
