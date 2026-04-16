import { getFriends } from "@/lib/getFriends";
import FriendDetails from "@/components/FriendDetails";

export default async function FriendPage({ params }) {
  const { id } = await params;

  const friends = await getFriends();

  const friend = friends.find(
    (f) => String(f.id) === String(id)
  );

  if (!friend) {
    return <div className="p-10 text-center">Friend not found</div>;
  }

  return <div className="min-h-screen flex items-start justify-center pt-20">
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <FriendDetails friend={friend} />
    </div>
  </div>;
}